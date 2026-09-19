// Fetch the blocklist bundled with the extension
fetch(browser.runtime.getURL('blocklist.json'))
  .then((response) => response.json())
  .then((blocklist) => {
    const found = detectTrackers(blocklist);
    browser.runtime.sendMessage({ type: 'TRACKERS_FOUND', trackers: found });
  });

function detectTrackers(blocklist) {
  const scripts = document.querySelectorAll('script[src]');
  const matches = [];

  scripts.forEach((script) => {
    const src = script.src;
    blocklist.forEach((tracker) => {
      if (src.includes(tracker.name || tracker)) {
        matches.push(tracker.name || tracker);
      }
    });
  });

  return [...new Set(matches)]; // remove duplicates
}