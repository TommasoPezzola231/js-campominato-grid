function creaSquare(number) {
    for (let i = 1; i <= number; i++) {
        let square = `<div class="square">${i}</div>`;
        
        box.innerHTML += square
        console.log("Box creato!");
        
    }
    
}

const box = document.getElementById("box");
const play = document.getElementById("start");
let mode = document.getElementById("values");


play.addEventListener("click", function () {
    console.log("Play!");
    creaSquare(mode.value)
    let square = document.getElementsByClassName("square");
    
    
    for (let c = 0; c < mode.value; c++) {
        
        if (mode.value == 49) {
            square[c].classList.add(`easy`)
        }
        
        if (mode.value == 81) {
            square[c].classList.add("medium")
        }
        
        square[c].addEventListener("click", function () {
            this.classList.toggle("clicked")
            console.log(`Hai selezionato il quadrato numero: ${square[c].innerHTML}`)
        })
        
    }
})

