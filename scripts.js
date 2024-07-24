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
      if (input == "Rock") { result = "It's a Tie"; empates++; }
      if (input == "Scissors") { result = "Computer Wins :("; compu++; }
      if (input == "Paper") { result = "You win!!"; pipol++; }
      break;
    case "Paper":
      if (input == "Paper") { result = "It's a Tie"; empates++; }
      if (input == "Rock") { result = "Computer Wins :("; compu++; }
      if (input == "Scissors") { result = "You win!!"; pipol++; }
      break;
    case "Scissors":
      if (input == "Scissors") { result = "It's a Tie"; empates++; }
      if (input == "Paper") { result = "Computer Wins :("; compu++; }
      if (input == "Rock") { result = "You win!!"; pipol++; }
      break;
  }
  console.log(`You:${input}, Computer:${computerMove}. ${result}
    puntajes:
        Vos: ${pipol}
        Compu: ${compu}
        Empates: ${empates}`)
  displayResults(input,computerMove,result,pipol,compu,empates);
}

function displayResults(playerMove, compuMove, result, playerScore, compuScore, ties) {
  const resultScreen = document.querySelector(".resultScreen");
  resultScreen.innerHTML = "";

  const movesDisplay = document.createElement("p");
  movesDisplay.setAttribute("class", "scores playerScore");
  movesDisplay.textContent = `Jugaste: ${playerMove} || Compu jugó: ${compuMove}. ==> ${result}`;

  const playerSDisplay = document.createElement("span");
  playerSDisplay.setAttribute("class", "scores playerScore");
  playerSDisplay.textContent = `You:
  ${playerScore} `;

  const computerSDisplay = document.createElement("span");
  computerSDisplay.setAttribute("class", "scores playerScore");
  computerSDisplay.textContent = `Computer:
  ${compuScore} `;
  
  const tieSDisplay = document.createElement("span");
  tieSDisplay.setAttribute("class", "scores tieScore");
  tieSDisplay.textContent = `Empates:
  ${ties} `;

  
  resultScreen.appendChild(movesDisplay);
  resultScreen.appendChild(playerSDisplay);
  resultScreen.appendChild(computerSDisplay);
  resultScreen.appendChild(tieSDisplay);

  if (playerScore === 5){
    let rText = document.createTextNode("GANASTE")
    resultScreen.appendChild(rText);
  }
  else if (compuScore === 5){
    let rText = document.createTextNode("PERDISTE")
    resultScreen.appendChild(rText);
  }

}

const playButtons = document.querySelector(".playButtons");
playButtons.addEventListener("click", (event) => {
  let target = event.target;
  playGame(target.id);
});
