/* eslint-disable */
import "bootstrap";
import "./style.css";

let randomPick = function (lower, upper) {
  return Math.floor(Math.random() * (upper - lower) + lower);
};
let suits = [{ heart: "♥" }, { club: "♠" }, { spade: "♣" }, { diamond: "♦" }];
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

let renderCard = function () {
  let suit = suits[randomPick(0, 3)];
  let rank = ranks[randomPick(0, 13)];
  let suitKey = Object.keys(suit)[0];
  let symbols = document.querySelectorAll(".symbol");
  let currentRank = document.querySelector(".rank");

  symbols.forEach(element => {
    let currentSym = element.classList[2];
    element.classList.remove(currentSym);
    element.classList.add(suitKey);
    element.innerHTML = suit[suitKey];
  });

  let rankColorSuit = currentRank.classList[1];
  currentRank.classList.remove(rankColorSuit);
  currentRank.classList.add(suitKey);
  currentRank.innerHTML = rank;
};

window.onload = function () {
  renderCard();
};

let randomGenButton = document.querySelector("#generateCard");
randomGenButton.addEventListener("click", function () {
  renderCard();
});

let myCounter = document.querySelector("#counter");
let setTime = 10;
let interval;

function startCounter() {
  setTime--;
  myCounter.textContent = setTime;
  if (setTime === 0) {
    renderCard();
  }
  if (setTime < 0) {
    setTime = 10;
    myCounter.textContent = setTime;
  }
}

let startTimer = document.querySelector("#startGen");
startTimer.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startCounter, 1000);
});

let stopTimer = document.querySelector("#stopGen");
stopTimer.addEventListener("click", function () {
  clearInterval(interval);
  setTime = 10;
  myCounter.textContent = setTime;
});

let inputWidth = document.querySelector("#widthInput");
let inputHeight = document.querySelector("#heightInput");
let cardSize = document.querySelector(".card");
let resizeButton = document.querySelector("#resizeCard");
let validation = function (input) {
  if (isNaN(input)) {
    return false;
  } else {
    return true;
  }
};

let validHeight = false;
let validWidth = false;

let resizeCard = function () {
  if (validHeight && validWidth) {
    cardSize.style.width = inputWidth.value + "vh";
    cardSize.style.height = inputHeight.value + "vh";
  } else {
    alert("Something went wrong: Please check your inputs");
  }
};

inputWidth.addEventListener("change", function (event) {
  let input = Number(event.target.value);
  let numberValidation = validation(input);

  if (!numberValidation) {
    alert("Invalid Input: Must be a number");
    return;
  }

  if (input >= 12) {
    validWidth = true;
  } else {
    alert("Width must be at least 12");
    validWidth = false;
  }
});

inputHeight.addEventListener("change", function (event) {
  let input = Number(event.target.value);
  let numberValidation = validation(input);

  if (!numberValidation) {
    alert("Invalid Input: Must be a number");
    return;
  }

  if (input >= 70) {
    validHeight = true;
  } else {
    alert("Height must be at least 70");
    validHeight = false;
  }
});

resizeButton.addEventListener("click", resizeCard);
