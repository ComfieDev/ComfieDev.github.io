/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
  
  btn.onhover = function (){
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

$(document).ready(function() {

  var quotes = [
    {
        "id": "1",
        "quote": "Normal in the Sheets, Formal in the Spreadsheets",
    },
    {
        "id": "2",
        "quote": "Normal ain't just a setting on a dryer",
    },
    {
        "id": "3",
        "quote": "Contains zero normal-mapping!",
    },
    {
        "id": "4",
        "quote": "10% off yearly gym membership! Make your ab normal. Just the one.",
    },
    {
        "id": "5",
        "quote": "Snap back to normality. (Oop, there goes insanity)",
    },
    {
        "id": "6",
        "quote": "Normal is relative (but not your uncle, you know the one...)",
    },
    {
        "id": "7",
        "quote": "Normal II : The Normaling",
    },
    {
        "id": "8",
        "quote": "Revenge of the Return of the Societal Norms",
    },
    {
        "id": "9",
        "quote": "CAUTION: this game may contain normality",
    },
    {
        "id": "10",
        "quote": "It's the normalest!",
    },
]