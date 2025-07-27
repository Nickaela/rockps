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
 const hooman = prompt("Which one do you pick?, Rock, Paper or Scissors?");
 return hooman;
}

