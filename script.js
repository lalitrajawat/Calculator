
function display(value) {
    let string = document.getElementById("res");
    while(string.value=="0"){
        string.value = "";
        break;
    }
   // let string2 = document.getElementById("screen");
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
const button = document.getElementById('vibrate-button');

button.addEventListener('click', () => {
  // Check if the Vibration API is supported
  if ('vibrate' in navigator) {
    // Vibrate for 200 milliseconds
    navigator.vibrate(200);
  } else {
    console.log('Vibration API is not supported');
  }
});
