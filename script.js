console.log(`linked up!`); // checks to make sure the javascript file is properly linked to html page, should display at top of console if linked

// creates variables that will be used later
let boxes = document.querySelectorAll(".box"); // contains all elements on the html page with a class of box, stored in a variable called boxes
let color = 'red'; // contains a default color value of red stored as a string, stored in a variable called color
let colorButtons = document.querySelectorAll('section.colorButtons > button'); // contains all buttons that are children/DIRECT DESCENDANTS of the section element with a class called colorButtons, stored in a variable called colorButtons
let colorShow = document.querySelector('span'); // points to the span element, stored in a variable called colorShow
let randomColorButton = document.getElementById('randomColor'); // points to the button with the ID randomColor, stored in a variable called randomColorButton
let rgbValueArray = [0, 0, 0]; // contains a default array of 3 numbers to be used for random RGB value, stored in a variable called rgbValueArray

colorButtons.forEach(button => { // iterates over each button in the colorButtons "array" - this is in quotes because colorButtons is actually of type "NodeList", but acts similarly to an array in that it has some overlapping methods, no need for us to convert to an Array here
    button.addEventListener('click', function() { // adds an event listener to each button that executes the following function body on click event
        color = button.innerText; // sets color variable to inner text of button
        colorShow.innerHTML = `Current Color Selected: ${color}`; // displays the current color
        button.style.backgroundColor = color; // changes the button's background color to current color
        console.log(color); // prints current color to console
    })
})

boxes.forEach(box => { // iterates over each box in the boxes "array" - this is in quotes because colorButtons is actually of type "NodeList", but acts similarly to an array in that it has some overlapping methods, no need for us to convert to an Array here
    // adds an event listener to each box - on click event, assigns the current selected color to the box's background, and if the background is a color other than black, resets background color back to black using a ternary operator
    box.addEventListener('click', () => box.style.backgroundColor = box.style.backgroundColor === color ? 'black' : color)
})

function randomRgbValue() { // creates a function called randomRgbValue that assigns each value in the rgbValueArray to a random number between 0 - 255
    rgbValueArray[0] = Math.floor(Math.random() * 255) // first number
    rgbValueArray[1] = Math.floor(Math.random() * 255) // second number
    rgbValueArray[2] = Math.floor(Math.random() * 255) // third number
}

randomColorButton.addEventListener('click', function() { // adds an event listener to the randomColorButton that on click, executes the following code: 
    randomRgbValue(); // runs the randomRgbValue function defined above
    color = `rgb(${rgbValueArray[0]}, ${rgbValueArray[1]}, ${rgbValueArray[2]})` // sets the current color based on the three numbers in the rgbValueArray
    colorShow.innerHTML = `Current Color Selected: ${color}`; // displays current color on page
    console.log(`The RGB value of the color you generated is ${color}`); // displays current color to console
    randomColorButton.style.backgroundColor = `${color}` // changes background of randomColorButton to the currently selected color
})

/* Example of event bubbling

let section = document.querySelector('section');

section.addEventListener('click', function(event) {
    let childElements = Array.from(event.currentTarget.children);
    console.log(childElements.indexOf(event.target));
    event.target.addEventListener('mouseover', function() {
        event.target.innerText = 'Registered a click from the parent';
    };
});

Events propogate up from the child elements to the top of the document

*/