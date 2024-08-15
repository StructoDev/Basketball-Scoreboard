"use strict";
//Home team

let score = 0;
function addOnebtnHome() {
  score += 1;
  document.getElementById("scoreHome").textContent = score;
}
function addTwobtnHome() {
  score += 2;
  document.getElementById("scoreHome").textContent = score;
}

function addThreebtnHome() {
  score += 3;
  document.getElementById("scoreHome").textContent = score;
}
// Guest Team

function addOnebtnGuest() {
  score += 1;
  document.getElementById("scoreGuest").textContent = score;
}
function addTwobtnGuest() {
  score += 2;
  document.getElementById("scoreGuest").textContent = score;
}

function addThreebtnGuest() {
  score += 3;
  document.getElementById("scoreGuest").textContent = score;
}
// New Game
function newGame() {
  document.getElementById("scoreHome").textContent = 0;
  document.getElementById("scoreGuest").textContent = 0;
}
