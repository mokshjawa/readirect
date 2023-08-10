chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const urlToRedirectFrom = "https://old-url.com/";
  const newURL = "https://new-url.com/";

  if (details.url.startsWith(urlToRedirectFrom)) {
    const redirectURL = details.url.replace(urlToRedirectFrom, newURL);
    chrome.tabs.update(details.tabId, { url: redirectURL });
  }
});
