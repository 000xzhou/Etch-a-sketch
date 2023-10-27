const main = document.getElementById("main")

//create input
const input_label_one = document.createElement("label")
input_label_one.innerText = "Width:"
const input_one = document.createElement("input")
main.appendChild(input_label_one)
main.appendChild(input_one)
const input_label_two = document.createElement("label")
input_label_two.innerText = "Height:"
const input_two = document.createElement("input")
main.appendChild(input_label_two)
main.appendChild(input_two)

//create button
const btn = document.createElement("button")
btn.innerText = "update grid"
main.appendChild(btn)

const squareTiles = document.createElement("section")
main.appendChild(squareTiles)

// create grid
function sketch(width, height) {    
    let totalSquare = width * height
    for(let i=0; i<totalSquare; i++) {
        const div = document.createElement("div")
        squareTiles.appendChild(div)
    }
    hover()
    gridStyle(width, height)
}

// styling the div into grid
function gridStyle(width, height) {
    const bodyStyles= window.getComputedStyle(document.body)
    // const widthCSS = bodyStyles.getPropertyValue("--width")
    const heightCSS = bodyStyles.getPropertyValue("--height")

    document.body.style.setProperty("--width", width)
    document.body.style.setProperty("--height", height)
}

//hover effects
function hover() {
    document.body.addEventListener('mouseover', e => {
    let divColor = e.target.closest('div');
    if (!divColor) { return; }
        divColor.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        
    });
    
    document.body.addEventListener('mouseout', e => {
    let divColor = e.target.closest('div');
    if (!divColor) { return; }
        divColor.style.backgroundColor = '';
    });

}

// get rbg num
function random() {
    return Math.floor(Math.random()* 256)
}

// get user input
function getUserNum() {
    // TODO: add error checking. aka if it's not a num or neg num. can be in a different function
    btn.addEventListener("click", ()=> {
        //get user num
        let width = input_one.value
        let height = input_two.value
        //delete grid
        squareTiles.innerHTML=""
        //create grid
        sketch(width, height)
    })
}

// default grid
sketch(10,10)
// user grid
getUserNum()