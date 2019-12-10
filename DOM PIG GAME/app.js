var scores, roundscore, activeplayer, gameplaying;

init();

document.querySelector(".button-roll").addEventListener("click", function() {
  //1.Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //Display the result

  var dicedom = document.querySelector(".dice");
  dicedom.style.display = "block";
  dicedom.src = "dice" + dice + ".png";

  //update the round score if the rolled nmbr was not 1//
  if (dice !== 1) {
    roundscore += dice;
    document.querySelector("#Current-" + activeplayer).textContent = roundscore;
  } else {
    nextplayer();
  }
});
document.querySelector(".button-hold").addEventListener("click", function() {
  scores[activeplayer] += roundscore;

  document.querySelector("#score-" + activeplayer).textContent =
    scores[activeplayer];
   //input final score///
  var input = document.querySelector(".final-score").value;
  var winningscore;
  if (input) {
    winningscore = input;
  } else {
    winningscore = 100;
  }

  if (scores[activeplayer] >= winningscore) {
    document.querySelector("#name-" + activeplayer).textContent = "WINNER!";
    document.querySelector(".dice").style.display = "none";
    document.querySelector("#name-" + activeplayer).classList.add("winner");
    document
      .querySelector(".player-" + activeplayer + "-panel")
      .classList.remove("active");
  } else {
    nextplayer();
  }
});

document.querySelector(".button-new").addEventListener("click", function() {
  init();
});

function nextplayer() {
  activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);
  roundscore = 0;
  document.getElementById("Current-0").textContent = "0";
  document.getElementById("Current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //document.querySelector(".dice").style.display = "none";
}

function init() {
  scores = [0, 0];
  roundscore = 0;
  activeplayer = 0;

  //dice = Math.floor(Math.random() * 6) + 1;
  //document.querySelector("#Current-" + activeplayer).textContent = dice;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("Current-0").textContent = "0";
  document.getElementById("Current-1").textContent = "0";
  document.querySelector("#name-0").textContent = "Player1";
  document.querySelector("#name-1").textContent = "Player2";
  document.querySelector("#name-0").classList.remove("winner");
  document.querySelector("#name-1").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}
