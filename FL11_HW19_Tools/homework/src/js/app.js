import "../scss/styles.scss";
import { changePage } from "./changePage";
import { resetGame } from "./resetGame";
import { gameLogic } from "./gameLogic";

const btnLetsPlay = document.getElementById("btn-lets-play");
const btnReset = document.getElementById("btn-reset");

const content = document.getElementById("content");
export const playArea = document.getElementById("play-area");
export const resultArea = document.getElementById("final-result-area");

export const userChoice = document.getElementById("your-choice");
export const compChoice = document.getElementById("opponent-choice");
export const roundResult = document.getElementById("round-result");
export const round = document.getElementById("current-round");

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

btnLetsPlay.addEventListener("click", () => changePage(content, playArea));
btnReset.addEventListener("click", () => {
  changePage(resultArea, content);
  resetGame(userChoice, compChoice, roundResult, round);
});

btnRock.addEventListener("click", () => gameLogic(1));
btnPaper.addEventListener("click", () => gameLogic(2));
btnScissors.addEventListener("click", () => gameLogic(3));
