/* 
    The Odin Project 
    Name: Ismael Galarza
    Project: Rock, Paper, Scrissors part 2
    */

//the player and comupter's score for the game
let player;
let playerScore = 0;
let computerScore = 0;
let gameBtns = document.querySelectorAll(".container-buttons button");
let display = document.querySelector("div.display");
let compText = document.querySelector(".container-text .compText");
let compScore = document.getElementById("computerScore");
let playerDisp = document.querySelector(".playerText");
let playerDisScore = document.getElementById("player-score");
let theWinner = document.querySelector("div.winner");
const newGame = document.querySelector(".restartBtn");
// function that determines that computers choice

const getComputerPlay = () => {
  const computerArr = ["Rock", "Paper", "Scissors"];
  const randNum = Math.floor(Math.random() * 3);
  const computerSelection = computerArr[randNum];
  return computerSelection;
};

//the for each function that displays the score, choice, and score for each button pressed.

gameBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerSelection = getComputerPlay();
    display.textContent = game();
    playerDisp.textContent = `${player} `;
    compText.textContent = ` ${computerSelection} `;
    compScore.textContent = `Score: ${computerScore}`;
    playerDisScore.textContent = `Score: ${playerScore}`;
    theWinner.textContent = getGameScore();
  })
);

// function that determines the gameplay, winner , and added the game's score
const game = () => {
  computerChoice = getComputerPlay();

  if (player === computerSelection) {
    return `Player's ${player} and Computer's ${computerSelection} are Tied!`;
  } else if (
    (player === "Scissors" && computerSelection === "Paper") ||
    (player === "Paper" && computerSelection === "Rock") ||
    (player === "Rock" && computerSelection === "Scissors")
  ) {
    playerScore++;
    return `Player's ${player} Beats Computer's ${computerSelection}`;
  } else if (
    (computerSelection === "Scissors" && player === "Paper") ||
    (computerSelection === "Paper" && player === "Rock") ||
    (computerSelection === "Rock" && player === "Scissors")
  ) {
    computerScore++;
    return `Computer's ${computerSelection} Beats Player's ${player}`;
  }
};
// Function that determines which player wins when the score equals 5.
getGameScore = () => {
  if (playerScore === 5) {
    return "Player Wins the Game";
  } else if (computerScore === 5) {
    return "Computer Wins the Game";
  } else {
    return;
  }
};
