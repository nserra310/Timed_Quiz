var initalsInput = document.querySelector("#intials");
var submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    var user = {
    userInitals: firstNameInput.value.trim(),
    }
};

console.log(user);
