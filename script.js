let displayBox = document.querySelector(".display");

function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0){
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
}

function calculate(){
    let result = displayBox.innerText;
    displayBox.innerText = eval(result);
}
function allclear(){
    displayBox.innerText = 0;
}

function clearlast(){
    let last = displayBox.innerText;
    if (last.length === 1){
        displayBox.innerText = 0;
    }else{
        displayBox.innerText = last.substring (0 , last.length -1)
    }
}

document.querySelector(".calculate").addEventListener("click" , calculate)
document.querySelector(".all-clear").addEventListener("click" , allclear)
document.querySelector(".clear-last").addEventListener("click" , clearlast)
let list = document.querySelectorAll(".show-display");
list.forEach(item =>{
    item.addEventListener("click" , showDisplay)
})