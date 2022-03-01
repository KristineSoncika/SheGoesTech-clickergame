let cookieCount = document.getElementById("count");
let button = document.getElementById("button");
let result = document.getElementById("result");

let counter = 0;
function clickButton() {
  cookieCount.innerHTML = `You currently have ${counter} cookies`;
  counter++;

  setTimeout(() => {
    cookieCount.style.display = "none";
    result.style.display = "block";
    result.innerHTML = `Congratulations! You have won ${counter} cookies!`;
  }, 5000);
}

button.addEventListener("click", clickButton);
