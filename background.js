chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'ieeexplore.ieee.org'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });

  var contextMenuItem = {
    "id" : "scihub",
    "title":"Open in SciHub",
    "contexts" : ["link"]
    
  };
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(onClickHandler);
// The onClicked callback function.
function onClickHandler(info, tab) {
  var url = "https://sci-hub.tw/" + info.linkUrl; 
  window.open(url, '_blank');
};