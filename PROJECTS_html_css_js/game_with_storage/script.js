let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lost: 0,
  draw: 0,
};

function saveResult(score) {
  localStorage.setItem("score", JSON.stringify(score));
  console.log(localStorage.getItem("score"));
}
function showResult() {
  document.querySelector("#scoreboard").innerText = `
WIN: ${score.win}
LOST: ${score.lost}
DRAW: ${score.draw}
`;
}

function resetScore() {
  score = {
    win: 0,
    lost: 0,
    draw: 0,
  };
  localStorage.setItem("score", JSON.stringify(score));
  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber <= 1) {
    return "stone";
  } else if (randomNumber <= 2) {
    return "paper";
  } else return "scissor";
}

function evaluateResult(userChoice) {
  let computerChoice = generateComputerChoice();
  let result = "";
  if (userChoice === computerChoice) {
    result = "Draw";
    score.draw++;
  } else if (
    (userChoice === "stone" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "stone") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    result = "User wins";
    score.win++;
  } else {
    result = "Computer wins";
    score.lost++;
  }
  document.querySelector("#result").innerText = `USER CHOICE: ${userChoice} 
    COMPUTER CHOICE: ${computerChoice}
    RESULT: ${result}`;
  saveResult(score);
  showResult();
}
showResult();