const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login successful ✅");

    if (user.role === "seeker") {
      window.location.href = "../DashBoardSeeker/DashBoardSeeker.html";
    } 
    else if (user.role === "recruiter") {
      window.location.href = "../DashBoardRecruiter/DashBoardRecruiter.html";
    } 
    else {
      alert("Unknown role ❌");
    }

  } else {
    alert("Invalid email or password ❌");
  }
});