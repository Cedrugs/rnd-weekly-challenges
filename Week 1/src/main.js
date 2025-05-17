import './style.css';
import { setupLogin } from './logic/login.js';
import { login } from './pages/login.js';
import { register } from './pages/register.js';
import { setupRegister } from './logic/register.js';
import { getUsers } from './logic/users.js';

const app = document.querySelector('#App');
const path = window.location.pathname;

console.log("Users: ", getUsers());

if (path === '/' || path === '/register') {
  	app.innerHTML = register;
	setupRegister();
} else if (path === '/login') {
	app.innerHTML = login;
}
