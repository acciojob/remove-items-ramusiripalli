//your JS code here. If required.

let submit = document.getElementById("submit");
submit.addEventListener("click" , removeColor);

function removeColor() {
  var selectBox = document.getElementById("colorSelect");
  var selectedIndex = selectBox.selectedIndex;

  if (selectedIndex !== -1) {
    selectBox.remove(selectedIndex);
  }
}