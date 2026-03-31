const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // ✅ get selected role
  const role = document.querySelector('input[name="role"]:checked').value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check if user already exists
  const exists = users.some(u => u.email === email);

  if (exists) {
    alert("User already exists ❌");
    return;
  }

  const newUser = {
    firstName,
    lastName,
    email,
    password,
    role // 🔥 important
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful ✅");

  // redirect to login page
  window.location.href = "../Login/Login.html";
});