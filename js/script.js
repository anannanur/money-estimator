document.getElementById('calculate').addEventListener("click", function () {

    const foodExpense = document.getElementById('food').value;
    const rentExpense = document.getElementById('rent').value;
    const clothExpense = document.getElementById('cloths').value;

    totalExpense(foodExpense, rentExpense, clothExpense);


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
    const savingPercentage = parseFloat(document.getElementById('saving-percentage').value);
    const savingAmount = (incomeAmount * savingPercentage) / 100;
    const savingAmountText = document.getElementById("saving-amount");
    savingAmountText.innerText = savingAmount;
    const totalBalance = document.getElementById("balance").innerText;
    updateRemainingBalance(totalBalance, savingAmount);
})

// finding remaining balance 
function updateRemainingBalance(totalBalance, savingAmount) {

    // #error handling 
    if (savingAmount > totalBalance) {
        alert('Your saving amount is more than your total balance,please decrease your saving-percentage');
        const savingAmountText = document.getElementById("saving-amount");
        savingAmountText.innerText = "";

    }
    else if (savingAmount < totalBalance) {
        const remainingBalance = totalBalance - savingAmount;
        const remainingAmountText = document.getElementById('remaining-amount');
        remainingAmountText.innerText = remainingBalance;
    }
}
