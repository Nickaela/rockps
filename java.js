function getComputerChoice(){
  const pcChoice = Math.floor(Math.random() * 3) ;
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

let game = 0;
let humanScore = 0;
let pcScore = 0;



function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === 'rock' && computerChoice === 'scissors'){
    humanScore++;
    ++game;

       gameResult.textContent = 'you WIN, rock beats scissors';
       human.textContent = "Your score: " + humanScore;
       pc.textContent = "Computer score: " + pcScore;
       winner;
    
    
  } else if (humanChoice === 'rock' && computerChoice === 'paper'){
    pcScore++;
    ++game;
winner;
       gameResult.textContent = 'you LOSE, paper beats rock';
       human.textContent = "Your score: " + humanScore;
       pc.textContent = "Computer score: " + pcScore;
       
    
  } else if (humanChoice === 'paper' && computerChoice === 'rock'){
    humanScore++;
    ++game;
winner;
       gameResult.textContent = 'you WIN, paper beats rock';
       human.textContent = "Your score: " + humanScore;
       pc.textContent = "Computer score: " + pcScore;
   
  } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
    pcScore++;
    ++game;
winner;
       gameResult.textContent = 'you LOSE, scissors beats paper';
       human.textContent = "Your score: " + humanScore;
       pc.textContent = "Computer score: " + pcScore;
     
  } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
   humanScore++;
    ++game;
winner;
       gameResult.textContent = 'you WIN, scissors beats paper';
       human.textContent = "Your score: " + humanScore;
       pc.textContent = "Computer score: " + pcScore;

  } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
   pcScore++;
    ++game;
winner;
       gameResult.textContent = 'you LOSE, rock beats scissors';
       human.textContent = "Your score: " + humanScore;
       pc.textContent = "Computer score: " + pcScore;

  } else {
    gameResult.textContent = 'its a tie';
    ++game;
    winner;
    human.textContent = "Your score: " + humanScore;
    pc.textContent = "Computer score: " + pcScore;

  }
}

const buttons = document.querySelectorAll("button");
const gameResult = document.querySelector(".gameResult");
const human = document.querySelector(".human");
const pc = document.querySelector(".pc");
const winner = document.querySelector(".winner");


buttons.forEach((button) => {

  button.addEventListener("click", (e) => {
  
  const b = e.target.id;


  const humanSelection = b;
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  if (humanScore === 5) {
    winner.textContent = "HUMANS WINS"
  } 

  if (pcScore === 5) {
    winner.textContent = "PC WINS";
  }

});
});

