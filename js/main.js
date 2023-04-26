function creaSquare(number) {
    let square;
    for (let i = 1; i <= number; i++) {
        square = `<div class="square">${i}</div>`;
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
})

let square = document.getElementsByClassName("square");

