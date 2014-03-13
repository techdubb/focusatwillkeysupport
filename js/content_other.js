// Sit around and wait for people to press F2, so we can tell the background script.

var log = console.log.bind(console);

log('focus@will keys: keyboard listener loading');

var F2 = 113;

$("body").bind("keydown",function(event){
  console.log(event)
  if ( event.keyCode === F2) {
    log('F5 pressed');
    chrome.runtime.sendMessage({'action':'playtoggle'}, function(response) {
      log('Event page has responded.');
      log(response);
    });
  }
})
