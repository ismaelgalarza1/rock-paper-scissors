/* 
    The Odin Project 
    Name: Ismael Galarza
    Project: Rock, Paper, Scrissors part 2
    */
//three buttons that are going to be used for the game 1. playerSelections, computerSelection, and Start button.

let playerBtn = document.createElement("button", "Player");
playerBtn.onclick = () => {
  playRound(playerSelection);
};
console.log(playerBtn);

let compBtn = document.createElement("button", "Computer");
compBtn.onclick = () => {
  playRound(computerSelection);
};
console.log(compBtn);

let startBtn = document.createElement("button", "Start");
startBtn.onclick = () => {
  playRound();
};
console.log(startBtn);

let div = document.createElement('div')
console.log(div)

//Declartation of the player and comupter's score for the game
let playerScore = 0;
let computerScore = 0;

// function that determines that computers choice

const computerPlay = () => {
  const computerArr = ["Rock", "Paper", "Scissors"];
  const randNum = Math.floor(Math.random() * 3);
  const computerChoice = computerArr[randNum];
  return computerChoice;
};

//Function that play a around of rock paper scissors

playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return "You tied with the computer!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
  } else {
    return "Please select the correct weapon";
  }
};

// function that determines the winner through a for loop
// and used toLowerCase()

// const gamePlay = () => {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt(
//       "choose your weapon",
//       "Rock, Paper, or Scrissors"
//     );
//     const computerSelection = computerPlay().toLowerCase();
//     playRound(playerSelection.toLowerCase(), computerSelection);
//   }
//   if (playerScore > computerScore) {
//     return "You Beat the computer!";
//   } else if (playerScore < computerScore) {
//     return " You Lost, the computer won!";
//   } else {
//     return " you tied with the computer!";
//   }
// };

//the Game() function that calls the playRound function and keeps track of scores

// console.log(gamePlay());
