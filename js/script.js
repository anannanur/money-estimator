let regEx = /^[A-Za-z]+$/;
document.getElementById('calculate').addEventListener("click", function () {

    const incomeAmount = document.getElementById('income').value;
    const foodExpense = document.getElementById('food').value;
    const rentExpense = document.getElementById('rent').value;
    const clothExpense = document.getElementById('cloths').value;

    if (foodExpense == '' || rentExpense == '' || clothExpense == '' || incomeAmount == '' ||
        foodExpense < 0 || rentExpense < 0 || clothExpense < 0 || incomeAmount < 0) {
        alert("Any input field can't be empty or negative");
    }

    else if (incomeAmount.match(regEx) || foodExpense.match(regEx) || rentExpense.match(regEx) || clothExpense.match(regEx)) {
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
    const balance = incomeAmount - totalExpense;
    const totalBalance = document.getElementById("balance");
    totalBalance.innerText = balance;
}


// finding saving amount 
document.getElementById("save").addEventListener("click", function () {
    const incomeAmount = parseFloat(document.getElementById('income').value);
    const savingPercentage = document.getElementById('saving-percentage').value;
    if (savingPercentage.match(regEx) || savingPercentage < 0) {
        alert('Please enter a positive number');
    }
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

    // #error handling 
    if (savingAmount > totalBalance) {
        document.getElementById('alert-msg').style.display = "block";
        const savingAmountText = document.getElementById("saving-amount");
        savingAmountText.innerText = "";
        document.getElementById('remaining-amount').innerText = "";

    }
    else {
        const remainingBalance = totalBalance - savingAmount;
        const remainingAmountText = document.getElementById('remaining-amount');
        remainingAmountText.innerText = remainingBalance;
    }
}
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