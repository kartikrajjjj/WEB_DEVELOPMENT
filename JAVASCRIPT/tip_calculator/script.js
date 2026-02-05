function calculateTip(billAmount,tipPercent){
    if(billAmount<=0 || tipPercent<0){
        document.querySelector('#total').innerText='ENTER VALID VALUES.';
    }
    else{
    let totalValue=billAmount+(tipPercent/100)*billAmount;
    let tipValue=totalValue-billAmount;
    document.querySelector('#total').innerText=`YOUR TOTAL AMOUNT IS: ${totalValue}.
     YOUR TIP IS: ${tipValue}`
    }
}
function handleCalculate(){
    let billAmount=Number(document.querySelector('#billAmount').value);
    let tipPercent=Number(document.querySelector('#tipPercent').value);
    calculateTip(billAmount,tipPercent);
}
