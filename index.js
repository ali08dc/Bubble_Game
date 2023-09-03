var timer = 60;
var score = 0;
var Target = 0;

function makeBubble() {
  var str = "";

  for (var i = 1; i <= 112; i++) {
    var rndm = Math.floor(Math.random() * 10);

    str += `<div id="bubble">${rndm}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = str;
}

function runTimer() {
  var timeInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timeInt);
      var audio = new Audio("src/Funny Sound.mp3");
      audio.play();
      document.querySelector("#pbtm").innerHTML = `<div style="color:#435334;">
            <h1>Game Over</h1>
            <br/>
            <h2>Score: ${score}</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>REFRESH page to RESTART the game</p>
            </div>`;
    }
  }, 1000);
}

function Hitrandom() {
  Target = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").innerHTML = Target;
}

function scoreValue() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function wrongAnswer() {
  var audio = new Audio("src/wronganswer.mp3");
  audio.play();
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  
  if (clickedNum === Target) {
    scoreValue();
    makeBubble();
    Hitrandom();
  } else {
    wrongAnswer();
    // makeBubble();
    // Hitrandom();
  }
});

Hitrandom();
runTimer();
makeBubble();
