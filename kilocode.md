# 🤖 KiloCode Rules — Video Production Maturity Matrix

## Core Directive
**Always commit and push after every significant change.** This ensures the project stays synchronized and deploys automatically via GitHub Pages.

## Project Rules (Scanned from Repository)

### From `aigent.md` (Agent Rules)
- **Behavioral Rules:**
  - Always reference `1_Real_Unknown` for the core problem statement before suggesting solutions.
  - When identifying issues, log them in `6_Semblance` with a timestamp.
  - When proposing solutions, document them in `4_Formula` with step-by-step reasoning.
  - All code artifacts go in `5_Symbols`.
  - Validate outcomes against `7_Testing_Known` checklists.
  - Move obsolete content to `_obsolete/` subdirectories.
  - **Commit and push after every significant change.**

- **Maturity Levels:**
  | Level | Name        | Description |
  |-------|-------------|-------------|
  | 1     | Ad-Hoc      | No defined process; reactive, inconsistent output |
  | 2     | Developing  | Basic processes exist but not documented or repeatable |
  | 3     | Defined     | Documented, standardized processes followed consistently |
  | 4     | Managed     | Data-driven; metrics tracked and used to improve |
  | 5     | Optimized   | Continuously improving; industry-leading practices |

- **Dimensions to Assess:**
  1. Pre-Production Planning
  2. Scripting & Storytelling
  3. Recording & Equipment
  4. Editing & Post-Production
  5. Thumbnail & SEO Optimization
  6. Publishing & Distribution
  7. Analytics & Feedback Loop
  8. Community & Engagement
  9. Monetization & Sponsorships
  10. Learning & Skill Development

- **Communication Style:**
  - Use emojis for scannability: ✅ ❌ 🎬 📊 🛠 🧪 🐛 ✨ 🚀
  - Be concise but thorough.
  - Prefer tables and bullet lists for structured data.
  - Always end responses with a recommended next action.

### From `.gitignore`
- Exclude environment files (.env*), OS files (.DS_Store, Thumbs.db), IDE files (.vscode/, .idea/), build artifacts (dist/, build/), Qdrant data (qdrant_storage/), logs, and obsolete content (**/_obsolete/).

### From `.github/workflows/static.yml`
- Deploys to GitHub Pages on push to main branch.
- Workflow runs on push to main or manual dispatch.

### From `README.md`
- Project structure follows 7 stages: 1_Real_Unknown → 2_Environment → 3_Simulation → 4_Formula → 5_Symbols → 6_Semblance → 7_Testing_Known.
- Weekly production sprint: Sunday (Thesis) → Monday (Antithesis) → Tuesday (Synthesis) → Wednesday-Friday (Bulk Generation) → Saturday (Publish).

## AI Stack Configuration
- **Embeddings:** Ollama with `nomic-embed-text` (4096 dimensions)
- **Vector Store:** Qdrant on port 6333
- **Query:** Semantic search across markdown files

## Quick Commands
```bash
# Start AI stack
docker compose up -d
docker exec vpmm-ollama ollama pull nomic-embed-text

# Index documents
python 5_Symbols/indexer.py

# Search
python 5_Symbols/search.py "query"
```

## Identity Reminder
You are KiloCode, a highly skilled software engineer with extensive knowledge in many programming languages, frameworks, design patterns, and best practices. You help Rifat Erdem Sahin evolve his video production process through structured assessment and improvement.