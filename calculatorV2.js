let calcDisplay = document.querySelector(".calcDisplay");

// gets number through click and console logs them

const nodeList= document.querySelectorAll(".numbers button");

for (let i=0; i < nodeList.length; i++) {
  nodeList[i].addEventListener("click", getNumber); 
}

function getNumber(e){
  console.log(e.target.textContent);
  calcDisplay.textContent += e.target.textContent;
};

// gets number through keydown and console logs them

document.addEventListener("keydown", getKeyNumber);

function getKeyNumber(e){
    const key = document.querySelector(`[data-key="${e.keyCode}"]`)
    
    if (e.keyCode == "190"){
        let num = calcDisplay.innerText
        if (num.indexOf(".") != -1) {return}
    }
    calcDisplay.innerText += key.innerText;
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
