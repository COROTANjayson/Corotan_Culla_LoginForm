
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const admin = document.getElementById("admin");
const user = document.getElementById("user");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "user") {
        
        user.innerHTML = "It Works" 
        admin.innerHTML = ""
    } else if (username === "admin" && password === "admin") {
        user.innerHTML = ""
       admin.innerHTML = "It Works" 
    } else {
        
        alert("Invalid username and/or password");
        location.reload();
    }
})