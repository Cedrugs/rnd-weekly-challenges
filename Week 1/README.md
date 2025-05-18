# RnD Week 1 - Login & Register Page

A simple web application for user registration and login built using Vanilla Vite (JS, HTML, CSS). This project serves as an educational demonstration of creating single-page applications (SPAs) with user authentication and form validation.

## Overview

This application allows users to register and login. It implements form validation for all inputs and manages user sessions using the browser's localStorage to maintain state across page refreshes. The app redirects users appropriately based on their authentication status.

## Features

- **Registration (/register or /):** 
  - Users can register by filling out a form with validations for inputs, including passwords and email. It checks for existing users to prevent duplicate registrations.
  
- **Login (/login):** 
  - Users can login by verifying their credentials. The application checks if the user exists and compares the password securely.
  
- **Welcome Page (/welcome):** 
  - Users are welcomed only if they are authenticated. The welcome status is maintained in localStorage, ensuring the user's session persists.

- **Redirects:** 
  - After successful login or registration, users are redirected to the /welcome page. Authenticated users are redirected from /register and /login to /welcome to prevent access to these routes.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **Vite**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cedrugs/rnd-weekly-challenges
   ```

2. Navigate to the project directory:
   ```bash
   cd "rnd-weekly-challenges/Week 1"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Screenshots

1. **Registration Page:**
   ![Registration Page Screenshot](https://cdn-gcs.samuelcedric.com/rnd-weekly-challenges/Week%201/register.png)

2. **Login Page:**
   ![Login Page Screenshot](https://cdn-gcs.samuelcedric.com/rnd-weekly-challenges/Week%201/login.png)

3. **Welcome Page - Unauthorized:**
   ![Welcome Page Screenshot - Unauthorzied](https://cdn-gcs.samuelcedric.com/rnd-weekly-challenges/Week%201/welcome%20-%20unauthorized.png)

4. **Welcome Page - Authorized:**
   ![Welcome Page Screenshot - Authorzied](https://cdn-gcs.samuelcedric.com/rnd-weekly-challenges/Week%201/welcome%20-%20authorized.png)