

let jobs = [
    { id: 1, title: "Software Engineer", company: "TechCorp", location: "San Francisco" },
    { id: 2, title: "Product Manager", company: "InnovateX", location: "New York" },
    { id: 3, title: "UX Designer", company: "DesignWorks", location: "Remote" },
    { id: 4, title: "Mobile App Developer", company: "Appify", location: "London" },
    { id: 5, title: "Web Developer", company: "WebSolutions", location: "Berlin" },
    { id: 6, title: "Data Scientist", company: "DataGeniuses", location: "Austin" },
    { id: 7, title: "Full Stack Developer", company: "CodeCrafters", location: "Toronto" },
    { id: 8, title: "Frontend Developer", company: "FrontendPro", location: "Remote" },
    { id: 9, title: "Backend Developer", company: "BackTech", location: "Chicago" },
   
];
async function fetchJobs() {
    try {
        const response = await fetch('http://localhost:5000/api/jobs');
        const data = await response.json();
        jobs = data;
        displayJobs();
    } catch (err) {
        console.error('Error fetching jobs:', err);
    }
}
function displayJobs() {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = '';

    jobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job-item');
        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
        `;
        jobDiv.onclick = () => viewJobDetails(job.id);
        jobList.appendChild(jobDiv);
    });
}

function viewJobDetails(jobId) {
    alert(`View details for job ${jobId}`);
}

function searchJobs() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery) || job.location.toLowerCase().includes(searchQuery)
    );
    jobs = filteredJobs;
    displayJobs();
}

document.addEventListener('DOMContentLoaded', displayJobs);

