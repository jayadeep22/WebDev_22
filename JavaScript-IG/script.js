// 1. type number in textbox

function typeNumber(ctrl) {
    let textbox = document.getElementById("textbox");
    let value = textbox.value;
    if (ctrl.innerText == ".") {
        // alert("dot");

        if (value.indexOf(".") != -1) {
            return;
        }
    }
    let number = value + ctrl.innerText;
    textbox.value = number;
}

// function typeNumber8(){
//     let textbox = document.getElementById("textbox");
//     let value = 
//     textbox.value += "8"; 
// }

// 2. CE button to clear all textbox

function clearAll() {
    let textbox = document.getElementById("textbox");
    let textboxhistory = document.getElementById("textboxhistory");
    textbox.value = "";
    textboxhistory.value = "";
}

// 3. Back button to clear one textbox input

function clearOne() {
    let textbox = document.getElementById("textbox");
    let text = textbox.value;
    // alert(text)
    let length = text.length;
    // alert(length)
    if (length > 0) {
        newText = text.slice(0, (length - 1));
        textbox.value = newText;
    }
}

// 4. . operation

let operator = "";
function operation(ctrl) {
    let textbox = document.getElementById("textbox");
    let textboxhistory = document.getElementById("textboxhistory");
    textboxhistory.value = textbox.value;
    textbox.value = " ";

    operator = ctrl.innerText;
}

// 5. calculate 
function calculate() {
    let textbox = document.getElementById("textbox");
    let textboxhistory = document.getElementById("textboxhistory");

    let no1 = Number(textboxhistory.value);
    let no2 = Number(textbox.value);

    let answer = 0;
    if (operator == "+") {
        answer = no1 + no2;
    }
    else if (operator == "-") {
        answer = no1 - no2;
    }
    else if (operator == "x") {
        answer = no1 * no2;
    }
    else if (operator == "/") {
        answer = no1 / no2;
    }
    
    textbox.value = answer;
}



