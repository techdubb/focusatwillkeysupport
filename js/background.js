// Get function key presses from other tabs, send them to focus@will tab

// var log = console.log.bind(console);
var log = function () { return; }

log('focus@will keyboard: Background app running');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  log(request, sender, sendResponse);
  // Find focus@will tab
  if (request.action  == "playtoggle") {
    log('Received play/pause request');
    chrome.tabs.query({'url':'https://www.focusatwill.com/*'}, function(tabs) {
      if ( tabs.length) {
        log('Found a focusatwill tab');
        tabs.forEach(function(tab){
          chrome.tabs.sendMessage(tab.id, 'yo start or stop the noise or whatever');
        });
      } else {
        log('No focus@will tabs are running, so let\'s fire one up');
        chrome.tabs.create({
          url: 'https://www.focusatwill.com/music/#player',
          active: true
        }, function(tab){
          log('Opened new a focus@will tab');
        });
      }
      console.dir(tabs);
    });
  } else if (request.method == 'getFunctionKey') {
    sendResponse({functionKeyCode: localStorage['function_key_code']});
  } else {
    sendResponse({}); // no sah
  }
});
