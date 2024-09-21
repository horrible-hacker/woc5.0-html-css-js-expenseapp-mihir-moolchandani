const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');
let expenses = [];

expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const note = document.getElementById('note').value;

    const expense = { amount, category, date, note };
    expenses.push(expense);
    updateExpenseList();
    updateTotalAmount();
    expenseForm.reset();
});

function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.amount} - ${expense.category} - ${expense.date} <button onclick="deleteExpense(${index})">Delete</button>`;
        expenseList.appendChild(li);
    });
}

function updateTotalAmount() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmount.textContent = `Total: $${total.toFixed(2)}`;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
    updateTotalAmount();
}
