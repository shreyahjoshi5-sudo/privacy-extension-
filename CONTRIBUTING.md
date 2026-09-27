# Contributing to Tracker Detector

Thanks for contributing! Here's what to know before opening a PR.

## Before you start

1. Read [RESOURCES.md](./RESOURCES.md) for setup and core concepts.
2. Check existing issues and comments — someone may already be working 
   on the same thing.
3. Run the extension locally and confirm it works before making changes 
   (see Setup in RESOURCES.md).

## Coding conventions

- **Blocklist entries** (`blocklist.json`): use the object format —
```json
  { "name": "example.com", "category": "analytics" }
```
  Valid categories: `analytics`, `advertising`, `social`. If you're 
  unsure which category fits, ask in your PR description.
- **JavaScript style**: match the existing code — `const`/`let` (no 
  `var`), arrow functions where the codebase already uses them, 
  descriptive variable names over abbreviations.
- **No new dependencies** without discussing first — this repo 
  intentionally has zero build tools/npm packages for the core 
  extension, to keep setup simple for beginners.

## Testing your changes

- Reload the extension via `about:debugging` after any change.
- Test on at least one real website before opening a PR.
- If you're fixing a detection bug, test with a local HTML file 
  containing a controlled example (see RESOURCES.md for a sample).

## Commit messages

Keep them short and descriptive, e.g.:
Add 5 new tracker domains to blocklist
Fix case-sensitivity in domain matching

## Opening your PR

Include in your PR description:
- What you changed
- Why
- How you tested it (e.g., "tested on hindustantimes.com, confirmed 
  X now shows correctly")
- The issue number you're addressing (e.g., "Closes #12")

## Review process

A maintainer will review your PR and may ask for small changes. This 
is normal — please respond to comments rather than closing/reopening 
a new PR unless asked to.

