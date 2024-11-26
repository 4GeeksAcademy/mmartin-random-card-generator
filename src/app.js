/* eslint-disable */
import "bootstrap";
import "./style.css";

let randomPick = function(lower, upper) {
  return Math.floor(Math.random() * (upper - lower) + lower);
};
let suits = [{ heart: "♥" }, { club: "♠" }, { spade: "♣" }, { diamond: "♦" }];
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let renderCard = function(suit, rank) {
  let suitKey = Object.keys(suit)[0];
  let symbols = document.querySelectorAll(".symbol");
  symbols.forEach(element => {
    let currentSym = element.classList[1];
    element.classList.remove(currentSym);
    element.classList.add(suitKey);
    element.innerHTML = suit[suitKey];
  });
  let currentRank = document.querySelector(".rank");
  currentRank.innerHTML = rank;
};

window.onload = function() {
  let suit = suits[randomPick(0, 3)];
  let rank = ranks[randomPick(0, 13)];

  renderCard(suit, rank);
};
