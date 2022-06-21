let calcDisplay = document.querySelector(".calcDisplay");

// gets numbers from HTML

const nodeList= document.querySelectorAll(".numbers button");

for (let i=0; i < nodeList.length; i++) {
  nodeList[i].addEventListener("click", getClickNumber); 
}

function getClickNumber(e){
  console.log(e.target.textContent);
  calcDisplay.textContent += e.target.textContent;
};

// gets number through keydown 

document.addEventListener("keydown", getKeyNumber);

function getKeyNumber(e){
    const key = document.querySelector(`[data-key="${e.keyCode}"]`)
    if (!key){return}; //if keydown do nothing
    calcDisplay.innerText += key.innerText;
}

/* 
puts decimal point into screen 
Via:
    Button Click
    Keypress 
*/
document.addEventListener("keydown", getKeyDecimal);
function getKeyDecimal (e){
  if (e.keyCode == "190" || 
      e.keyCode == "110"){

    //if the display has a . do not add another .
      let num = calcDisplay.innerText
      if (num.indexOf(".") != -1) {return}

      const key = document.querySelector("#decimal")
      calcDisplay.innerText += key.innerText;
  }
}

const buttonDecimal = document.getElementById("decimal")
buttonDecimal.addEventListener("click", getClickDecimal);
function getClickDecimal(){
  console.log("click decimal")
  //if the display has a . do not add another .
  let num = calcDisplay.innerText
  if (num.indexOf(".") != -1) {return}
  
  calcDisplay.innerText += ".";
}




function add(num1, num2){
  return num1 + num2;
}

const buttonClear = document.querySelector(".clear");
window.addEventListener("keydown", keyClear);
buttonClear.addEventListener("click", clickClear)

function keyClear(e){
  if (e.keyCode == "27"){
    calcDisplay.innerText ="";
  }
}

function clickClear(){
    calcDisplay.innerText ="";
}

// backspace last character from display
window.addEventListener("keydown", deleteDisplayChar);
function deleteDisplayChar(e) {
    if (calcDisplay.innerText =="") {return}
    if (e.keyCode == 8) {
      console.log("remove one char")
      let myString = calcDisplay.innerText;
      let myPart = myString.slice(0, (myString.length-1));
      calcDisplay.innerText = myPart;
    }
  }

document.addEventListener("keydown", getMultOperator)

function getMultOperator(e) {
if (e.shiftKey)
    {
    console.log("pressed shift")
    if (e.keyCode == "56"){
        console.log("pressed mult")
    }
    }
    else {return}
}

function stopNumberEntry() {
    document.removeEventListener("keydown", getKeyNumber);
  
    for (let i=0; i < nodeList.length; i++) {
      nodeList[i].removeEventListener("click", getClickNumber); 
    }
}


// operators
for (let i=0; i < operatorsList.length; i++) {
    operatorsList[i].addEventListener("click", storeOperand); 
  }
  
// function storeOperand (){
// console.log("the operand was: " + operand1)
// if (!operand1){
//     console.log("store operand1")    
//     operand1 = calcDisplay.innerText;
// }
// console.log("the operand is now: " + operand1)
// }

const operator1 = document.querySelector(".operator1");

const operand1 = document.querySelector(".operand1");
const operatorsList= document.querySelectorAll(".operators button");


