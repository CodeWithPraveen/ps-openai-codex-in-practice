# OpenAI Codex in Practice

Starting-state snapshot of the two Globomantics repositories used in the **OpenAI Codex in Practice** Pluralsight course. These files represent the **before** picture — the code as it exists prior to any Codex-driven changes.

---

## Repositories

### `support-service` — Python / OpenAI

Customer-support assistant backend for Globomantics.

| Detail | Value |
|--------|-------|
| Language | Python 3 |
| Key dependency | `openai >= 1.0` |
| Model | `gpt-3.5-turbo-0613` (legacy) |
| API style | Deprecated `functions` + `function_call="auto"` parameters |

**What makes this the "before" state:**
- Uses the legacy `functions` / `function_call` calling convention (not `tools`)
- Hard-coded request params: `max_tokens`, `temperature`, `top_p`, `frequency_penalty`, `presence_penalty`
- Response parsed via `.function_call` — no parallel tool-call support

**Setup:**
```bash
cd support-service
pip install -r requirements.txt
export OPENAI_API_KEY=your_key_here
```

**Run tests:**
```bash
pytest tests/
```

---

### `web-app` — React / Vite

Globomantics storefront UI — Home and Orders pages with a customer-support button.

| Detail | Value |
|--------|-------|
| Language | JavaScript (JSX) |
| Framework | React 18 + React Router v6 |
| Build tool | Vite 5 |

**Setup:**
```bash
cd web-app
npm install
npm run dev
```

---

## Course Context

| Module | Demo focus |
|--------|-----------|
| M1 | Use Codex to inventory `support-service` and produce a migration plan |
| M2 | Use Codex to iterate on the `web-app` UI via in-app browser loop |
| M3 | Trigger Codex tasks from Slack against both repos |
