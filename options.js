// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("function-key");
  var key_code = select.children[select.selectedIndex].value;
  localStorage["function_key_code"] = key_code;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved. ";
  setTimeout(function() {
    status.innerHTML = "";
  }, 2000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var key_code = localStorage["function_key_code"];
  if (!key_code) {
    return;
  }
  var select = document.getElementById("function-key");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == key_code) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);