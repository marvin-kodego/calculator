let firstNumber;
let secondNumber;
let operation;
let sum;

console.log(firstNumber, operation, secondNumber);

function hello() {
    console.log("Hello, World!");
}

function clickHandler(input) {
    switch (input) {
        case 1: 
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6: 
        case 7: 
        case 8: 
        case 9: {
            if (operation === undefined) {
                if (firstNumber === undefined) {
                    firstNumber = String(input);
                } else {
                    firstNumber = String(firstNumber) + String(input);
                }
            } else {
                if (secondNumber === undefined) {
                    secondNumber = String(input);
                } else {
                    secondNumber = String(secondNumber) + String(input);
                }
            }
            break;
        }
        case '+': {
            operation = '+';
            break;
        }
        case '=': {
            sum = Number(firstNumber) + Number(secondNumber);
            console.log(sum);
            firstNumber = undefined;
            secondNumber = undefined;
            operation = undefined;
            break;
        }
        default: {
            console.log("Unknown input: " + input);
        }
    }
    
    console.log(input, firstNumber, operation, secondNumber);
}
