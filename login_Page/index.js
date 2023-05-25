let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
submit.addEventListener("click",()=>{
    if(email.value == "" || password.value == ""){
      alert("Fill the form correctly! Dont leave anything")
    }
    else if(password.value.length <= 8){
        alert("Your password length shall be greater than 8 ")
    }
})
