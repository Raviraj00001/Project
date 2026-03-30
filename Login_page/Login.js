// get form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  // get input values
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  // get users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check if user exists
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // store logged-in user
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login successful ✅");

    // redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password ❌");
  }
});