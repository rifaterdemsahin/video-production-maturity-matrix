# 🧠 AI Stack Configuration

> Full configuration for the semantic search system powering this maturity matrix.

---

## Architecture

```
┌─────────────────────────────────────────────┐
│           Markdown Files (Git Repo)          │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│    Indexer Script (Python)                  │
│    - Reads all *.md files                   │
│    - Sends text to Ollama                   │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│    Ollama: nomic-embed-text                 │
│    - Local embedding model                  │
│    - 4096 dimensions                        │
│    - Port: 11434                            │
└──────────────────┬──────────────────────────┘
                   │ vector
                   ▼
┌─────────────────────────────────────────────┐
│    Qdrant Vector Database                   │
│    - Collection: video_maturity             │
│    - Distance: Cosine                       │
│    - Port: 6333                             │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────┐
│    Search Interface                         │
│    - markdown_renderer.html (browser)       │
│    - CLI search script                      │
└─────────────────────────────────────────────┘
```

## Docker Compose

```yaml
version: '3.8'
services:
  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
      - "6334:6334"
    volumes:
      - ./qdrant_storage:/qdrant/storage
    restart: unless-stopped

  ollama:
    image: ollama/ollama:latest
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
    restart: unless-stopped
    deploy:
      resources:
        reservations:
          devices:
            - capabilities: [gpu]  # Remove if no GPU

volumes:
  ollama_data:
```

## Usage

```bash
# Start the stack
docker compose up -d

# Pull the model (first time)
docker exec -it <ollama-container> ollama pull nomic-embed-text

# Index all docs
python 5_Symbols/indexer.py

# Search
python 5_Symbols/search.py "how to improve editing workflow"
```
