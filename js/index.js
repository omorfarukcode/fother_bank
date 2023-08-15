document.getElementById("btn").addEventListener("click" ,function(){
    const userEmail = document.getElementById("email");
    const emaill = userEmail.value;
    const userPassword = document.getElementById("password");
    const passwordd = userPassword.value;
    // console.log(emaill, passwordd);

    if(emaill === "wcelcome@fother.bank" && passwordd === "fother.bank"){
        window.location.href = "./bank.html";
    }else{
        alert("Incorrect Password");
    }

});

