let trackersByTab = {};

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'TRACKERS_FOUND') {
    trackersByTab[sender.tab.id] = message.trackers;
    browser.browserAction.setBadgeText({
      text: message.trackers.length > 0 ? String(message.trackers.length) : '',
      tabId: sender.tab.id,
    });
    browser.browserAction.setBadgeBackgroundColor({ color: '#8a5a2b' });
  }

  if (message.type === 'GET_TRACKERS') {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      const currentTabId = tabs[0].id;
      sendResponse(trackersByTab[currentTabId] || []);
    });
    return true;
  }
});