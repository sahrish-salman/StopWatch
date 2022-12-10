var min = 0;
var sec = 0;
var milliSec = 0;
var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMilliSec = document.getElementById("displayMilliSec");

var interval;

function timer() {
    milliSec++
    if (milliSec ==10) {
        milliSec = 0;
        sec++;
        if(sec == 60) {
            sec= 0;
            min++;
        }
    }
    displayMilliSec.innerHTML = milliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}

function startTimer() {
  interval = setInterval
  (function () {
    timer();
  }, 100);
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    pauseTimer();
    min = 0;
    sec = 0;
    milliSec = 0;
    displayMilliSec.innerHTML = milliSec;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}