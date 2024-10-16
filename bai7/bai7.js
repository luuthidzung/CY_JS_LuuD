document.getElementById('btn-signup').addEventListener('click', (event) => {
    event.preventDefault(); 

    // Lấy giá trị của các input
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();
  
    // Goi ham validate 
    validateField(username, 'username', 5, 10);
    validateField(password, 'password', 5, 10);
    validateEmail(email);
    });

    // kiem tra length username,passwd
    function validateField(value, field, minLength, maxLength) {
        const inputRow = document.getElementById(field).parentElement;
        const small = inputRow.querySelector('small');
        
        if (value === '') {
            showError(inputRow, `${capitalizeFirstLetter(field)} is required`);
        } else if (value.length < minLength || value.length > maxLength) {
            showError(inputRow, `${capitalizeFirstLetter(field)} must be between ${minLength} and ${maxLength} characters`);
        } else {
            showSuccess(inputRow);
        }
    }
    // kiem tra email
    function validateEmail(email){
    const reg = /\S+@\S+/;
    const inputRow = document.getElementById('email').parentElement;
    const small = inputRow.querySelector('small');
    
    if (email === '') {
        showError(inputRow, 'Email is required');
    } else if (!reg.test(email)) {
        showError(inputRow, 'Email is not valid');
    } else {
        showSuccess(inputRow);
    }
}
 
    //error
    function showError(inputRow, message) {
        const small = inputRow.querySelector('small');
        small.innerText = message;
        inputRow.classList.add('error');
        inputRow.classList.remove('success');
    }
    

    //success
    function showSuccess(inputRow) {
        const small = inputRow.querySelector('small');
        small.innerText = '';
        inputRow.classList.add('success');
        inputRow.classList.remove('error');
    }

    //upperCase
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }