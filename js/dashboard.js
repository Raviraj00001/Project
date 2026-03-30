// const heading = document.getElementById('heading1');
// heading.addEventListener('click', () => {
//     alert('Welcome to Your Dashboard!');
// });
// heading.addEventListener('mouseover', () => {
//     heading.style.color = '#ff6600';
// });
// heading.addEventListener('mouseout', () => {
//     heading.style.color = '';
// });
const greetings = [
  "Welcome to Your Dashboard 👋",
  "Find Your Dream Job 🚀",
  "Track Your Applications 📊",
  "New Opportunities Await ✨"
];

let greetIndex = 0;
const heading = document.getElementById("heading1");

/* initial state */
heading.classList.add("fade-in-down");

setInterval(() => {

  /* old heading goes up */
  heading.classList.remove("fade-in-down");
  heading.classList.add("fade-out-up");

  setTimeout(() => {

    /* prepare new heading from bottom */
    greetIndex = (greetIndex + 1) % greetings.length;
    heading.textContent = greetings[greetIndex];

    heading.classList.remove("fade-out-up");
    heading.classList.add("hidden-down");

    /* force reflow (important for smooth animation) */
    heading.offsetHeight;

    /* new heading comes up from bottom */
    heading.classList.remove("hidden-down");
    heading.classList.add("fade-in-down");

  }, 700); // match CSS duration

}, 3000);


// const para = document.getElementById('para1');
// const descriptions = [
//     "Here you can manage your job search, view saved jobs, track applications, and more.",
//     "Explore thousands of job listings tailored to your skills and preferences.",   
//     "Stay updated with the latest job openings from top companies.",
//     "Get personalized job recommendations just for you."
//   ];
// let descIndex = 0;
// Job Database

let jobs = [

{
title:"Software Engineer",
company:"Tech Solutions",
location:"New York"
},

{
title:"Data Analyst",
company:"DataCorp",
location:"San Francisco"
},

{
title:"Frontend Developer",
company:"Google",
location:"Delhi"
},

{
title:"Backend Developer",
company:"Amazon",
location:"Mumbai"
}

];


document.getElementById("jobSearchForm")
.addEventListener("submit", function(e){

e.preventDefault();

let input =
document.getElementById("searchInput")
.value.toLowerCase().trim();

let resultsDiv =
document.getElementById("searchResults");

resultsDiv.innerHTML="";


/* Empty Input */

if(input === ""){
alert("Please fill the search field");
return;
}


/* Filter Jobs */

let filtered = jobs.filter(job =>

job.title.toLowerCase().includes(input) ||
job.company.toLowerCase().includes(input) ||
job.location.toLowerCase().includes(input)

);


/* No Result */

if(filtered.length === 0){
alert("Result Not Found");
return;
}



/* ✅ Dynamic Heading */

let heading=document.createElement("h2");
heading.innerText="Search Results";

resultsDiv.appendChild(heading);



/* Dynamic Job Container */

let container=document.createElement("div");
container.classList.add("job-cards");

resultsDiv.appendChild(container);



/* Dynamic Cards */

filtered.forEach(job =>{

let card=document.createElement("div");

card.classList.add("job-card");

card.innerHTML=`

<h3>${job.title}</h3>
<p>Company: ${job.company}</p>
<p>Location: ${job.location}</p>
<button class="apply-button">
Apply Now
</button>

`;

container.appendChild(card);

});


/* Scroll */

resultsDiv.scrollIntoView({
behavior:"smooth"
});

});
// ─── Dynamic Stat Cards ───────────────────────────────────────

// This is your local "database" until the backend is ready.
// Later, replace this with a fetch() call to your Spring Boot API.

const currentUser = "Ravi"; // Later: read from localStorage after login

const userStats = {
  "Ravi": {
    appliedJobs:   5,
    savedJobs:     12,
    profileViews:  38,
    interviewCalls: 2
  }
};

function loadStats() {
  const stats = userStats[currentUser];

  if (!stats) return; // no data found, leave as-is

  animateCount("no-of-jobs",          stats.appliedJobs);
  animateCount("no-of-saved",         stats.savedJobs);
  animateCount("no-of-profile-views", stats.profileViews);
  animateCount("no-of-interviews",    stats.interviewCalls);
}

// Counts up from 0 to the target number with a smooth animation
function animateCount(elementId, target) {
  const el = document.getElementById(elementId);
  if (!el) return;

  let current = 0;
  const step = Math.ceil(target / 40); // 40 frames to reach target
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 30);
}

// ─── Load on page ready ───────────────────────────────────────
loadStats();