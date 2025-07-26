function getComputerChoice(){
  const pcChoice = Math.floor(Math.random() * 3);
  if (pcChoice === 0){
    return "rock";
  } else if (pcChoice === 1){
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(){
  const hoomanChoice = prompt("Which one do you pick?, Rock, Paper or Scissors?");
  return hoomanChoice;
}

let humanScore = 0;
let computerScore = 0;

