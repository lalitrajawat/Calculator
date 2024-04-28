
function display(value) {
    let string = document.getElementById("res");
    while(string.value=="0"){
        string.value = "";
        break;
    }
   // let string2 = document.getElementById("screen");
    window.navigator.vibrate(500);
    string.value += value;
}

// Function to clear the screen
function clearScreen() {
    let string = document.getElementById("res");
    string.value = "0";
}

function clearScreen2() {
    let string = document.getElementById("res");
    string.value = "0";
    let string2 = document.getElementById("screen");
    string2.value = "";
}

function back(){
    let string = document.getElementById("res");
    string.value = string.value.slice(0, -1);
}


function calculate() {
    let string = document.getElementById("res");
    let string2 = document.getElementById("screen");
    string2.value = string.value;

    let result = eval(string.value);
    
    string.value = result;

}
