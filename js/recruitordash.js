// ─── Element references ───────────────────────────────────────

const postBtn       = document.getElementById("post");
const postCard      = document.getElementById("postCard");
const closeCard     = document.getElementById("closeCard");
const postJobBtn    = document.getElementById("postJobBtn");
const companyHiring = document.getElementById("company-hiring");

const jobTitleEl    = document.getElementById("jobTitle");
const companyNameEl = document.getElementById("companyName");
const locationEl    = document.getElementById("location");
const jobTypeEl     = document.getElementById("jobType");
const jobDescEl     = document.getElementById("jobDesc");

// Tracks which card is being edited (null = new post)
let editingCard = null;

// ─── Open modal ───────────────────────────────────────────────

postBtn.addEventListener("click", () => {
  editingCard = null;         // fresh post, not an edit
  clearForm();
  openModal();
});

// ─── Close modal ─────────────────────────────────────────────

closeCard.addEventListener("click", () => {
  editingCard = null;
  clearForm();
  closeModal();
});

// ─── Submit: handles both NEW post and UPDATE ─────────────────

postJobBtn.addEventListener("click", () => {

  const title    = jobTitleEl.value.trim();
  const company  = companyNameEl.value.trim();
  const location = locationEl.value.trim();
  const type     = jobTypeEl.value;
  const desc     = jobDescEl.value.trim();

  // Validation
  if (!title || !company) {
    showFormError("Job title and company name are required.");
    return;
  }

  if (editingCard) {
    // ── UPDATE existing card ──
    editingCard.querySelector(".card-title").textContent    = title;
    editingCard.querySelector(".card-company").textContent  = company;
    editingCard.querySelector(".card-location").textContent = location + (type ? " · " + type : "");
    editingCard.querySelector(".card-desc").textContent     = desc;
    editingCard = null;

  } else {
    // ── CREATE new card ──
    const card = buildJobCard(title, company, location, type, desc);
    companyHiring.appendChild(card);
  }

  clearForm();
  closeModal();
});

// ─── Single delegated listener for Update + Close buttons ─────

companyHiring.addEventListener("click", (e) => {

  const card = e.target.closest(".company");
  if (!card) return;

  // Close / Delete
  if (e.target.classList.contains("close-btn")) {
    if (confirm("Remove this job post?")) {
      card.remove();
    }
    return;
  }

  // Update / Edit
  if (e.target.classList.contains("update")) {
    editingCard = card;

    // Pre-fill form with existing card data
    jobTitleEl.value    = card.querySelector(".card-title").textContent;
    companyNameEl.value = card.querySelector(".card-company").textContent;
    jobDescEl.value     = card.querySelector(".card-desc").textContent;

    // Split "Mumbai · Full-time" back into location and type
    const locType = card.querySelector(".card-location").textContent.split(" · ");
    locationEl.value = locType[0] || "";
    jobTypeEl.value  = locType[1] || "Full-time";

    openModal();
  }
});

// ─── Helpers ──────────────────────────────────────────────────

function openModal() {
  postCard.style.display = "flex";
}

function closeModal() {
  postCard.style.display = "none";
  clearFormError();
}

function clearForm() {
  jobTitleEl.value    = "";
  companyNameEl.value = "";
  locationEl.value    = "";
  jobDescEl.value     = "";
  jobTypeEl.value     = "Full-time";
}

function showFormError(msg) {
  let err = document.getElementById("formError");
  if (!err) {
    err = document.createElement("p");
    err.id = "formError";
    err.style.color     = "red";
    err.style.fontSize  = "13px";
    err.style.textAlign = "center";
    postJobBtn.before(err);
  }
  err.textContent = msg;
}

function clearFormError() {
  const err = document.getElementById("formError");
  if (err) err.textContent = "";
}

function buildJobCard(title, company, location, type, desc) {
  const card = document.createElement("div");
  card.classList.add("company");

  card.innerHTML = `
    <h4 class="card-company">${company}</h4>
    <p class="card-title"><strong>${title}</strong></p>
    <p class="card-location">${location}${type ? " · " + type : ""}</p>
    <p class="card-desc">${desc}</p>
    <button class="update">Update</button>
    <button class="close-btn">Close</button>
  `;

  return card;
}