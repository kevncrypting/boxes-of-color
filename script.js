console.log(`linked up!`); // checks to make sure javascript file is properly linked to html page

let boxes = document.querySelectorAll(".box"); // creates a variable called boxes that contains all elements on the html page with a class of box

// creates a reference to each button on the HTML page
let redButton = document.getElementById('redButton');
let yellowButton = document.getElementById('yellowButton');
let greenButton = document.getElementById('greenButton');
let blueButton = document.getElementById('blueButton');

// defines a global variable called colorTransition that controls what color the boxes will switch to when clicked
let colorTransition = 'red'; 


// creates 4 functions to change the global variable colorTransition to a different color
function setColorRed() {
    colorTransition = 'red';
}

function setColorYellow() {
    colorTransition = 'yellow';
}

function setColorGreen() {
    colorTransition = 'green';
}

function setColorBlue() {
    colorTransition = 'blue';
}

// adds an event listener to each button that calls a function whose purpose is to change the global variable to the named color
redButton.addEventListener('click', setColorRed)
yellowButton.addEventListener('click', setColorYellow)
greenButton.addEventListener('click', setColorGreen)
blueButton.addEventListener('click', setColorBlue)

// iterates over the boxes and adds an event listener to each box that uses a ternary operator to change the background color to the currently set colorTransition color, otherwise change to blackg
boxes.forEach(box => {
    box.addEventListener('click', () => box.style.backgroundColor = box.style.backgroundColor === colorTransition ? 'black' : colorTransition)
})
