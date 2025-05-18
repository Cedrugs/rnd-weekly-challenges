import { getLoggedInUser, getUsers, saveUsers } from "../logic/users.js";

export function setupRegister() {
    const user = getLoggedInUser();

    if (user !== null) {
        history.pushState(null, "", "/welcome");
        location.reload();
    }

    const form = document.querySelector("form");

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const repassword = document.getElementById("re-password");
    
    const nameError = document.getElementById("Name-Error");
    const emailError = document.getElementById("Email-Error");
    const passwordError = document.getElementById("Password-Error");
    const repasswordError = document.getElementById("Repassword-Error");

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const users = getUsers();

        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        repasswordError.textContent = "";

        name.classList.remove("error-border");
        email.classList.remove("error-border");
        password.classList.remove("error-border");
        repassword.classList.remove("error-border");

        let valid = true;

        if (!name.value.trim()) {
            nameError.textContent = "This field can\'t be empty";
            name.classList.add("error-border");
            valid = false;
        }

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

        if (!repassword.value.trim()) {
            repasswordError.textContent = "This field can\'t be empty";
            repassword.classList.add("error-border");
            valid = false;
        }

        const existing = users.find((u) => u.email === email.value.trim());
        if (existing) {
            emailError.textContent = "Email already registered";
            valid = false;
        }

        const pass = password.value.trim();
        const passRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;

        if (!passRegex.test(pass) && pass !== "") {
            passwordError.textContent = "Password must be 8+ chars, 1 uppercase & 1 symbol"
            valid = false;
        }

        if (pass !== repassword.value.trim() && repassword.value.trim() !== "") {
            repasswordError.textContent = "Passwords do not match";
            repassword.classList.add("error-border");
            valid = false;
        }

        if (!valid) return;

        saveUsers([...users, {
            name: name.value.trim(),
            email: email.value.trim(),
            password: pass,
        }]);

        history.pushState(null, "", "/login");
        location.reload();
    })
}
