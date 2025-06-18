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
  let human = prompt("What's yours?");
  return human;
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

  

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);

