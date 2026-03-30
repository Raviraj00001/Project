// SIGNUP
const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.querySelector('input[name="role"]:checked')?.value;

  // validation
  if (!firstName || !lastName || !email || !password || !role) {
    alert("Please fill all fields ❌");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate email
  const exists = users.find(user => user.email === email);
  if (exists) {
    alert("Email already registered ❌");
    return;
  }

  const user = { firstName, lastName, email, password, role };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully ✅");

  // redirect to login
  window.location.href = "../Login_page/login.html";
});