const num1Input = document.querySelector('.num-1');
const num2Input = document.querySelector('.num-2');
const resultElement = document.getElementById('result');

// num1 cal num2
function calculate(operator) {
    const num1 = parseFloat(num1Input.value); 
    const num2 = parseFloat(num2Input.value); 
   
    // if (isNaN(num1) || isNaN(num2)) {
    //     resultElement.textContent = 'Input again!';
    //     return;
    // }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultElement.textContent = 'Error!!';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 'Phép tính không hợp lệ';
    }

    resultElement.textContent = result;
}

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
//-----------------------------------------------------------
        if (value === 'AC') {
            num1Input.value = '';
            num2Input.value = '';
            resultElement.textContent = '';
        } else if (value === 'DEL') {
            // Xóa giá trị của ô nhập hiện tại
            num1Input.value = num1Input.value.slice(0, -1);
            num2Input.value = num2Input.value.slice(0, -1);
        } else if (value === '=') {
            calculate(currentOperator);
        } else if (['+', '-', '*', '/'].includes(value)) {
            currentOperator = value; 
        } else {
//---------------------------------------------------
            if (!num1Input.value) {
                num1Input.value += value;
            } else {
                num2Input.value += value;
            }
        }
    });
});

