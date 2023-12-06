function buttonPress(){
    window.location.href = "wip.html";
}

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
