document.getElementById('deposit-button').addEventListener('click', function () {

    // deposit button
    const depositInputField = document.getElementById('deposit-input');
    const depositText = depositInputField.value;
    const newDepositAmount = parseFloat(depositText);

    // deposit show
    const depositTotal = document.getElementById('deposit-total');
    const pDepositTotalText = depositTotal.innerText;
    const pDepositTotalAmount = parseFloat(pDepositTotalText);

    // blance total
    const newDepositTotal = pDepositTotalAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance
    const updateBalance = document.getElementById('balance-totalupdate');
    const updateBalanceText = updateBalance.innerText;
    const updateBalanceValue = parseFloat(updateBalanceText);

    // Total balance
    const balanceTotalAmount = updateBalanceValue + newDepositAmount;
    updateBalance.innerText = balanceTotalAmount;

    // clear form
    depositInputField.value = ' ';

})

document.getElementById('withdraw-button').addEventListener('click', function () {

    // withdraw button
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawText = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(withdrawText);

    // withdraw show

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const pwithdrawTotalValue = parseFloat(withdrawTotalText);

    const newWithdrawTotal = pwithdrawTotalValue + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    // clear form
    withdrawInputField.value = ' ';

    // update total balance
    const withdrawUpdateBalance = document.getElementById('balance-totalupdate');
    const UwithdrawValue = withdrawUpdateBalance.innerText;
    const UwithdrawText = parseFloat(UwithdrawValue);

    // total balance
    const UpdateBalancePlue = UwithdrawText - newWithdrawAmount;
    withdrawUpdateBalance.innerText = UpdateBalancePlue;

})