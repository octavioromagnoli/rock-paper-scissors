let compu = 0;
let pipol = 0;
let empates = 0;

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    return "Rock";
  } else if (choice > 0.66) {
    return "Scissors";
  } else { return "Paper"; }
}

function playGame(input) {
  let computerMove = getComputerChoice();
  let result = "";
  switch (computerMove) {
    case "Rock":
      if (input == "Rock") { result = "It's a Tie"; empates++;}
      if (input == "Scissors") { result = "Computer Wins :("; compu++;}
      if (input == "Paper") { result = "You win!!"; pipol++;}
      break;
    case "Paper":
      if (input == "Paper") { result = "It's a Tie";empates++;}
      if (input == "Rock") { result = "Computer Wins :("; compu++;}
      if (input == "Scissors") { result = "You win!!"; pipol++;}
      break;
    case "Scissors":
      if (input == "Scissors") { result = "It's a Tie"; empates++;}
      if (input == "Paper") { result = "Computer Wins :("; compu++;}
      if (input == "Rock") { result = "You win!!"; pipol++;}
      break;
  }
  console.log(`You:${input}, Computer:${computerMove}. ${result}
    puntajes:
        Vos: ${pipol}
        Compu: ${compu}
        Empates: ${empates}`)
}

const playButtons = document.querySelector(".playButtons");
playButtons.addEventListener("click", (event) => {
  let target = event.target;
  playGame(target.id);
});
