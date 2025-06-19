function getComputerChoice(){
  
 const pick = Math.floor(Math.random() * 3);
 let computer;
 
 if (pick === 0){
  computer = "rock";
 } else if (pick === 1){
  computer = "paper";
 } else {
  computer = "scissors";
 }

  return computer;

}

console.log(getComputerChoice())

function getHumanChoice(){
  const human = prompt("What's yours?");
  return human;
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){



    if (humanSelection == "rock" && computerSelection == "scissors"){
      console.log('you win');
    } else if (humanSelection == "paper" && computerSelection == "rock"){
      console.log('you win')
    } else if (humanSelection == "scissors" && computerSelection == "paper"){
      console.log('win');
    } else if (humanSelection == "rock" && computerSelection == "paper"){
      console.log('you lose');
    } else if (humanSelection == "paper" && computerSelection == "scissors"){
      console.log('you lose')
    } else if (humanSelection == "scissors" && computerSelection == "rock"){
      console.log('lose');
    } else {
      console.log('tie, try again');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);