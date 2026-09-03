// Find the button and message
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Run this code when the button is clicked
button.addEventListener("click", function() {
    message.textContent = "You clicked the button!";
});
