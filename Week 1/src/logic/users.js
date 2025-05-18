export function getUsers() {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
}

export function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

export function saveLoggedInUser(user) {
    localStorage.setItem("loggedIn", JSON.stringify(user));
}

export function getLoggedInUser() {
    const data = localStorage.getItem("loggedIn");
    return data ? JSON.parse(data) : null;
}