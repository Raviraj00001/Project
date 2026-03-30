const loginform=document.getElementById("loginform");
const errormessage=document.getElementById("errorMsg");
const role=document.getElementById("role");
loginform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const username=document.getElementById("username").value.trim();;
    const password=document.getElementById("password").value.trim();;
    if(username===""||password===""){
        errormessage.textContent="all fills are required";
        errormessage.style.color="red";
        return;
    }
    if(password.length<9){
        errormessage.textContent="Password should contain 9 characters";
        errormessage.style.color="red";
        return ;
    }
    alert("Login successfully")

    window.location.href = "DashboardjobSeeker.html";

});