// Retrives the login button ("Logga in") by ID and assigns it to a variable
const loginBtn = document.getElementById("login-button");
// Selects the main paragraph and assigns it to a variable
const pageStatus = document.querySelector(".page-status");
// login form to variable
const loginForm = document.getElementById("login-form");




// Logout button with a class (for css styling) + some attributes
const logoutBtn = document.createElement("input");
logoutBtn.className = "logout-btn";
logoutBtn.setAttribute("type", "button");
logoutBtn.setAttribute("value", "Logga ut");




// A set of objects (username + password) inside of an Array
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
    },
    {
        username: "markus",
        password: "js555"
    }
]




// Initalizing function too check if user already has login info stored in local storage
init();
function init() {
    const usernameCheck = localStorage.getItem("username");
    const passwordCheck = localStorage.getItem("password");

    for (i = 0; i < users.length; i++) {
        if(usernameCheck == users[i].username && passwordCheck == users[i].password) {
            
            // changes the paragraph above to signed in + user's name (the methods change the first letter of the username to be in capital)
            pageStatus.innerHTML = "Inloggad som " + usernameCheck[0].toUpperCase() + usernameCheck.slice(1);

            // clears the login form of any user input values
            loginForm.reset();

            // hides the entire login form
            loginForm.style.display = "none";

            // displays the logout button
            logoutBtn.style.display = "block";

            // inserts logout button element after
            pageStatus.insertAdjacentElement("afterend", logoutBtn);

            // takes us out of the loop
            return
        }
    }
}




// Sets array (with objects) as a string in localStorage
localStorage.setItem("users", JSON.stringify(users));

// Get key value and assign to variable
const usersLocalStorage = localStorage.getItem("users");

// Parses it back to an array of objects
let usersArray = JSON.parse(usersLocalStorage);




// Function when clicking on login button (checks if the user input matches any stored set of username and password in the "users" Array)
loginBtn.addEventListener("click", function loginValues() {

    // sets user input login values to variables
    const userName = document.getElementById("login-username").value;
    const userPassword = document.getElementById("login-password").value;
    
    // localStorage for the username & password
    localStorage.setItem("username", userName);
    localStorage.setItem("password", userPassword);
    const usernameStorage = localStorage.getItem("username");
    const passwordStorage = localStorage.getItem("password");

    for (i = 0; i < users.length; i++) {
        if(usernameStorage == usersArray[i].username && passwordStorage == usersArray[i].password) {
            
            // changes the page status paragraph (the methods change the first letter of the username to be in capital)
            pageStatus.innerHTML = "Inloggad som " + usernameStorage[0].toUpperCase() + usernameStorage.slice(1);

            // clears the login form of any user input values
            loginForm.reset();

            // hides the entire login form
            loginForm.style.display = "none";

            // displays the logout button
            logoutBtn.style.display = "block";

            // inserts logout button element after
            pageStatus.insertAdjacentElement("afterend", logoutBtn);

            // takes us out of the loop
            return
        }
    }
    alert("Fel användarnamn eller lösenord!");
});




// Function that restores (hides/shows) elements back to default when clicking on the logout button
logoutBtn.addEventListener('click', function logoutFunc() {
    logoutBtn.style.display = "none"; // hides the logout button
    loginForm.style.display = "block"; // displays the login form
    pageStatus.innerHTML = "Logga in med konto"; // changes the main page status <p> back to default

    // removes username and password from the localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
});