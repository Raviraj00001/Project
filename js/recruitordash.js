// let post=document.getElementById("post");
// post.addEventListener("click",function(){
//     window.location.href="postjob.html";
// })
// let job=document.getElementById("job-title");
// let company=document.getElementById("company-name");
// let location=document.getElementById("location");
// let salary=document.getElementById("salary");
// let description=document.getElementById("job-description");
// let submit=document.getElementById("submit");
// let cancel=document.getElementById("cancel");
// let companypost=document.getElementById("company-hiring");
// submit.addEventListener("click",function(event){
//     event.preventDefault();
//     alert("Job posted successfully!");
//     let postcard=document.createElement("div");
//     postcard.innerHTML=`<h3>${job.value}</h3><p>${company.value}</p><p>${location.value}</p><p>${salary.value}</p><p>${description.value}</p>`;
//     companypost.appendChild(postcard);
    
// })
// cancel.addEventListener("click",function(){
//     window.location.href="index.html";
// })

let postBtn = document.getElementById("post");
let postCard = document.getElementById("postCard");
let closeCard = document.getElementById("closeCard");
let postJobBtn = document.getElementById("postJobBtn");

let companyHiring = document.getElementById("company-hiring");

// Form fields
let jobTitle = document.getElementById("jobTitle");
let companyName = document.getElementById("companyName");
let locationField = document.getElementById("location");
let jobType = document.getElementById("jobType");
let jobDesc = document.getElementById("jobDesc");


// 🔹 Show form
postBtn.addEventListener("click", function () {
    postCard.style.display = "flex";
});

// 🔹 Hide form
closeCard.addEventListener("click", function () {
    postCard.style.display = "none";
});

// 🔹 Create Job Card
postJobBtn.addEventListener("click", function () {

    if(jobTitle.value === "" || companyName.value === ""){
        alert("Please fill required fields");
        return;
    }

    let companyDiv = document.createElement("div");
    companyDiv.classList.add("company");

    companyDiv.innerHTML = `
        <h4>${companyName.value}</h4>
        <p><strong>${jobTitle.value}</strong></p>
        <p>${locationField.value} | ${jobType.value}</p>
        <p>${jobDesc.value}</p>
        <button class="update">Update</button>
        <button class="close-btn">Close</button>
    `;

    companyHiring.appendChild(companyDiv);

    // Clear form
    jobTitle.value = "";
    companyName.value = "";
    locationField.value = "";
    jobDesc.value = "";

    postCard.style.display = "none";
});
companyHiring.addEventListener("click", function(e) {

    if (e.target.classList.contains("close-btn")) {
        let card = e.target.parentElement;
        card.remove();
    }

});
companyHiring.addEventListener("click", function(e) {

    if (e.target.classList.contains("update")) {

        let card = e.target.parentElement;

        let companyName = card.querySelector("h4").innerText;
        let jobTitle = card.querySelector("p").innerText;

        // Open modal
        postCard.style.display = "flex";

        // Fill existing data in form
        document.getElementById("companyName").value = companyName;
        document.getElementById("jobTitle").value = jobTitle;

        // Remove old card
        card.remove();
    }

});
