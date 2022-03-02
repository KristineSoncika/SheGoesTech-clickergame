let cookieCount = document.getElementById("count");
let buttonStart = document.getElementById("btn-start");
let buttonClick = document.getElementById("btn-click");
let buttonReset = document.getElementById("btn-reset");
let result = document.getElementById("result");

let counter = 0;

buttonStart.onclick = function () {
  buttonClick.disabled = false;
  buttonStart.disabled = true;
  setTimeout(() => {
    buttonClick.innerHTML = "time is over";
    buttonClick.disabled = true;
    cookieCount.style.display = "none";
    result.style.display = "block";
    results();
    buttonReset.disabled = false;
  }, 5000);
};

buttonClick.onclick = function () {
  counter++;
  if (counter === 1) {
    cookieCount.innerHTML = `You currently have ${counter} cookie`;
  } else {
    cookieCount.innerHTML = `You currently have ${counter} cookies`;
  }
};

const results = () => {
  if (counter > 1) {
    return (result.innerHTML = `Congratulations! You got ${counter} cookies!`);
  } else if (counter === 1) {
    result.innerHTML = `Congratulations! You got ${counter} cookie!`;
  } else {
    result.innerHTML = `🤭 You did not get any cookies! Try again!`;
  }
};

buttonReset.onclick = function () {
  buttonStart.disabled = false;
  buttonReset.disabled = true;
  buttonClick.innerHTML = "click";
  counter = 0;
  cookieCount.innerHTML = `You currently have ${counter} cookies`;
  cookieCount.style.display = "block";
  result.style.display = "none";
};
