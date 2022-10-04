// Retrives the login button ("Logga in") by ID and assigns it to a variable
const loginBtn = document.getElementById('login-button');

// When clicking on the "Logga in" button it runs a function to store the user input values to variables
loginBtn.addEventListener('click', function loginValues() {
    
    // stores the username and password to variables
    let userName = document.getElementById("username").value;
    let userPassword = document.getElementById("password").value;

    // sets the variables as paramanters/arguments for the loginMatch function
    loginMatch(userName, userPassword);

});

// Function that checks if user input of username and password are valid
function loginMatch(uN, uP) {
    if (uN == 'fredrik' && uP == '12345' || uN == 'sam' && uP == 'hlae16' || uN == 'adam' && uP == 'dnx444' || uN == 'tyler' && uP == 'apxq44') {
        console.log("You are now logged in as: " + uN);

        // clears the form of any user input values
        document.getElementById('login-form').reset();

        // removes login form and changes the paragraph above
        document.getElementById('login-form').remove();
        document.querySelector('.login-with').innerHTML = 'Inloggad som ' + uN[0].toUpperCase() + uN.slice(1);

        // selects login text paragraph by class
        const loginWith = document.querySelector(".login-with");

        // creates logout button aswell as a class + some attributes and then adds it after the logged in paragraph
        const logoutBtn = document.createElement("input");
        logoutBtn.className = "logout-btn";
        logoutBtn.setAttribute("type", "button");
        logoutBtn.setAttribute("value", "Logga ut");
        loginWith.insertAdjacentElement("afterend", logoutBtn);
    }
    else {
        alert("Fel användarnamn eller lösenord!");
    }
}

// Function for when clicking on the "logga ut" button
logoutBtn.addEventListener('click', function logoutFunc() {
    
});