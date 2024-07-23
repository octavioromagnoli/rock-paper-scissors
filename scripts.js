function getComputerChoice(){
  let choice = Math.random();
  if (choice < 0.33){
    return "Rock";
  } else if (choice > 0.66){
    return "Scissors";
  } else {return "Paper";}
}

function playGame(input){
  let computerMove = getComputerChoice();
  let result = "";
  switch (computerMove){
    case "Rock":
      if (input == "Rock"){ result = "It's a Tie";}
      if (input == "Scissors"){ result = "Computer Wins :(";}
      if (input == "Paper"){ result = "You win!!";}
      break;
    case "Paper":
      if (input == "Paper"){ result = "It's a Tie";}
      if (input == "Rock"){ result = "Computer Wins :(";}
      if (input == "Scissors"){ result = "You win!!";}
      break;
    case "Scissors":
      if (input == "Scissors"){ result = "It's a Tie";}
      if (input == "Paper"){ result = "Computer Wins :(";}
      if (input == "Rock"){ result = "You win!!";}
      break;
  }
  return `You:${input}, Computer:${computerMove}. ${result}`;
}


console.log(playGame("Rock"));