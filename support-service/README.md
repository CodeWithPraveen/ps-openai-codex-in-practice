# Globomantics Support Service — Initial

Python service that powers the Globomantics customer-support assistant. This is the **starting state** used in the Module 2 demo.

## What to look for

- **Model**: `gpt-3.5-turbo-0613` (legacy)
- **Function calling**: deprecated `functions` + `function_call="auto"` parameters
- **Hard-coded request params**: `max_tokens`, `temperature`, `top_p`, `frequency_penalty`, `presence_penalty`
- **Response parsing**: `.function_call` (single-tool, no parallel tool call support)

Use Codex with `$openai-docs` to inventory this integration and produce a migration plan.

## Setup

```bash
pip install -r requirements.txt
export OPENAI_API_KEY=your_key_here
```

## Run tests

```bash
pytest tests/
```
