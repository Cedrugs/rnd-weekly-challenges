import { getLoggedInUser } from "../logic/users"

export const welcome = () => {
    const user = getLoggedInUser();

    if (user === null) {
        return `<h1>You are unauthorized</h1>`;
    } else {
        return `
            <h1>Welcome, ${user.name}!</h1>
        `
    }
}