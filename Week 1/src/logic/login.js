import { getLoggedInUser, getUsers, saveLoggedInUser } from "../logic/users.js";

export function setupLogin(element) {
    const user = getLoggedInUser();
    
    if (user !== null) {
        history.pushState(null, "", "/welcome");
        location.reload();
    }

    const form = document.querySelector("form");

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailError = document.getElementById("Email-Error");
    const passwordError = document.getElementById("Password-Error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const users = getUsers();

        emailError.textContent = "";
        passwordError.textContent = "";

        email.classList.remove("error-border");
        password.classList.remove("error-border");

        let valid = true;

        if (!email.value.trim()) {
            emailError.textContent = "This field can\'t be empty";
            email.classList.add("error-border");
            valid = false;
        }

        if (!password.value.trim()) {
            passwordError.textContent = "This field can\'t be empty";
            password.classList.add("error-border");
            valid = false;
        }

        const userExist = users.find((u) => u.email == email.value.trim());
        if (!userExist) {
            emailError.textContent = "Email doesn\'t exist";
            valid = false;
        } else {
            if (userExist.password !== password.value.trim()) {
                passwordError.textContent = "Incorrect Password";
                valid = false;
            }
        }

        if (!valid) return;

        saveLoggedInUser(userExist);

        history.pushState(null, "", "/welcome");
        location.reload();
    });
}
