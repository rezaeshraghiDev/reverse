const $ = document;
const inputElem = $.getElementById("input");
const outputElem = $.getElementById("output");

let reverseText = ()=> {
    let userInput = input.value;
    let reversed = userInput.split("").reverse().join("");
    outputElem.innerText = reversed;
    outputElem.innerText === "" ? outputElem.innerText = "رشته مورد نظر را در ورودی قرار دهید." : "";
}

inputElem.addEventListener("keyup", reverseText);