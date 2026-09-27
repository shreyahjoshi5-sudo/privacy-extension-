# Tracker Detector

A Firefox extension that detects known tracker scripts on any webpage 
you visit and shows you what's loading, right from the toolbar.

This tool doesn't block anything — it simply makes visible what's 
already happening on most websites, so users can make their own 
informed decisions.

📖 See [RESOURCES.md](./RESOURCES.md) for setup, concepts, and how to 
get started.

🤝 See [CONTRIBUTING.md](./CONTRIBUTING.md) for coding conventions and 
PR guidelines.

## Quick start

1. Clone this repo
2. In Firefox, go to `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on"** and select `manifest.json`
4. Visit any website and click the extension icon in the toolbar

## What it does

- Scans the current page's scripts against a list of known tracker 
  domains (analytics, advertising, social media trackers)
- Shows a popup with what was found, categorized where available
- Includes a Settings tab with basic info about the extension and 
  blocklist coverage

## License

MIT — see [LICENSE.md](./LICENSE.md)