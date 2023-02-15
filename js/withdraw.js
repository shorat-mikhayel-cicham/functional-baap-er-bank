document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFieldValue = getInputFieldValueById('withdraw-field');
    const PreviousTotalWithdrawValue = getElementValueById('total-withdraw');
    const newTotalWithdrawValue = PreviousTotalWithdrawValue + withdrawFieldValue;

    setTextElementValueById('total-withdraw', newTotalWithdrawValue);

    const previousBalanceTotal = getElementValueById('total-balance');
    const newBalanceAmount = previousBalanceTotal - withdrawFieldValue;
    setTextElementValueById('total-balance', newBalanceAmount);
})