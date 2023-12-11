

var circText = "<p>Circles are fundamental geometric shapes defined by all points lying at an equal distance from a common center. In mathematics, circles play a crucial role, often represented by a single parameter—the radius. They exhibit symmetry and simplicity, making them essential in various mathewmatical disciplines such as geometry, trigonometry, and calculus.</p>";
var squareText = "<p>Squares are vital in math for simplicity and area calculations. In architecture, they offer stability and aesthetic appeal. They feature prominently in puzzles, digital imaging, computer science, and physics, showcasing their versatility and importance across various fields.</p>";
//button js
function buttonPress(){
    window.location.href = "wip.html";
}
//slider js
var Rslider = document.getElementById('redSlider');
var Gslider = document.getElementById('greenSlider');
var Bslider = document.getElementById('blueSlider');
var colorBox = document.getElementById('colorBox');
var rv = document.getElementById('rv');
var gv = document.getElementById('gv');
var bv = document.getElementById('bv');

function boxColorChanger(){
    var Rvalue = Rslider.value;
    var Gvalue = Gslider.value;
    var Bvalue = Bslider.value;

    colorBox.style.backgroundColor = `rgb(${Rvalue}, ${Gvalue}, ${Bvalue})`;
    rv.textContent = Rvalue;
    gv.textContent = Gvalue;
    bv.textContent = Bvalue;
}

Rslider.addEventListener('input', boxColorChanger);
Gslider.addEventListener('input', boxColorChanger);
Bslider.addEventListener('input', boxColorChanger);


//circle js


var modCirc = document.getElementById("circle");
function modCircClick() {
    modCirc.classList.toggle("circClicked");
    if(modCirc.classList.contains("circClicked")){
        modCirc.innerHTML = "";
        setTimeout(() => {modCirc.innerHTML = circText}, 300);
    }
    else {
        modCirc.innerHTML = "<p>Circles!</p>";
    }
}


//Square js


var modSquare = document.getElementById("square");
function modSquareClick(){
    modSquare.classList.toggle("squareClicked");
    if(modSquare.classList.contains("squareClicked")){
        modSquare.innerHTML = "";
        setTimeout(() => {modSquare.innerHTML = squareText}, 300);
    }
    else {
        modSquare.innerHTML= "<p>Squares!</p>";
    }
}
//end of js