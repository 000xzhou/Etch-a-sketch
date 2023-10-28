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
    lighten()
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

// add darken
function darken() {
    let dark = 1
    document.body.addEventListener('mouseover', e => {
        let divColor = e.target.closest('div');
        if (!divColor) { return; }
            divColor.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()}, ${dark})`
            if(dark >= 0) {
                dark -= 0.1
            }
        });
        
        document.body.addEventListener('mouseout', e => {
        let divColor = e.target.closest('div');
        if (!divColor) { return; }
            divColor.style.backgroundColor = '';
        });
}
// add lighten
function lighten() {
    let light = 0
    document.body.addEventListener('mouseover', e => {
        let divColor = e.target.closest('div');
        if (!divColor) { return; }
            divColor.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()}, ${light})`
            if(light <= 1) {
                light += 0.1
            }
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
    const h1 = document.createElement("h1")
    main.appendChild(h1)

// get user input
function getUserNum() {
    btn.addEventListener("click", ()=> {
        //get user num
        let width = parseInt(input_one.value)
        let height = parseInt(input_two.value)
        // error checking
        if(Number.isFinite(width) || Number.isFinite(height)) {
            if(width > 0 && width <= 100 && height > 0 && height <= 100) {
                //delete grid
                squareTiles.innerHTML=""
                h1.innerText = ""
                //create grid
                sketch(width, height)
            } else {
                h1.innerText = "Number is invalid"
            }
        }
    })
}


// default grid
sketch(10,10)
// user grid
getUserNum()