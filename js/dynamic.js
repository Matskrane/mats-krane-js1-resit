const inputNumber = document.querySelector("input");
const displayNumbers = document.querySelector(".dynamic-divs");

inputNumber.oninput = function () {
    console.log(event.target.value)

    const inputValue = this.value;

    for (let i = 1; i <= inputValue; i++) {
        displayNumbers.innerHTML += `<div>number:${i}</div>`;
    }
}

function clearNumbers(){
    document.querySelector(".dynamic-divs").innerHTML = "";
}