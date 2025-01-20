const btn = document.getElementById("btn");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");

const EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function rgx() {
    if (!EmailPattern.test(Email.value.trim())) {
        Email.classList.add("border-danger");
    } else {
        Email.classList.remove("border-danger");
        Email.classList.add("border-success");
    }
}

function validatePassword() {
    if (!PasswordPattern.test(Password.value.trim())) {
        Password.classList.add("border-danger");
        console.log(
            "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character."
        );
    } else {
        Password.classList.remove("border-danger");
        Password.classList.add("border-success");
    }
}

function validateForm() {
    rgx();

    if (Email.value.trim() === "") {
        Email.style.border = "2px solid red";
    } else {
        Email.style.border = "2px solid green";
    }

    if (Password.value.trim() === "") {
        Password.style.border = "2px solid red";
    } else {
        Password.style.border = "2px solid green";
    }
}

Email.addEventListener("input", () => {
    Email.classList.remove("border-danger");
    Email.classList.add("border-success");
});

Password.addEventListener("input", () => {
    Password.classList.remove("border-danger");
    Password.classList.add("border-success");
});

btn.addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
    validatePassword();
});
