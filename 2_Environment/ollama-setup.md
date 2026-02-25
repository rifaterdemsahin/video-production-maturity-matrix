# 🤖 Ollama Setup Guide

> **Model:** `nomic-embed-text` | **Dimensions:** 4096 | **Platform:** macOS (Apple Silicon)

---

## Installation

```bash
# Install Ollama
brew install ollama

# Start Ollama service
ollama serve

# Pull the embedding model
ollama pull nomic-embed-text

# Verify
ollama list
```

## Generate Embeddings (Python)

```python
import requests
import json

def get_embedding(text: str) -> list[float]:
    response = requests.post(
        "http://localhost:11434/api/embeddings",
        json={
            "model": "nomic-embed-text",
            "prompt": text
        }
    )
    return response.json()["embedding"]

# Test
emb = get_embedding("Video production maturity level 3 defined process")
print(f"Dimensions: {len(emb)}")  # Should print: 4096
```

## Environment Variables

```env
OLLAMA_HOST=localhost
OLLAMA_PORT=11434
OLLAMA_MODEL=nomic-embed-text
OLLAMA_DIMENSIONS=4096
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| `connection refused` | Run `ollama serve` in a separate terminal |
| `model not found` | Run `ollama pull nomic-embed-text` |
| Slow on first run | Normal — model loading into memory |
| Out of memory | Restart with `OLLAMA_MAX_LOADED_MODELS=1` |
