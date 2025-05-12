console.log("Script.js initializing")

// Select all child elements of the container
let boxes = document.querySelector(".container").children 

// Function to generate a random RGB color
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255); // Random value for Red
    let val2 = Math.ceil(0 + Math.random()* 255); // Random value for Green
    let val3 = Math.ceil(0 + Math.random()* 255); // Random value for Blue
    return `rgb(${val1}, ${val2}, ${val3})` // Return the RGB color string
}

// Apply random background and text colors to each box
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor() // Set random background color
    e.style.color = getRandomColor() // Set random text color
})