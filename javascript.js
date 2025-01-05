function add(a, b){
    return Number(a) + Number(b);
}
function subtract(a, b) {
    return Number(a) - Number(b);
}
function multiply(a, b){
    return Number(a) * Number(b);
}
function divide(a, b) {
    if (b != 0) {
        return Number(a) / Number(b);
    }
    else {
        return "Bro what are you doing stop dividing by 0";
    }
}
function operate(equation) {
    let operations = /[+\-*/]/;
    let operationIndex = equation.indexOf(equation.match(operations));
    //splits the string at the opreation index
    //index 0 is firstNum, index 1 is secondNum.
    let numbers = equation.split(operations);
    switch (equation[operationIndex]) { //ensures that only the first one will be used
        case "+"://could also add Number() around the array but whatever
            return add(numbers[0], numbers[1]);
        case "-":
            return subtract(numbers[0], numbers[1]);
        case "*":
            return multiply(numbers[0], numbers[1]);
        case "/":
            return divide(numbers[0], numbers[1]);
    }
}
let equation = "";
//makes it so that while the equation will store all the digits, the displayed thing will not show
//+parseFloat((4).toFixed(2));
const displayedText = document.querySelector(".text");
let btns = document.querySelectorAll("button");
btns = Array.from(btns);
btns.map((btn) => {
    if (btn.textContent == "=") {
        return btn.addEventListener("click", () => {
            equation = operate(equation).toString();
            //console.log(equation); //add array in the future to store values? +parseFloat((equation).toFixed);
            displayedText.textContent = (equation == "NaN")?  "Your result was NaN. Please clear." : +parseFloat((Number(equation)).toFixed(2));;
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