function creaSquare(number) {
    for (let i = 1; i <= number; i++) {
        let square = `<div class="square">${i}</div>`;
        box.innerHTML += square
        console.log("Box creato!")
    }
    
}

const box = document.getElementById("box");
const play = document.getElementById("start");
let value = 100;


play.addEventListener("click", function () {
    console.log("Play!");
    creaSquare(value)
    let square = document.getElementsByClassName("square");
    
    for (let c = 0; c < value; c++) {
        
        square[c].addEventListener("click", function () {
            this.classList.toggle("clicked")
            console.log(`Hai selezionato il quadrato numero: ${square[c].innerHTML}`)
        })
        
    }
})

