# 💻 5_Symbols — The "Reality"

> **Stage Purpose:** Core source code, scripts, and implementation. This is where the theory meets actual code.

---

## 📁 Code Inventory

| File | Purpose | Language |
|------|---------|----------|
| [indexer.py](indexer.py) | Index all markdown docs into Qdrant | Python |
| [search.py](search.py) | CLI semantic search tool | Python |
| [maturity_calculator.py](maturity_calculator.py) | Calculate and visualize maturity scores | Python |
| [publish_workflow.sh](publish_workflow.sh) | Automated publish + repurpose pipeline | Bash |

---

## 🔢 Maturity Score Calculator

The maturity calculator reads scores from `1_Real_Unknown/maturity-assessment.md` and generates:
- ASCII radar chart (terminal)
- JSON export for the index.html dashboard
- Markdown summary report

---

## 🤖 Semantic Search

Using `nomic-embed-text` via Ollama + Qdrant:

```bash
# Index all docs
python 5_Symbols/indexer.py --repo-path .

# Search
python 5_Symbols/search.py "how to improve CTR"
```

Expected output:
```
🔍 Searching: "how to improve CTR"

1. 0.923 | 4_Formula/thumbnail-seo.md | Thumbnail & SEO Formula
2. 0.887 | 4_Formula/research-notes.md | Research Notes
3. 0.812 | 1_Real_Unknown/maturity-assessment.md | Thumbnail/SEO Level 1.8
4. 0.794 | 7_Testing_Known/README.md | Testing Checklist
```

---

## 🎨 PrismJS Integration

All code blocks in markdown files are syntax-highlighted using PrismJS when rendered via `markdown_renderer.html`.

Supported languages:
- `python`, `bash`, `javascript`, `yaml`, `json`, `sql`, `docker`

---

## 🚀 Quick Start

```bash
# Install dependencies
pip install qdrant-client requests pathlib

# Start AI stack
docker compose -f 2_Environment/docker-compose.yml up -d

# Pull embedding model
ollama pull nomic-embed-text

# Index all docs
python 5_Symbols/indexer.py

# Test search
python 5_Symbols/search.py "editing workflow"
```
