// function that determines that computers choice

getComputerChoice = (gameWords) => {
  return (gameWords = Math.floor(Math.random() * gameWords.length));
};
console.log(getComputerChoice);

//Function that play a around of rock paper scissors

playRound = (playerSection, computerSection) => {
  if (playerSection == computerSection) {
    console.log("tie");
  } else if (playerSection == "rock" && computerSection == "Scissors") {
    console.log(`${playerSection} beats ${computerSection}`);
  } else if (playerSection == "paper" && computerSection == "rock") {
    console.log(`${playerSection} beats ${computerSection}`);
  }else if (playerSection == "scissors" && computerSection == "paper"){
    console.log(`${playerSection} beats ${computerSection}`)
  } else {
    console.log(`${computerSection} beats ${playerSection}`);
  }
};
const playerSection = "rock";
const computerSection = getComputerChoice(["Rock", "Paper", "Scissors"]);
console.log(playRound(playerSection, computerSection));

//the game function that calls the playRound function
