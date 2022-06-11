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
    console.log(e.keyCode);
    const key = document.querySelector(`[data-key="${e.keyCode}"]`)
    console.log(key.innerText);
    calcDisplay.innerText += key.innerText;
  }

function add(num1, num2){
  return num1 + num2;
}