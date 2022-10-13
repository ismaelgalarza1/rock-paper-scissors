// function that determines that computers choice

getComputerChoice = () => {
  let wordsArr = ["Rock", "Paper", "Scissors"];
  const gameWords = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  return gameWords;
};
console.log(getComputerChoice);

//Function that play a around of rock paper scissors

playRound = (playerSection, computerSection) => {

};
const playerSection = "rock";
const computerSection = getComputerChoice;
console.log(playRound(playerSection, computerSection));

//the game function that calls the playRound function

game = (playRound) => {
    for( let i = 0; i < 5; i++){

    }

}