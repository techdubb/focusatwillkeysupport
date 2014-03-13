// Sit around and wait for people to press F2, so we can tell the background script.

var log = console.log.bind(console);

log('focus@will keys: keyboard listener loading');

chrome.runtime.sendMessage({method: "getFunctionKey"}, function(response) {
  var function_key = response.functionKeyCode;

  // the user has yet to select from the option menu
  if (!function_key) function_key = "113";

  log('Function key loaded from localStorage: ' + function_key);

  $("body").bind("keydown", { key_code: function_key }, function(event){
    if ( event.keyCode.toString() === event.data.key_code) {
      log('Function key pressed');
      chrome.runtime.sendMessage({'action':'playtoggle'}, function(response) {
        log('Event page has responded.');
        log(response);
      });
    }
  });
});



