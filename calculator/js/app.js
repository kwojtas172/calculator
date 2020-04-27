const numericButtons = document.querySelectorAll(".numeric");
const operatorButtons = document.querySelectorAll(".operator");
const inner = document.querySelector(".inner");
const result = document.querySelector(".result");
const coma = document.querySelector("#coma");
const operationResult = document.querySelector("#operationResult");
const delAll = document.querySelector("#delAll");
const delLast = document.querySelector("#delLast");

class Calculator {

    inner() {
        numericButtons.forEach(num => { //for numeric keys
            num.addEventListener("click", e => {
                e.preventDefault();
                if(result.innerText.length > 0) {
                    inner.innerText = "";
                    result.innerText = "";
                }
                if(inner.innerText.length < 16) {
                inner.innerText += num.innerText;
                } else if(inner.innerText[0] == 0 && inner.innerText.length === 1 ) {
                    inner.innerText += coma.innerText;
                    console.log("działa")
                } else if(inner.innerText[inner.innerText.length-1] == 0 && !parseInt(inner.innerText[inner.innerText.length-2]) && inner.innerText[inner.innerText.length-2] !== coma.innerText) {
                    inner.innerText += coma.innerText;
                }
                if(inner.innerText[0] == 0 && inner.innerText.length === 1) {
                    inner.innerText += coma.innerText;
                }
            })
        })
        coma.addEventListener("click", e => { //for "coma" key
            e.preventDefault();
            if(inner.innerText.indexOf(coma.innerText) === -1) {
                inner.innerText += coma.innerText;
                if(inner.innerText.length < 2) {
                    inner.innerText = 0 + coma.innerText;
                }
            } else if(inner.innerText[inner.innerText.length-1] == 0 && !parseInt(inner.innerText[inner.innerText.length-2]) && inner.innerText[inner.innerText.length-2] !== coma.innerText && inner.innerText[0] != 0 && (inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("*") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("/") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("+") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("-")) || !parseInt(inner.innerText[inner.innerText.length-1]) && parseInt(inner.innerText[inner.innerText.length-1]) !== coma.innerText && (inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("*") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("/") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("+") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("-"))) {
                inner.innerText += "0" + coma.innerText;
            } else if(parseInt(inner.innerText[inner.innerText.length-1]) && (inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("*") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("/") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("+") || inner.innerText.lastIndexOf(coma.innerText) < inner.innerText.lastIndexOf("-")) ) {
                inner.innerText += coma.innerText;
            }
        })
        operatorButtons.forEach(sign => { //for operator keys
            sign.addEventListener("click", e => {
                e.preventDefault();
                if(inner.innerText.length > 0 && parseInt(inner.innerText[inner.innerText.length - 1]) >= 0) {
                    inner.innerText += sign.innerText;
                }
            })
        })
        delLast.addEventListener("click", e => {
            e.preventDefault();
            inner.innerText = inner.innerText.slice(0, inner.innerText.length-1)
        })
        delAll.addEventListener("click", e => {
            e.preventDefault();
            inner.innerText = "";
        })

    }

    toCalulate() {
        operationResult.addEventListener("click", e => {
            e.preventDefault();
            if(inner.innerText[inner.innerText.length-1] == "/" || inner.innerText[inner.innerText.length-1] == "*" || inner.innerText[inner.innerText.length-1] == "+" || inner.innerText[inner.innerText.length-1] == "-") {
                alert("Nie dopisałeś liczby!");
                result.innerText = "";
            } else {
                if(eval(inner.innerText) == Infinity) {
                    alert("Nie dzielimy przez 0!");
                    result.innerText = "";
                    inner.innerText = "";
                } else {
                    result.innerText = Math.round(parseFloat(eval(inner.innerText))*100000000)/100000000;
                }
            }
        })
    }
}

const calculator = new Calculator;

calculator.inner();
calculator.toCalulate();