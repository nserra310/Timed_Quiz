var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 35;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
  }, 1000);
}
setTime();

var numbersBtn = document.querySelector('.numbers')
var otherBtn = document.querySelector('.other')
var booleansBtn = document.querySelector('.booleans')
var allAboveBtn = document.querySelector('.allAbove')

numbersBtn.addEventListener('click', function() {
  alert("Wrong!");
  count--;
})
otherBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
  })
booleansBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
  })
allAboveBtn.addEventListener('click', function () {
    alert("Correct!");
    count++;
})

