//Declartation of the player and comupter's score for the game
let playerScore = 0;
let computerScore = 0;
// function that determines that computers choice

const computerPlay = () => {
  const computerArr = ["rock", "paper", "scissors"];
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
    return "Please selection the correct weapon";
  }
};

const gamePlay = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "choose your weapon",
      "Rock, Paper, or Scrissors"
    );
    const lowerCapPlayerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    return "You Beat the computer!";
  } else if (playerScore < computerScore) {
    return " You Lost, the computer won!";
  } else {
    return " you tied with the computer!";
  }
};
//the Game() function that calls the playRound function and keeps track of scores
console.log(gamePlay());
