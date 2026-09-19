# Resources — Privacy/Extension Tool (Tracker Detector)

## 1. What is this project?

A Firefox browser extension that scans any webpage you visit and checks if it's
loading scripts from known tracker companies (analytics, advertising, social
media tracking). When you click the extension icon, it shows you a list of
which trackers were found on the current page.

This tool doesn't block anything or judge whether a tracker is "good" or
"bad" — it simply makes visible what's already happening on most websites,
so users can make their own informed decisions.

## 2. Concepts you need to know

- **Third-party scripts**: code loaded from a domain other than the website
  you're visiting (e.g., a news site loading Google Analytics).
- **Tracker companies**: businesses whose scripts collect data about your
  browsing behavior across many unrelated sites (e.g., Chartbeat, DoubleClick).
- **Browser extension architecture**: three separate pieces of code that work
  together —
  - a **content script** (runs inside the webpage, does the scanning)
  - a **background script** (runs persistently, stores results)
  - a **popup** (the UI shown when you click the extension icon)
- **Message passing**: how these three pieces talk to each other, since none
  of them can directly call each other's functions.

## 3. Prerequisites

- Basic JavaScript (variables, functions, arrays, `fetch`)
- Basic HTML/CSS
- No prior extension-building experience required — this repo teaches it
- No AI/ML knowledge required for the core repo (only for the optional
  AI stretch issue)

## 4. Setup

1. Install [Firefox](https://www.mozilla.org/firefox/) if you don't have it.
2. Clone this repo.
3. In Firefox, go to `about:debugging#/runtime/this-firefox`.
4. Click **"Load Temporary Add-on..."** and select `manifest.json` from this
   repo's folder.
5. Visit any website (e.g., a news site) and click the extension icon in the
   toolbar to see detected trackers.
6. After making code changes, click **"Reload"** on the `about:debugging`
   page to apply them — no need to remove and re-load.

## 5. Recommended reading

- [MDN: Your first WebExtension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [MDN: Content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [MDN: manifest.json reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

## 6. Recommended videos

- Search "Firefox WebExtension tutorial" or "Chrome extension manifest v3
  tutorial" on YouTube — the WebExtensions API is nearly identical across
  browsers, so either works as a primer.

## 7. Glossary

- **Manifest**: the required JSON file describing an extension's name,
  permissions, and which files to run.
- **Content script**: JS that runs inside a webpage's context.
- **Background script**: JS that runs independently of any single page,
  for the lifetime of the browser session.
- **Popup**: the small HTML window shown when clicking the extension icon.
- **Blocklist**: our list of known tracker domains, stored as data
  (`blocklist.json`), separate from detection logic.
- **Badge**: the small number shown on top of the extension's icon.

## 8. Useful tools

- Firefox DevTools — Network and Sources tabs, to find real tracker domains
  on any live site.
- `about:debugging` — where you load, reload, and inspect this extension
  during development.
- The **Inspect** button (on `about:debugging`) — opens a dedicated console
  for debugging this extension's background script.

## 9. Before you pick an issue

- Run the extension locally first (Setup section above) and confirm it
  detects trackers on at least one real site.
- Read `content-script.js`, `background.js`, and `popup/` fully before
  picking an issue — most issues build directly on this existing code.
- Check issue labels: `good-first-issue` issues need no prior extension
  experience; `ai-track` issues assume you've done the Local Chatbot
  Starter Kit repo or are comfortable calling a local Ollama model.

## 10. How to submit your PR

1. Fork this repo and create a branch named for your issue
   (e.g., `add-undertone-tracker`).
2. Make your change and test it locally per the Setup steps.
3. Open a PR with:
   - What you changed
   - Why
   - How you tested it (e.g., "tested on hindustantimes.com, confirmed
     X tracker now shows in the popup")
4. Link the issue number in your PR description.
5. Respond to review comments — a maintainer will review within [your
   team's review window].