let calcDisplay = document.querySelector(".calcDisplay");

// gets numbers from HTML

const nodeList= document.querySelectorAll(".numbers button");

for (let i=0; i < nodeList.length; i++) {
  nodeList[i].addEventListener("click", getNumber); 
}

function getNumber(e){
  console.trace();
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

//removes number from display

