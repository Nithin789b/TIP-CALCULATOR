// script.js
function calculateTip() {
    
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    
    if (isNaN(billAmount) || billAmount <= 0) {
        alert('Please enter a valid bill amount');
        return;
    }

    
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;

    
    document.getElementById('tipAmount').innerText = tipAmount.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}
