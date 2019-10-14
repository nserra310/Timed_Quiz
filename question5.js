var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
  }, 1000);
}
setTime();

var javaBtn = document.querySelector('.java')
var terminalBtn = document.querySelector('.terminal')
var forloopBtn = document.querySelector('.forloop')
var consoleBtn = document.querySelector('.console')

javaBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
})
terminalBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
})
forloopBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
})
consoleBtn.addEventListener('click', function() {
    alert("Correct!");
    count++;
})