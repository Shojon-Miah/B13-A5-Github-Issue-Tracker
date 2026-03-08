// Login related functionality will be implimented here 

// Form Submit Event
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
        //console.log("Login button clicked");

    const usernameInput = document.getElementById("username-input");
    const passwordInput = document.getElementById("password-input");
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log(username);
    console.log(password);

});



