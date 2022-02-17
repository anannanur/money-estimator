let alphabet = /^[A-Za-z]+$/;
document.getElementById('calculate').addEventListener("click", function () {

    const incomeAmount = document.getElementById('income').value;
    const foodExpense = document.getElementById('food').value;
    const rentExpense = document.getElementById('rent').value;
    const clothExpense = document.getElementById('cloths').value;

    // error handling if input fields remain empty or negative 
    if (foodExpense == '' || rentExpense == '' || clothExpense == '' || incomeAmount == '' ||
        foodExpense < 0 || rentExpense < 0 || clothExpense < 0 || incomeAmount < 0) {
        alert("Any input field can't be empty or negative");
    }

    // error handling if input fields are filled in alphabet 
    else if (incomeAmount.match(alphabet) || foodExpense.match(alphabet) || rentExpense.match(alphabet) || clothExpense.match(alphabet)) {
        alert("Please enter number in all the field");
    }

    else {
        totalExpense(foodExpense, rentExpense, clothExpense);

    }
})

// update total expenses 
function totalExpense(foodExpense, rentExpense, clothExpense) {
    const totalExpense = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothExpense);
    const totalExpenses = document.getElementById("total-expenses");
    totalExpenses.innerText = totalExpense;
    totalBalance(totalExpense);
}
// update balance 
function totalBalance(totalExpense) {

    const incomeAmount = parseFloat(document.getElementById('income').value);
    if (totalExpense < incomeAmount) {
        const balance = incomeAmount - totalExpense;
        const totalBalance = document.getElementById("balance");
        totalBalance.innerText = balance;
    }
    // error handling if expenses are larger than income
    else {
        alert('Your expenses can not be more than your income');
        document.getElementById("total-expenses").innerText = '-';
        document.getElementById("balance").innerText = '-';
    }
}


// finding saving amount 
document.getElementById("save").addEventListener("click", function () {

    const incomeAmount = parseFloat(document.getElementById('income').value);
    const savingPercentage = document.getElementById('saving-percentage').value;

    // error handling if saving value will be alphabet or negative
    if (savingPercentage.match(alphabet) || savingPercentage < 0) {
        alert('Please enter a positive number');
    }
    // error handling if saving input field will be empty
    else if (savingPercentage != '') {
        const savingAmount = (incomeAmount * parseFloat(savingPercentage)) / 100;
        const savingAmountText = document.getElementById("saving-amount");
        savingAmountText.innerText = savingAmount;
        const totalBalance = document.getElementById("balance").innerText;
        updateRemainingBalance(totalBalance, savingAmount);
    }
    else {
        alert('Please enter saving percentage value');
    }
})

// finding remaining balance 
function updateRemainingBalance(totalBalance, savingAmount) {

    // error handling if saving amount is larger than current balance
    if (savingAmount > totalBalance) {
        document.getElementById('alert-msg').style.display = "block";
        const savingAmountText = document.getElementById("saving-amount");
        savingAmountText.innerText = "-";
        document.getElementById('remaining-amount').innerText = "-";
    }
    else {
        const remainingBalance = totalBalance - savingAmount;
        const remainingAmountText = document.getElementById('remaining-amount');
        remainingAmountText.innerText = remainingBalance;
    }
}
// reseting all input and text fields 
document.getElementById('reset').addEventListener("click", function () {
    document.getElementById('income').value = "";
    document.getElementById('food').value = "";
    document.getElementById('rent').value = "";
    document.getElementById('cloths').value = "";
    document.getElementById("total-expenses").innerText = "00";
    document.getElementById("balance").innerText = "00";
    document.getElementById('saving-percentage').value = "";
    document.getElementById("saving-amount").innerText = "00";
    document.getElementById("remaining-amount").innerText = "00";
    document.getElementById('alert-msg').style.display = "none";
})