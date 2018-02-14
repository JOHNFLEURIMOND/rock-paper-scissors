alert("Go");

var botScore = 0,
  playerScore = 0;
document.getElementById("rock").onclick = playerThrowsRock;

function playerThrowsRock() {
  var playersWeapon = "rock";
  var botsWeapon = getRandomWeapon(); //getRandomWeapon();
  checkWhoWon(botsWeapon, playersWeapon);
  if (botsWeapon === "paper") {
    return "paper wins";
  } else {
    return "rock wins";

  }
}

document.getElementById("scissors").onclick = playerThrowsScissors;

function playerThrowsScissors() {
  var playersWeapon = "scissors";
  var botsWeapon = getRandomWeapon(); //getRandomWeapon();
  checkWhoWon(botsWeapon, playersWeapon);
  if (botsWeapon === "rock") {
    return "rock wins";
  } else {
    return "scissors wins";

  }
}

document.getElementById("paper").onclick = playerThrowsPaper;

function playerThrowsPaper() {
  var playersWeapon = "paper";
  var botsWeapon = getRandomWeapon();
  checkWhoWon(botsWeapon, playersWeapon);
  if (botsWeapon === "scissors") {
    return "scissors wins";
  } else {
    return "paper wins";

  }
}


function getRandomWeapon() {
  var randomNumber = Math.random();
  var botsWeapon = "rock";
  if (randomNumber < .33) {
    botsWeapon = "scissors";
  } else if (randomNumber < .6666) {
    botsWeapon = "paper";
  }
  return botsWeapon;
}

function checkWhoWon(botsWeapon, playersWeapon) {
  if (botsWeapon == playersWeapon) {
    displayCompleteMessage("There was tie");
  } else if (
    (botsWeapon == "scissors" && playersWeapon == "paper") ||
    (botsWeapon == "paper" && playersWeapon == "rock") ||
    (botsWeapon == "rock" && playersWeapon == "scissors")
  ) {
    increaseBotScore();
  } else {

    increasePlayerScore();
  }
}

function increaseBotScore() {
  botScore += 1;
  document.getElementById("computerScore").innerHTML = botScore;
  displayCompleteMessage("Sorry, you're a loser");
}

function increasePlayerScore() {
  playerScore += 1;
  document.getElementById("humanScore").innerHTML = playerScore;
  displayCompleteMessage("So all we do  is win, win, no matter what");
}

function displayCompleteMessage(msg) {
  document.getElementById("status").innerHTML = msg;
}