console.log("hello");

//steps
//1. ID and select button
let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');

console.log(yesButton);
console.log(noButton);

//2. Listen for when user clicks button (event click)
yesButton.addEventListener("click", LoadCongratsPage);
noButton.addEventListener("click", showTryAgainPopup);

//3. a response for when it is clicked "so if yes - go to page that says congrat you are a citizen" if "no a pop up that says are you sure maybe try again?"

function LoadCongratsPage() {
    console.log("loadpage");
    window.location.href = "congrats.html";
}

function showTryAgainPopup() {
    console.log("show popup");
    alert("Are you sure? That seems to be the wrong answer. Maybe try again?");
}