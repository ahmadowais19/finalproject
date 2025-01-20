const btn = document.getElementById("btn");
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const confirmPassword = document.getElementById("confirmPassword");

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
    if (FirstName.value.trim() === "") {
        FirstName.style.border = "2px solid red";
    } else {
        FirstName.style.border = "2px solid green";
    }

    if (LastName.value.trim() === "") {
        LastName.style.border = "2px solid red";
    } else {
        LastName.style.border = "2px solid green";
    }

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

    if (confirmPassword.value.trim() === "") {
        confirmPassword.style.border = "2px solid red";
    } else {
        confirmPassword.style.border = "2px solid green";
    }
}

FirstName.addEventListener("input", () => {
    FirstName.classList.remove("border-danger");
    FirstName.classList.add("border-success");
});

LastName.addEventListener("input", () => {
    LastName.classList.remove("border-danger");
    LastName.classList.add("border-success");
});

Email.addEventListener("input", () => {
    Email.classList.remove("border-danger");
    Email.classList.add("border-success");
});

Password.addEventListener("input", () => {
    Password.classList.remove("border-danger");
    Password.classList.add("border-success");
});

confirmPassword.addEventListener("input", () => {
    confirmPassword.classList.remove("border-danger");
    confirmPassword.classList.add("border-success");
});

btn.addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
    validatePassword();
});
