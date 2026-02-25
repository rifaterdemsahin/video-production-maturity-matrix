# 🗄️ Qdrant Setup Guide

> **Vector DB** for semantic search across all maturity matrix documents.

---

## Docker Setup

```bash
# Pull and run Qdrant
docker run -p 6333:6333 -p 6334:6334 \
  -v $(pwd)/qdrant_storage:/qdrant/storage:z \
  qdrant/qdrant

# Verify
curl http://localhost:6333/collections
```

## Create Collection

```python
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams

client = QdrantClient("localhost", port=6333)

client.create_collection(
    collection_name="video_maturity",
    vectors_config=VectorParams(
        size=4096,  # nomic-embed-text dimensions
        distance=Distance.COSINE,
    ),
)
```

## Index All Markdown Files

```python
import os
from pathlib import Path
from qdrant_client.models import PointStruct

def index_docs(repo_path: str):
    points = []
    for md_file in Path(repo_path).rglob("*.md"):
        content = md_file.read_text()
        embedding = get_embedding(content[:8000])  # truncate for context
        points.append(PointStruct(
            id=hash(str(md_file)) % (2**63),
            vector=embedding,
            payload={
                "path": str(md_file.relative_to(repo_path)),
                "title": content.split('\n')[0].replace('#','').strip(),
                "preview": content[:200],
            }
        ))
    client.upsert(collection_name="video_maturity", points=points)
    print(f"Indexed {len(points)} documents")
```

## Semantic Search

```python
def search_docs(query: str, top_k: int = 5):
    query_vector = get_embedding(query)
    results = client.search(
        collection_name="video_maturity",
        query_vector=query_vector,
        limit=top_k,
    )
    return [(r.score, r.payload['path'], r.payload['title']) for r in results]

# Example
results = search_docs("how to improve thumbnail CTR")
for score, path, title in results:
    print(f"{score:.3f} | {path} | {title}")
```
