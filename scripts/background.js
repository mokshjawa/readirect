chrome.webNavigation.onCommitted.addListener((details) => {
  // TODO: turn this into a set of urls
  const urlToRedirectFrom = "https://www.nytimes.com/";
  const newURLBase = "https://archive.is/";

  if (details.url.startsWith(urlToRedirectFrom)) {
    // strip out url parameters
    let appendedURL = details.url.split("?")[0];

    const redirectURL = newURLBase + appendedURL;
    chrome.tabs.update(details.tabId, { url: redirectURL });
  }
});
