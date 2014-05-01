// Get start/stop requests from the background script and play the song

// var log = console.log.bind(console);
var log = function () { return; }

log('focus@will keyboard: key responder loading');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  log('Playing/pausing');
  // Quick leap into page JS world
  window.location = "javascript:$('.play').first().click()";
})
