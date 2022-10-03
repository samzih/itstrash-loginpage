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
    if (uN == 'fredrik' && uP == '12345') {
        console.log("you have logged in");

        // clears the form of any user input values
        document.getElementById('login-form').reset();
    }
    else {
        alert("Fel användarnamn eller lösenord!");
    }
}