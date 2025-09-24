//steps
//1. ID and select button
let EnterButton = document.getElementById('EnterButton');

console.log(EnterButton);

//2. Listen for when user clicks button (event click)
EnterButton.addEventListener("click", LoadMapPage);

//3. a response for when it is clicked
function LoadMapPage() {
    console.log("loadpage");
    window.location.href = "map.html";
}