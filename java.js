function getComputerChoice(){
  let pick = ["rock", "paper", "scissors"];
  
  return pick[Math.floor(Math.random() * pick.length)];
}

console.log(getComputerChoice())

function getHumanChoice(){
    return prompt("pick yours");
}

console.log(getHumanChoice())
