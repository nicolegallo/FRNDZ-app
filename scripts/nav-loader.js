// nav-loader.js
import { getRole } from '/scripts/storage.js';

const navbar = document.getElementById("navbar");
const role = getRole();

if (role) {
  navbar.innerHTML = `
    <a href="/welcome.html">🏠 Home</a>
    <a href="/pages/discover.html">💬 Matches</a>
    <a href="/pages/dashboard.html">📊 Dashboard</a>
    <a href="/pages/settings.html">⚙️ Account</a>
  `;
} else {
  navbar.innerHTML = `
    <a href="/welcome.html">🏠 Home</a>
    <a href="/pages/friend-code-confirmation.html">🔐 Sign In</a>
  `;
}
