const circle_green = document.querySelector('#circle_green');
const circle_yellow = document.querySelector('#circle_yellow');
const circle_red = document.querySelector('#circle_red');
const trafficLight = document.querySelectorAll('.trafficLight');

function makeBlack(color1,color2) {
    color1.style.background = ('black');
    color2.style.background = ('black');
}

function REL (makeColor) {
    trafficLight.forEach(function(elem){
        elem.removeEventListener ('click', makeColor)
    });
}

function AEL (makeColor) {
    trafficLight.forEach(function(elem){
        elem.addEventListener('click', makeColor)
    });
}

function makeGreen() {
    makeBlack(circle_red,circle_yellow);
    circle_green.style.background = ('green');
    REL(makeGreen);
    AEL(makeYellow);
}

function makeYellow() {
    makeBlack(circle_red,circle_green);
    circle_yellow.style.background = ('yellow');
    REL(makeYellow);
    AEL(makeRed);
}

function makeRed() {
    makeBlack(circle_green,circle_yellow);
    circle_red.style.background = ('red');
    REL(makeRed);
    AEL(makeGreen);
}

AEL(makeGreen);