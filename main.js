const elResult = document.getElementById("result");
const btnEls = document.querySelectorAll("button");

let expression="";
let result=0;
let number=0;
let lastOperator=0;

elResult.textContent = expression;

for(let i=0; i<btnEls.length; i++) {
    btnEls[i].addEventListener("click",  (e) => {
        hadleClick(e);
    });
}

function hadleClick(btn) {
    // console.log();
    const text = btn.target.innerText;
    switch(text) {
        case "0":expression += "0";
                number = number * 10 + 0;
                break;
        case "1":expression += "1";
                number = number * 10 + 1;
                break;
        case "2":expression += "2";
                number = number * 10 + 2;
                break;
        case "3":expression += "3";
                number = number * 10 + 3;
                break;
        case "4":expression += "4";
                number = number * 10 + 4;
                break;
        case "5":expression += "5";
                number = number * 10 + 5;
                break;    
        case "6":expression += "6";
                number = number * 10 + 6;
                break;
        case "7":expression += "7";
                number = number * 10 + 7;
                break;
        case "8":expression += "8";
                number = number * 10 + 8;
                break;
        case "9":expression += "9";
                number = number * 10 + 9;
                break;
        case "+":calculate();
                expression = result;
                expression += "+";
                lastOperator=1;
                break;
        case "-":
                calculate();
                expression = result;
                expression += "-";
                lastOperator=2;
                break;
        case "*":
                calculate();
                expression = result;
                expression += "*";
                lastOperator=3;
                break;
        case "/":
                calculate();
                expression = result;
                expression += "/";
                lastOperator=4;
                break;
        case "=":
                calculate();
                expression = result;
                break;
        case "C":expression = "";
                number = 0;
                result = 0;
                break;
        case "UNDO":
                    const lastChar = expression[expression.length-1];
                    if(number === 0 && result !== 0 && lastChar !== "+" && lastChar!="-" && lastChar!="*" && lastChar!="/" ) {
                        number = result;
                        result = 0;
                        expression = number + "";
                    }
                    if(expression.length > 0){
                        if(lastChar !== "+" && lastChar!="-" && lastChar!="*" && lastChar!="/" ) {
                                const rem = number%10;
                                number -= rem;
                                number /= 10;
                        }
                        const size = expression.length;
                        expression = expression.substring(0, size-1);
                    }
                    console.log(number, expression);
                    break;
    }
    updateDisplay();
}
    
    
function updateDisplay()
{
    elResult.textContent=expression;
}

function calculate() {
    if(result === 0) {
        result = number;
    }
    else if(lastOperator === 1 && number !==0){
        result += number;
    }
    else if(lastOperator === 2 && number !==0){
        result -= number;
    }
    else if(lastOperator === 3 && number !==0){
        result *= number;
    }
    else if(lastOperator === 4 && number !==0){
        result /= number;
    }
    const decPart = result - Math.floor(result);
    if(decPart!==0)
        result = parseFloat(result.toFixed(5));

    number = 0;
}
