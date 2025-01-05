function add(a, b){
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(equation) {
    let operations = "+-*/";
    let numbers = "0123456789.";
    //breaks the equation down
    //can call reduce if using mroe than one operation. for now, just 1 operation.
    let arr = equation.split("");
    let operation = arr.filter((item) => item.includes(operations));
    switch (operation[0]) { //ensures that only the first one will be used
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    }
}
let equation = "";
//make it so that once it has been clicked more than once for operation, it cannot be clicked again.
const displayedText = document.querySelector(".text");
let btns = document.querySelectorAll("button");
btns = Array.from(btns);
btns.map((btn) => {
    if (btn.textContent == "=") {
        return btn.addEventListener("click", () => {
            //operation
            //maybe add a if (equation.slice(-1) == "."...) do not work?
        });
    } else if (btn.textContent == "C") {
        return btn.addEventListener("click", () => {
            equation = "";
            displayedText.textContent = equation;
        });
    } else if (btn.textContent == "/" || btn.textContent == "*" || btn.textContent == "-" || btn.textContent == "+"){
        return btn.addEventListener("click", () => {
            if (!equation.includes("/") && !equation.includes("*") && !equation.includes("-") && !equation.includes("+") && equation.slice(-1) != ".") {
            equation = equation + btn.textContent;
            displayedText.textContent = equation;
            }
        });
    } else if (btn.textContent == ".") {
        return btn.addEventListener("click", () => {
            if (!equation.includes(".")) {
                equation = equation + btn.textContent;
                displayedText.textContent = equation;
            }
        });
    }
    else {
        return btn.addEventListener("click", () => {
            equation = equation + btn.textContent;
            displayedText.textContent = equation;
        });
    }

});
//pass an array into every function
//it talked about passing in the content of the divs as the element