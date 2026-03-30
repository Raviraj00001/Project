const signupForm = document.getElementById("sign-up-form");
const errorMsg   = document.createElement("p");

errorMsg.style.textAlign = "center";
errorMsg.style.marginTop = "10px";
errorMsg.style.fontWeight = "bold";
signupForm.appendChild(errorMsg);

function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.style.color = "red";
}

function showSuccess(msg) {
  errorMsg.textContent = msg;
  errorMsg.style.color = "green";
}

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName  = document.getElementById("fullName").value.trim();
  const username  = document.getElementById("signupUser").value.trim();
  const email     = document.getElementById("signupEmail").value.trim();
  const password  = document.getElementById("signupPass").value.trim();
  const cPassword = document.getElementById("signupCPass").value.trim();
  const terms     = document.getElementById("terms").checked;

  // --- Empty field check ---
  if (!fullName || !username || !email || !password || !cPassword) {
    showError("All fields are required.");
    return;
  }

  // --- Name: letters and spaces only ---
  if (!/^[a-zA-Z ]{3,}$/.test(fullName)) {
    showError("Full name must be at least 3 letters, no special characters.");
    return;
  }

  // --- Username: no spaces, min 3 chars ---
  if (!/^[a-zA-Z0-9_]{3,}$/.test(username)) {
    showError("Username must be at least 3 characters (letters, numbers, _ only).");
    return;
  }

  // --- Email format check ---
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  // --- Password strength ---
  if (password.length < 9) {
    showError("Password must be at least 9 characters.");
    return;
  }

  if (!/[A-Z]/.test(password)) {
    showError("Password must contain at least one uppercase letter.");
    return;
  }

  if (!/[0-9]/.test(password)) {
    showError("Password must contain at least one number.");
    return;
  }

  // --- Passwords match ---
  if (password !== cPassword) {
    showError("Passwords do not match.");
    return;
  }

  // --- Terms checkbox ---
  if (!terms) {
    showError("You must agree to the Terms & Conditions.");
    return;
  }

  // --- Save to localStorage (temporary until backend is ready) ---
  const users = JSON.parse(localStorage.getItem("hirehub_users") || "[]");

  const userExists = users.find(u => u.username === username || u.email === email);
  if (userExists) {
    showError("An account with this username or email already exists.");
    return;
  }

  users.push({ fullName, username, email, password });
  localStorage.setItem("hirehub_users", JSON.stringify(users));

  showSuccess("Account created successfully! Redirecting to login...");

  setTimeout(() => {
    window.location.href = "slogin.html";
  }, 1500);
});