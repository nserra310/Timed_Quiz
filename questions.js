var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
  }, 1000);
}
setTime();

var alertsBtn = document.querySelector('.alerts')
var stringsBtn = document.querySelector('.strings')
var booleansBtn = document.querySelector('.booleans')
var numbersBtn = document.querySelector('.numbers')


alertsBtn.addEventListener('click', function() {
  alert("Correct!");
  count++;
})
stringsBtn.addEventListener('click', function() {
  alert("Wrong!");
  count--;
})
booleansBtn.addEventListener('click', function() {
  alert("Wrong!");
  count--;
})
numbersBtn.addEventListener('click', function() {
  alert("Wrong!");
  count--;
})











  
