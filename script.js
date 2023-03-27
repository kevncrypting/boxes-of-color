console.log(`linked up!`); // checks to make sure the javascript file is properly linked to html page, should display at top of console if linked

// creates variables that will be used later
let boxes = document.querySelectorAll(".box"); // contains all elements on the html page with a class of box 
let color = 'red'; // contains a default color value of red stored as a string
let colorButtons = document.querySelectorAll('section.colorButtons > button'); // contains all buttons that are children of the section element with a class called colorButtons
let colorShow = document.querySelector('span'); // points to the span element
let randomColorButton = document.getElementById('randomColor'); // points to the button with the ID randomColor
let rgbValueArray = [0, 0, 0]; // contains a default array of 3 numbers to be used for random RGB value

colorButtons.forEach(button => { // iterates over each button in the colorButtons "array"
    button.addEventListener('click', function() { // adds an event listener to each button that executes the following function body on click event
        color = button.innerText; // sets color variable to inner text of button
        colorShow.innerHTML = `Current Color Selected: ${color}`; // displays the current color
        button.style.backgroundColor = color; // changes the button's background color to current color
        console.log(color); // prints current color to console
    })
})

boxes.forEach(box => { // iterates over each box in the boxes "array"
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
