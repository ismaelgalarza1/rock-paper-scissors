/* 
    The Odin Project 
    Name: Ismael Galarza
    Project: Rock, Paper, Scrissors part 2
    */

//Declartation of the player and comupter's score for the game
let player;
let playerScore = 0;
let computerScore = 0;
let gameBtns = document.querySelectorAll("div.container button");
let display = document.querySelector("div.display");
let compText = document.querySelector("div.compText");
let compScore = document.querySelector("div.compScore");
let playerDisp = document.querySelector("div.playerText");
let playerDisScore = document.querySelector("div.playerScore");
let theWinner = document.querySelector("div.winner");

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
    playerDisp.textContent = `Player: ${player} `;
    compText.textContent = `Computer: ${computerSelection} `;
    compScore.textContent = `Computer:${computerScore}`;
    playerDisScore.textContent = `Player: ${playerScore}`;
    console.log("1", playerScore, "2", computerScore);
    theWinner.textContent = getGameScore();
  })
);
// function that determines the gameplay, winner , and added the game's score
const game = () => {
  computerChoice = getComputerPlay();
  console.log("1", player, "2", computerSelection);
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
