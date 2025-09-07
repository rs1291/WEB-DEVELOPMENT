// Grab elements
const current_balance_el = document.getElementById("current_balance");
const entered_amount_el = document.getElementById("entered_amount");
const credit_btn = document.getElementById("credit_btn");
const debit_btn = document.getElementById("debit_btn");

// Credit button event
credit_btn.addEventListener("click", () => {
    let account_balance = parseInt(current_balance_el.innerText) + parseInt(entered_amount_el.value || 0);
    current_balance_el.innerText = account_balance;
    entered_amount_el.value = ""; // clear input
});

// Debit button event
debit_btn.addEventListener("click", () => {
    let account_balance = parseInt(current_balance_el.innerText) - parseInt(entered_amount_el.value || 0);
    if (account_balance < 0) {
        alert("Insufficient balance!");
    } else {
        current_balance_el.innerText = account_balance;
    }
    entered_amount_el.value = ""; // clear input
});