var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 20;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
  }, 1000);
}
setTime();

var commasBtn = document.querySelector('.commas')
var curlyBtn = document.querySelector('.curly')
var quotesBtn = document.querySelector('.quotes')
var parenthesesBtn = document.querySelector('.parentheses')

commasBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
})
curlyBtn.addEventListener('click', function() {
    alert("Correct!");
    count++;
})
quotesBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
})
parenthesesBtn.addEventListener('click', function() {
    alert("Wrong!");
    count--;
})
