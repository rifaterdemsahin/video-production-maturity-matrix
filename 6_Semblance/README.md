# 🐛 6_Semblance — The "Scars"

> **Stage Purpose:** Document the gap between plan and reality. Every error, near-miss, and workaround is a lesson. Log it here.

---

## 📋 Error Log Format

Each entry follows this template:

```
### [YYYY-MM-DD] Title of Issue
**Severity:** 🔴 Critical | 🟡 Medium | 🟢 Minor
**Dimension:** Pre-Production | Scripting | Recording | Editing | SEO | Analytics | etc.
**Expected:** What should have happened
**Actual:** What actually happened
**Root Cause:** Why it happened
**Fix Applied:** What was done to resolve it
**Prevention:** How to prevent recurrence (→ add to 4_Formula checklist)
```

---

## 🗂️ Error Log

### [2026-02-25] Repository initialization — GitHub Pages not auto-enabled
**Severity:** 🟡 Medium
**Dimension:** Environment
**Expected:** GitHub Pages would deploy automatically on push to main
**Actual:** Required manual enablement in repository settings (Actions tab)
**Root Cause:** New repositories don't have Pages enabled by default
**Fix Applied:** Added `.github/workflows/pages.yml` with `actions/deploy-pages`
**Prevention:** Always include Pages workflow in initial commit → ✅ Added to template

---

### [2026-02-25] Maturity scores are self-assessed, not data-driven
**Severity:** 🟡 Medium
**Dimension:** Analytics
**Expected:** Objective scoring from actual analytics data
**Actual:** Scores based on self-reflection without YouTube Analytics export
**Root Cause:** Analytics data not yet connected to maturity framework
**Fix Applied:** Documented as Level 1 (Ad-Hoc) in maturity assessment; scheduled weekly analytics review
**Prevention:** Add analytics export step to OKR review process → see `4_Formula/analytics-review.md`

---

## 🔄 Near-Misses

> Things that almost went wrong but were caught in time.

- **2026-02-25:** Almost committed `.env` with real credentials → Fixed by adding `.env` to `.gitignore` first

---

## 📊 Error Statistics

| Month | Critical | Medium | Minor | Resolved |
|-------|:--------:|:------:|:-----:|:--------:|
| Feb 2026 | 0 | 2 | 0 | 2 |

---

## 🔗 Related

- [OKRs](../1_Real_Unknown/okrs.md) — Track if errors impact OKR progress
- [Formula](../4_Formula/README.md) — Where fixes become process
- [Testing](../7_Testing_Known/README.md) — Where fixes get validated
