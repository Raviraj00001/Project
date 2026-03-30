const loginform = document.getElementById("loginform");
const errormessage = document.getElementById("errorMsg");

loginform.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const roleEl   = document.getElementById("role");
  const role     = roleEl ? roleEl.value : "jobseeker";

  // --- Validation ---
  if (username === "" || password === "") {
    errormessage.textContent = "All fields are required.";
    errormessage.style.color = "red";
    return;
  }

  if (password.length < 9) {
    errormessage.textContent = "Password must be at least 9 characters.";
    errormessage.style.color = "red";
    return;
  }

  if (roleEl && role === "") {
    errormessage.textContent = "Please select a role.";
    errormessage.style.color = "red";
    return;
  }

  // --- Role-based redirect ---
  if (role === "recruiter") {
    window.location.href = "DashboardRecruitor.html";
  } else {
    window.location.href = "DashboardjobSeeker.html";
  }
});