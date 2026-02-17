// form-validation.js

// Function to validate if the input fields are not empty
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name == "" || email == "") {
        alert("All fields must be filled out.");
        return false;
    }
    return true;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        alert("Form submitted successfully!");
    }
}

// Add event listener to the form
window.onload = function() {
    var form = document.getElementById("myForm");
    form.addEventListener("submit", handleSubmit);
};