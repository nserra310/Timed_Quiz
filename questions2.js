var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 50;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
  }, 1000);
}
setTime();

var quotesBtn = document.querySelector('.quotes')
var curlyBtn = document.querySelector('.curly')
var parenthesesBtn = document.querySelector('.parentheses')
var squareBtn = document.querySelector('.square')


quotesBtn.addEventListener('click', function() {
  alert("Wrong!");
  count--;
})
curlyBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
  })
parenthesesBtn.addEventListener('click', function() {
    alert("Correct!");
    count++;
  })
  squareBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
  })