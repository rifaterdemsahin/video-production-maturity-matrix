#!/usr/bin/env python3
"""
🤖 Semantic Document Indexer
Indexes all markdown files from the Video Production Maturity Matrix
into Qdrant using Ollama's nomic-embed-text embeddings.
"""

import os
import json
import requests
import hashlib
from pathlib import Path

# ── CONFIG ──
OLLAMA_URL = os.getenv("OLLAMA_HOST", "http://localhost:11434")
QDRANT_URL = os.getenv("QDRANT_HOST", "http://localhost:6333")
COLLECTION = os.getenv("QDRANT_COLLECTION", "video_maturity")
MODEL = os.getenv("OLLAMA_MODEL", "nomic-embed-text")
DIMENSIONS = int(os.getenv("OLLAMA_DIMENSIONS", "4096"))
REPO_ROOT = Path(__file__).parent.parent


def get_embedding(text: str) -> list:
    """Get embedding vector from Ollama."""
    response = requests.post(
        f"{OLLAMA_URL}/api/embeddings",
        json={"model": MODEL, "prompt": text[:8000]},
        timeout=60
    )
    response.raise_for_status()
    return response.json()["embedding"]


def ensure_collection():
    """Create Qdrant collection if it doesn't exist."""
    resp = requests.get(f"{QDRANT_URL}/collections/{COLLECTION}")
    if resp.status_code == 404:
        requests.put(
            f"{QDRANT_URL}/collections/{COLLECTION}",
            json={
                "vectors": {
                    "size": DIMENSIONS,
                    "distance": "Cosine"
                }
            }
        ).raise_for_status()
        print(f"✅ Created collection: {COLLECTION}")
    else:
        print(f"✅ Collection exists: {COLLECTION}")


def get_doc_id(path: str) -> int:
    """Generate stable integer ID from file path."""
    return int(hashlib.md5(path.encode()).hexdigest()[:12], 16)


def index_documents():
    """Find and index all markdown files."""
    ensure_collection()

    md_files = list(REPO_ROOT.rglob("*.md"))
    md_files = [f for f in md_files if "_obsolete" not in str(f)]

    print(f"\n📂 Found {len(md_files)} markdown files to index\n")
    points = []

    for md_file in md_files:
        rel_path = str(md_file.relative_to(REPO_ROOT))
        content = md_file.read_text(encoding="utf-8")
        lines = content.strip().split("\n")
        title = lines[0].lstrip("#").strip() if lines else rel_path

        print(f"  📄 Indexing: {rel_path}")
        try:
            embedding = get_embedding(content)
            points.append({
                "id": get_doc_id(rel_path),
                "vector": embedding,
                "payload": {
                    "path": rel_path,
                    "title": title,
                    "preview": content[:300],
                    "word_count": len(content.split()),
                    "stage": rel_path.split("/")[0] if "/" in rel_path else "root"
                }
            })
        except Exception as e:
            print(f"    ❌ Error: {e}")

    if points:
        resp = requests.put(
            f"{QDRANT_URL}/collections/{COLLECTION}/points",
            json={"points": points}
        )
        resp.raise_for_status()
        print(f"\n✅ Indexed {len(points)} documents into '{COLLECTION}'")

    return len(points)


if __name__ == "__main__":
    print("🚀 Video Production Maturity Matrix — Document Indexer")
    print("=" * 55)
    count = index_documents()
    print(f"\n🎬 Done! {count} documents ready for semantic search.")
