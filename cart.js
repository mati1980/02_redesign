console.log("Siden vises");

var removeCartBoxButtons = document.getElementsByClassName("btn-area");

console.log(removeCartBoxButtons);

for (var i = 0; i < removeCartBoxButtons.length; i++) {
  var button = removeCartBoxButtons[i];
  button.addEventListener("click", function (event) {
    console.log("clicked");
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

function updateCartTotal() {
  var cartBoxContainer = document.getElementsByClassName("box")[0];
  var cartContent = cartBoxContainer.getElementsByClassName("content");
  for (var i = 0; i < cartContent.length; i++) {}
}
