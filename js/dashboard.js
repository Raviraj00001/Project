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