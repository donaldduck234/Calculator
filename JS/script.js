//VARIABLES
const display = document.getElementById('display');
const ongoingCalculation = document.getElementById('ongoing-calculation');
const numbers = document.getElementsByClassName('numbers');
let equalSwitch;


//EVENT HANDLER
keyboard.addEventListener('click', (e) => {
    if (e.target.className === 'numbers') {
        display.innerHTML += e.target.innerHTML;
        ongoingCalculation.innerHTML += e.target.innerHTML;
    } else if (e.target.className === 'operators') {
        display.innerHTML = 0;
        ongoingCalculation.innerHTML += e.target.innerHTML;
        console.log(ongoingCalculation);
    } else if (e.target.className === 'helpers ac') {
        display.innerHTML = 0;
        ongoingCalculation.innerHTML = 0;
    } else if (e.target.className === 'equal') {
        display.innerHTML = eval(ongoingCalculation.innerHTML);
        ongoingCalculation.innerHTML = eval(ongoingCalculation.innerHTML);
        equalSwitch = true;
    }

    if (equalSwitch) {
        display.innerHTML = 0;
        ongoingCalculation.innerHTML = 0;
        display.innerHTML += e.target.innerHTML;
        ongoingCalculation.innerHTML += e.target.innerHTML;
    }


});
