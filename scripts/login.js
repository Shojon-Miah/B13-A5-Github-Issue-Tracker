// Login related functionality will be implimented here 

// Form Submit Event
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    console.log("Login button clicked");
});