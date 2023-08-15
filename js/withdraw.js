// console.log("Hello")
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // console.log("click")
    const inputElemant = document.getElementById("withdraw-filed");
    // console.log(inputElemant);
    const withdrawAmmountString = inputElemant.value;
    // console.log(withdrawAmmountString);
    const withdrawAmmount = parseFloat(withdrawAmmountString);
    // console.log(typeof withdrawAmmount);

    const withdrawAmmountElemant = document.getElementById("withdraw-ammount");
    // console.log(withdrawAmmountElemant)
    const withdrawAmmountStringg = withdrawAmmountElemant.innerText;
    // console.log(withdrawAmmountStringg);
    const withdrawAmmountt = parseFloat(withdrawAmmountStringg);
    // console.log(typeof withdrawAmmountt);

    // const totalWithdraAmmount = withdrawAmmount + withdrawAmmountt ;
    // // console.log(totalWithdraAmmount);
    // withdrawAmmountElemant.innerText = totalWithdraAmmount ;


    const balanceElemantString = document.getElementById("balance-ammount");
    // console.log(balanceElemantString);
    const balanceElemantValue = balanceElemantString.innerText 
    const balanceElemant = parseFloat(balanceElemantValue);
    // console.log(balanceElemant);

    inputElemant.value = "" ;

    if( withdrawAmmount > balanceElemant ){
        alert("Baper bank e Ato Taka Nay")
        return;
    }

    const totalWithdraAmmount = withdrawAmmount + withdrawAmmountt ;
    // console.log(totalWithdraAmmount);
    withdrawAmmountElemant.innerText = totalWithdraAmmount ;

    const newBalance =balanceElemant - withdrawAmmount;
    // console.log(newBalance);
    balanceElemantString.innerText = newBalance ;

})