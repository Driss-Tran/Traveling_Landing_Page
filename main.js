var navLinks = document.getElementById("nav_links");
// Dùng để dóng mở menu
function showMenu() {
    navLinks.style.right = "0";
    navLinks.style.transition="all 0.75s ease-in-out";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function checkLoginValidate(){
    let userName = document.getElementById("usr1");
    let password = document.getElementById("pwd1");
    let error_msg = document.getElementById("error_msg");
    let loginBtn = document.getElementById("loginBtn");
    if(userName.value ===""){
        error_msg.innerHTML = `<p>Please enter username</p>`;
    }else if(password.value ===""){
        error_msg.innerHTML = `<p>Please enter your password</p>`;
    }else if(password.value.length <6){
        error_msg.innerHTML = `<p>Password must have 6 characters</p>`;
    }else{
        error_msg.innerHTML = "";
        alert("Login successfully!!");
        loginBtn.setAttribute("data-dismiss","modal");
    }
}


function checkSignupValidate() {
    let userName = document.getElementById("usr");
    let password = document.getElementById("pwd");
    let email = document.getElementById("email");
    let passConfirm = document.getElementById("pwd_confirm");
    let error_msg = document.getElementById("error_msg1");
    let signupBtn = document.getElementById("signupBtn")
    if(userName.value === ""){
        error_msg.innerHTML = `<p>Please enter username</p>`;
    }else if(!userName.value.trim().match(/^[a-zA-Z0-9]+$/)){
        error_msg.innerHTML = `<p>Please do not use special characters</p>`
    }else if(password.value === ""){
        error_msg.innerHTML = `<p>Please enter your password</p>`;
    }else if(password.value.length <6){
        error_msg.innerHTML = `<p>Password must have 6 characters</p>`;
    }else if(!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/))
    {
        error_msg.innerHTML = `<p>Password must have minimum 6 characters and contain 1 uppercase letter, 1 lowercase letter, 1 special character</p>`;
    }else if(passConfirm.value!==password.value){
        error_msg.innerHTML =`<p>Your confirmed password is not matched</p>`;
    }
    else if(email.value ===""){
        error_msg.innerHTML =`<p>Please enter your email</p>`;
    }
    else if(!email.value.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        error_msg.innerHTML =`<p>Your email is not correct</p>`;
    }
    else{
        error_msg.innerHTML = "";
        alert("Sign up successfully!!");
        signupBtn.setAttribute("data-dismiss","modal");
    }
}

function checkEmailForSubscribe(){
    let emailInput = document.getElementById("inputSubscribe");
    if(emailInput.value ===""){
        alert("Please enter your email");
    }
    else if(!emailInput.value.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert("Your email is not correct");
    }
    else{
        alert("Subscribed successfully, we will send you every updated info.")
    }
}


(function displayButtonToTop(){
    let scrollBtn = document.getElementById("scrollBtn");
    const handleScroll = ()=>{
        window.scrollY >=200 ? scrollBtn.style.visibility="visible": scrollBtn.style.visibility="hidden";
    }

    window.addEventListener("scroll",handleScroll);
})()


function clickGoToTop(){
    let header = document.getElementById("header");
    header.scrollIntoView();
    
}