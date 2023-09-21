chrome.webNavigation.onCommitted.addListener((details) => {
  const urlsToRedirectFrom = [
    "https://www.nytimes.com/",
    "https://www.bloomberg.com/",
    "https://www.ft.com/",
    "https://www.wsj.com/",
    "https://www.washingtonpost.com/",
    "https://www.theatlantic.com/",
  ];
  const newURLBase = "https://archive.is/";

  if (
    urlsToRedirectFrom.some(
      (url) => details.url.startsWith(url) && details.url.length > url.length
    )
  ) {
    // strip out url parameters
    let appendedURL = details.url.split("?")[0];

    const redirectURL = newURLBase + appendedURL;
    chrome.tabs.update(details.tabId, { url: redirectURL });
  }
});
