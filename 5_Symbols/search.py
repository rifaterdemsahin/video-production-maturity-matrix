#!/usr/bin/env python3
"""
🔍 Semantic Search CLI
Search across all Video Production Maturity Matrix documents
using natural language queries.

Usage:
    python search.py "how to improve thumbnail CTR"
    python search.py "editing workflow DaVinci" --top 10
"""

import os
import sys
import argparse
import requests

# ── CONFIG ──
OLLAMA_URL = os.getenv("OLLAMA_HOST", "http://localhost:11434")
QDRANT_URL = os.getenv("QDRANT_HOST", "http://localhost:6333")
COLLECTION = os.getenv("QDRANT_COLLECTION", "video_maturity")
MODEL = os.getenv("OLLAMA_MODEL", "nomic-embed-text")

STAGE_LABELS = {
    "1_Real_Unknown": "❓ Stage 1: Real Unknown",
    "2_Environment":  "🌍 Stage 2: Environment",
    "3_Simulation":   "🎨 Stage 3: Simulation",
    "4_Formula":      "📐 Stage 4: Formula",
    "5_Symbols":      "💻 Stage 5: Symbols",
    "6_Semblance":    "🐛 Stage 6: Semblance",
    "7_Testing_Known":"✅ Stage 7: Testing",
    "root":           "📁 Root",
}


def get_embedding(text: str) -> list:
    response = requests.post(
        f"{OLLAMA_URL}/api/embeddings",
        json={"model": MODEL, "prompt": text},
        timeout=30
    )
    response.raise_for_status()
    return response.json()["embedding"]


def search(query: str, top_k: int = 5) -> list:
    query_vector = get_embedding(query)
    resp = requests.post(
        f"{QDRANT_URL}/collections/{COLLECTION}/points/search",
        json={"vector": query_vector, "limit": top_k, "with_payload": True}
    )
    resp.raise_for_status()
    return resp.json()["result"]


def main():
    parser = argparse.ArgumentParser(description="Semantic search over maturity docs")
    parser.add_argument("query", nargs="?", help="Search query")
    parser.add_argument("--top", "-n", type=int, default=5, help="Number of results")
    args = parser.parse_args()

    query = args.query or input("🔍 Enter search query: ").strip()
    if not query:
        print("❌ No query provided.")
        sys.exit(1)

    print(f"\n🔍 Searching: \"{query}\"\n" + "─" * 50)

    try:
        results = search(query, args.top)
    except requests.exceptions.ConnectionError:
        print("❌ Cannot connect to Ollama or Qdrant.")
        print("   Run: docker compose up -d && ollama serve")
        sys.exit(1)

    if not results:
        print("No results found. Run indexer.py first.")
        return

    for i, r in enumerate(results, 1):
        p = r["payload"]
        stage = STAGE_LABELS.get(p.get("stage", "root"), p.get("stage", ""))
        score = r["score"]
        bar = "█" * int(score * 20) + "░" * (20 - int(score * 20))
        print(f"\n{i}. [{bar}] {score:.3f}")
        print(f"   {stage}")
        print(f"   📄 {p['path']}")
        print(f"   📌 {p['title']}")
        if p.get("preview"):
            preview = p["preview"][:120].replace("\n", " ").strip()
            print(f"   💬 {preview}...")


if __name__ == "__main__":
    main()
