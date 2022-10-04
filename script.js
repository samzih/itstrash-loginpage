// Retrives the login button ("Logga in") by ID and assigns it to a variable
const loginBtn = document.getElementById("login-button");

// Assigns the HTML input username and password elements to variables
let userName = document.getElementById("login-username");
let userPassword = document.getElementById("login-password");

// A set of account/user objects (username + password) inside of an Array
let users = [
    {
        username: "fredrik",
        password: "12345"
    },
    {
        username: "sam",
        password: "123"
    },
    {
        username: "adam",
        password: "qwe5534"
    }
]

// When clicking on the "Logga in" button it runs a for loop with an if statement inside it to check and see if the user input matches any stored set of username and password in the "users" Array
loginBtn.addEventListener("click", function loginValues() {
    
    for (i = 0; i < users.length; i++) {
        if(userName.value == users[i].username && userPassword.value == users[i].password) {
            
            // changes the paragraph above to signed in + user's name (the methods change the first letter of the username to be in capital)
            document.querySelector('.login-with').innerHTML = "Inloggad som " + userName.value[0].toUpperCase() + userName.value.slice(1);

            // clears the login form of any user input values
            document.getElementById('login-form').reset();

            // removes the entire login form
            document.getElementById('login-form').remove();

            // creates logout button aswell as a class + some attributes and then adds it after the logged in paragraph
            const logoutBtn = document.createElement("input");
            logoutBtn.className = "logout-btn";
            logoutBtn.setAttribute("type", "button");
            logoutBtn.setAttribute("value", "Logga ut");

            // selects the paragraph and assigns it to a variable to be used for inserting logout button element after
            const loginWith = document.querySelector(".login-with");
            loginWith.insertAdjacentElement("afterend", logoutBtn);

            return; // if the if statement is true then it will put us out of the loginValues function so that the alert does not run
        }
    }
    alert("Fel användarnamn eller lösenord!");
});




































// // Function that checks if user input of username and password are valid
// function loginMatch(uN, uP) {
//     if (uN == 'fredrik' && uP == '12345' || uN == 'sam' && uP == 'hlae16' || uN == 'adam' && uP == 'dnx444' || uN == 'tyler' && uP == 'apxq44') {
//         console.log("You are now logged in as: " + uN);

//         // clears the form of any user input values
//         document.getElementById('login-form').reset();

//         // removes login form and changes the paragraph above
//         document.getElementById('login-form').remove();
//         document.querySelector('.login-with').innerHTML = 'Inloggad som ' + uN[0].toUpperCase() + uN.slice(1);

//         // selects login text paragraph by class
//         const loginWith = document.querySelector(".login-with");

//         // creates logout button aswell as a class + some attributes and then adds it after the logged in paragraph
//         const logoutBtn = document.createElement("input");
//         logoutBtn.className = "logout-btn";
//         logoutBtn.setAttribute("type", "button");
//         logoutBtn.setAttribute("value", "Logga ut");
//         loginWith.insertAdjacentElement("afterend", logoutBtn);
//     }
//     else {
//         alert("Fel användarnamn eller lösenord!");
//     }
// }

// // Function for when clicking on the "logga ut" button
// logoutBtn.addEventListener('click', function logoutFunc() {
    
// });