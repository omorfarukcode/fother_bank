document.getElementById("deposit-btn").addEventListener("click", function(){
    const dipositeFieldString = document.getElementById("deposit-field");
    const newDipositeAmmountValue = dipositeFieldString.value ;
    // console.log(typeof newDipositeAmmountString);

    const newDipositAmmounte = parseFloat(newDipositeAmmountValue);
    // console.log(typeof newDipositAmmounte);


    dipositeFieldString.value = "";

    if(isNaN(newDipositAmmounte)){
        alert("Enter an amount number");
        return;
    }


    const ammountElemant = document.getElementById("deposit-ammount");
    const preTotalAmountString = ammountElemant.innerText;
    // console.log(typeof preTotalAmount);

    const preTotalAmount = parseFloat(preTotalAmountString);
    // console.log(newDipositAmmounte , preTotalAmount);

    const carDipositeTotal = newDipositAmmounte + preTotalAmount ;
    // console.log(carDipositeTotal);

    ammountElemant.innerText = carDipositeTotal ;


    const balanceAmmountEleamant = document.getElementById("balance-ammount");
    const balanceAmmountString = balanceAmmountEleamant.innerText
    // console.log(typeof balanceAmmountString);

    const balanceAmmount = parseFloat(balanceAmmountString);
    // console.log(typeof balanceAmmount);

    const totalBalanceAmmount = newDipositAmmounte + balanceAmmount;
    // console.log(totalBalanceAmmount);

    balanceAmmountEleamant.innerText = totalBalanceAmmount ;

    
})