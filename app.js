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

//Function that play a around of rock paper scissors

gameBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;

    computerSelection = getComputerPlay();
    playerDisp.textContent = `Player: ${player} `;
    compText.textContent = `Computer: ${computerSelection} `;
    game();
    console.log("1", playerScore, "2", computerScore);

    // theWinner.textContent = winningScore();
  })
);

const game = () => {
  computerChoice = getComputerPlay();
  console.log("1", player, "2", computerSelection);
  if (player === computerSelection) {
    console.log("tie");
  } else if (computerSelection === "Rock") {
    return player == "Paper" ? playerScore++ : computerScore++;
  } else if (computerSelection === "Paper") {
    return player == "Scissors" ? playerScore++ : computerScore++;
  } else if (computerSelection === "Scissors") {
    return player === "Rock" ? playerScore++ : computerScore++;
  }
};

getGameScore = () => {
    if(playerScore === 5){
      return 
    }
} 
