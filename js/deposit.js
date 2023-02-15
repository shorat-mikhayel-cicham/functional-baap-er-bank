
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newInputFieldValue = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getElementValueById('total-deposit');
    const currentDepositAmount = newInputFieldValue + previousDepositTotal;


    setTextElementValueById('total-deposit', currentDepositAmount);

    const previousBalanceTotal = getElementValueById('total-balance');
    const newBalanceAmount = previousBalanceTotal + newInputFieldValue;
    setTextElementValueById('total-balance', newBalanceAmount);
})