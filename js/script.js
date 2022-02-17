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


