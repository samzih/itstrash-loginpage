// Retrives the login button ("Logga in") by ID and assigns it to a variable
const loginBtn = document.getElementById("login-button");
// Selects the main paragraph and assigns it to a variable
const loginWith = document.querySelector(".login-with");
// login form to variable
const loginForm = document.getElementById("login-form");

// Assigns the HTML input username and password elements to variables
let userName;
let userPassword;

// Created a logout button aswell as add a class + some attributes to it
const logoutBtn = document.createElement("input");
logoutBtn.className = "logout-btn";
logoutBtn.setAttribute("type", "button");
logoutBtn.setAttribute("value", "Logga ut");

// A set of account/user objects (username + password) inside of an Array
let users = [
    {
        username: "fredrik",
        password: "12345"
    },
    {
        username: "sam",
        password: "abc123"
    },
    {
        username: "adam",
        password: "qwe321"
    }
]

// Initalizing function too check if user already has login info stored in local storage
init();
function init() {
    const usernameCheck = localStorage.getItem("name of user");
    const passwordCheck = localStorage.getItem("password of user");

    for (i = 0; i < users.length; i++) {
        if(usernameCheck == users[i].username && passwordCheck == users[i].password) {
            
            // changes the paragraph above to signed in + user's name (the methods change the first letter of the username to be in capital)
            loginWith.innerHTML = "Inloggad som " + usernameCheck[0].toUpperCase() + usernameCheck.slice(1);

            // clears the login form of any user input values
            loginForm.reset();

            // hides the entire login form
            loginForm.style.display = "none";

            // displays the logout button
            logoutBtn.style.display = "block";

            // inserts logout button element after
            loginWith.insertAdjacentElement("afterend", logoutBtn);

            // if the if statement is valid then it will put us out of the function
            return
        }
    }
}

// Local storage for the array with objects
localStorage.setItem("list of users", JSON.stringify(users)); // saves user array (with objects) as string

// Collect and assigns key to a variable
const usersStorage = localStorage.getItem("list of users");

// Parses it back to an array of objects
let obj = JSON.parse(usersStorage);


// When clicking on the "Logga in" button it runs a for loop with an if statement inside it to check and see if the user input matches any stored set of username and password in the "users" Array
loginBtn.addEventListener("click", function loginValues() {

    userName = document.getElementById("login-username").value;
    userPassword = document.getElementById("login-password").value;
    
    // local storage for the username put in the user input field
    localStorage.setItem("name of user", userName);
    const usernameStorage = localStorage.getItem("name of user");

    // local storage for the password put in the user input field
    localStorage.setItem("password of user", userPassword);
    const passwordStorage = localStorage.getItem("password of user");

    for (i = 0; i < users.length; i++) {
        if(usernameStorage == obj[i].username && passwordStorage == obj[i].password) {
            
            // changes the paragraph above to signed in + user's name (the methods change the first letter of the username to be in capital)
            loginWith.innerHTML = "Inloggad som " + userName[0].toUpperCase() + userName.slice(1);

            // clears the login form of any user input values
            loginForm.reset();

            // hides the entire login form
            loginForm.style.display = "none";

            // displays the logout button
            logoutBtn.style.display = "block";

            // inserts logout button element after
            loginWith.insertAdjacentElement("afterend", logoutBtn);

            // if the if statement is true then it will put us out of the loginValues function so that the alert does not run
            return
        }
    }
    alert("Fel användarnamn eller lösenord!");
});

// Function for when clicking on the "logga ut" button to hide and show to go back to default
logoutBtn.addEventListener('click', function logoutFunc() {
    logoutBtn.style.display = "none"; // hides the logout button
    loginForm.style.display = "block"; // displays the login form
    loginWith.innerHTML = "Logga in med konto"; // changes the paragraph back to default text
    localStorage.removeItem("name of user");
    localStorage.removeItem("password of user");
});