//VARIABLES
const display = document.getElementById('display');
const numbers = document.getElementsByClassName('numbers');
const keyboard = document.getElementById('keyboard');
let ongoingCalculation = document.getElementById('ongoing-calculation');
//BOOLEAN VALUES
let oper = false;
let num = false;
let equal;
let point = false;
let ac;

//EVENT HANDLER
keyboard.addEventListener('click', (e) => {
    //            NUMBERS
    if (e.target.className == 'numbers') {
        if (display.innerHTML === 0) {
            display.innerHTML = e.target.innerHTML;
            ongoingCalculation.innerHTML = e.target.innerHTML;
            oper = false;
            num = true;
        } else if (display.innerHTML !== 0) {
            if (e.target.className == 'numbers') {
                display.innerHTML += e.target.innerHTML;
                ongoingCalculation.innerHTML += e.target.innerHTML;
            }
            oper = false;
            num = true;
        }

        //POINT
        //            if (!point) {
        //                if (e.target.className == 'point') {
        //                    display.innerHTML += e.target.innerHTML;
        //                    oper = false;
        //                    num = true;
        //                    point = true;
        //                    display.innerHTML = '0.';
        //                    point = true;
        //                } else if (point) {
        //                    if (e.target.className == 'point') {
        //                        display.innerHTML += '';
        //                    }
        //                }

        //OPERATORS
        if (e.target.className == 'operators') {
            if (oper === false) {
                display.innerHTML += e.target.innerHTML;
                ongoingCalculation.innerHTML += e.target.innerHTML;
                oper = true;
                num = false;
            } else if (oper) {
                display.innerHTML += '';
                oper = true;
                num = false;
            }
        }
        //HELPERS
        if (e.target.className == 'helpers ac') {
            display.innerHTML = 0;
        }
        if (!num) {
            if (e.target.className == 'numbers zero') {
                display.innerHTML += '';
            }
        }
        //RESULT
        if (e.target.className == 'equal') {
            display.innerHTML = eval(display.innerHTML);
            ongoingCalculation.innerHTML += eval(display.innerHTML);
        }
    }
});
