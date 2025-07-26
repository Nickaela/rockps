function getComputerChoice(){
  const pcChoice = Math.floor(Math.random() * 3);
  if (pcChoice === 0){
    console.log("rock");
  } else if (pcChoice === 1){
    console.log("paper");
  } else {
    console.log("scissors");
  }
}

function getHumanChoice(){
  const hoomanChoice = prompt("Which one do you pick?, Rock, Paper or Scissors?");
  console.log(hoomanChoice);
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
  
  if (humanChoice === 'rock' && computerChoice === 'scissors'){
    console.log('You win, rock beats scissors');
  } else {
    console.log('try again');
  }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);