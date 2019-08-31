import { changePage } from "./changePage";

import { playArea } from "./app";
import { resultArea } from "./app";
import { userChoice } from "./app";
import { compChoice } from "./app";
import { roundResult } from "./app";
import { round } from "./app";

export function gameLogic(buttonPressed) {
  if (currentRound === 3) {
    if (opponentWins === playerWins) {
      winner = 2;
    } else if (opponentWins > playerWins) {
      winner = 1;
    } else {
      winner = 0;
    }
    changePage(playArea, resultArea);
    winnerElem.innerHTML = winnerTexts[winner];
    currentRound = 0;
    round.innerHTML = currentRound;
  }
  round.innerHTML = currentRound;
  const randomNum = Math.floor(Math.random() * 3) + 1;
  userChoice.innerHTML = pickButtonsArr[buttonPressed - 1];
  compChoice.innerHTML = pickButtonsArr[randomNum - 1];

  if (randomNum === buttonPressed) {
    roundResult.innerHTML = "DRAW";
  } else if (buttonPressed === 3 && randomNum === 1) {
    roundResult.innerHTML = "YOU WON";
    playerWins++;
  } else if (buttonPressed === 1 && randomNum === 3) {
    roundResult.innerHTML = "YOU LOST";
    opponentWins++;
  } else if (buttonPressed < randomNum) {
    roundResult.innerHTML = "YOU WON";
    playerWins++;
  } else {
    roundResult.innerHTML = "YOU LOST";
    opponentWins++;
  }
  currentRound++;
}

const winnerElem = document.getElementById("winner");

const pickButtonsArr = ["Rock", "Paper", "Scissors"];

let currentRound = 1;
let winner;
let opponentWins = 0;
let playerWins = 0;
let winnerTexts = [
  "Congratulations, you won this battle!",
  "Unfortunately, you lost this battle.",
  "Hmm, the battle is over, but everyone is dead..."
];
