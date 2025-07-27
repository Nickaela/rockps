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

console.log(getComputerChoice());

function getHumanChoice(){
 const hooman = prompt("Which one do you pick?, Rock, Paper or Scissors?");
 return hooman;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors'){
    console.log('you WIN, rock beats scissors');
    humanScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'paper'){
    console.log('you LOSE, paper beats rock');
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock'){
    console.log('you WIN, paper beats rock');
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
    console.log('you LOSE, scissors beats paper');
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
    console.log('you WIN, scissors beats paper');
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
    console.log('you LOSE, rock beats scissors');
    computerScore++;
  } else {
    console.log('its a tie');
  }
}


//my own version of playRound function
// playRound(getHumanChoice(), getComputerChoice());
// console.log(computerScore)
// console.log(humanScore)
