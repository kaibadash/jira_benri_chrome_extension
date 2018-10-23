import 'chromereload/devonly';

chrome.runtime.onInstalled.addListener((details) => {
});

chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.pageAction.show(tabId);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      saveToClipboard(request.text);
  }
);

function saveToClipboard(str: string) {
  console.log("save", str);
  let textArea = document.createElement("textarea");
  textArea.style.cssText = "position:absolute;left:-100%";
  document.body.appendChild(textArea);

  textArea.value = str;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
