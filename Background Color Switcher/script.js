const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    } else if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "yellow";
    }
  });
});
