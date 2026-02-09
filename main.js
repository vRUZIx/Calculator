let result = 0;
let currentInput = "";
let operator = null;
addEventListener("click", (e) => {
    if (e.target.classList.contains("numbers")) {
        currentInput += e.target.textContent;
        document.querySelector(".inputLine input").value = currentInput;
    }
    else if (e.target.classList.contains("operator")) {
        if (currentInput) {
            if (operator) {
                result = calculate(result, parseFloat(currentInput), operator);
            }
            else {                result = parseFloat(currentInput);
            }   
            operator = e.target.textContent;
            currentInput = "";
            document.querySelector(".inputLine input").value = result;
        }
    }
    else if (e.target.id === "equals") {
        if (operator && currentInput) {
            result = calculate(result, parseFloat(currentInput), operator);
            operator = null;
            currentInput = result.toString();
            document.querySelector(".inputLine input").value = result;
        }
    }
    else if (e.target.id === "clear") {
        result = 0;
        currentInput = "";
        operator = null;
        document.querySelector(".inputLine input").value = "";
    }
});

function calculate(num1, num2, op) {  
    switch (op) {
        case "+":
            return num1 + num2  ;
        case "-":
            return num1 - num2;
        case "x":
            return num1 * num2;
        case "/":   
            return num1 / num2;
        default:
            return num2;
    }}
    
