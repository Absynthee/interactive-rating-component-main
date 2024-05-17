const numberButtons = document.querySelectorAll(".number");
const numberDisplay = document.getElementById("numberDisplay");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.getAttribute("data-number");
    numberDisplay.textContent = number;
    console.log("Button " + number + " has been selected");
  });
});

function buttonSubmit() {
  var divToHide = document.getElementsByClassName("rating-container")[0];
  var divToShow = document.getElementsByClassName("thanks-container")[0];
  var divToShowToo = document.getElementsByClassName("goback")[0];

  divToHide.style.display = "none";
  divToShow.style.display = "block";
  divToShowToo.style.display = "block";

  console.log("Your result has been submitted. Thank you!");
}

function goBack() {
  var divToHide = document.getElementsByClassName("thanks-container")[0];
  var divToHideToo = document.getElementsByClassName("goback")[0];
  var divToShow = document.getElementsByClassName("rating-container")[0];

  divToHide.style.display = "none";
  divToHideToo.style.display = "none";
  divToShow.style.display = "block";

  console.log("You have returned to the previous page");
}
