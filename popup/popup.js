browser.runtime.sendMessage({ type: 'GET_TRACKERS' }).then((trackers) => {
  const countEl = document.getElementById('count');
  const listEl = document.getElementById('trackerList');

  if (trackers.length === 0) {
    countEl.textContent = 'No known trackers detected.';
    return;
  }

  countEl.textContent = `${trackers.length} tracker(s) found:`;
  trackers.forEach((tracker) => {
    const li = document.createElement('li');
    li.textContent = tracker;
    listEl.appendChild(li);
  });
});