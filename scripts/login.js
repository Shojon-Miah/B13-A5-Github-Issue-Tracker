// Login related functionality will be implimented here 

// Form Submit Event
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
        //console.log("Login button clicked");

    //take Username and Password value
    const usernameInput = document.getElementById("username-input");
    const passwordInput = document.getElementById("password-input");
    // show errorMessage
    const errorMessage = document.getElementById("login-error");

    // Error Message Hide on Typing
    usernameInput.addEventListener("input", function() {
        errorMessage.classList.add("hidden");
    });
    
    passwordInput.addEventListener("input", function() {
        errorMessage.classList.add("hidden");
    });



    const username = usernameInput.value;
    const password = passwordInput.value;

    // console.log(username);
    // console.log(password);

    //Username and Password(Credential)Check

    if(username === "admin" && password === "admin123"){
        window.location.href = "index.html";
    }
    else {
        // console.log("Invalid credentials");
        errorMessage.classList.remove("hidden");
    }
    
});



