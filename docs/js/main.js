console.log('main.js is connected');
const headerNav = document.querySelector('header');
const topButton = document.querySelector('.test');

// Add scroll event to header
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);

    if (window.scrollY > 10) { // checks how far the user has scrolled
        headerNav.classList.add('scroll');
        topButton.style.display = "flex";
    } else {
        headerNav.classList.remove('scroll');
        topButton.style.display = "none";
    }
});

topButton.addEventListener('click', backTop);  

function backTop() {
    document.documentElement.scrollTop = 0; 
}

// json variables
const username = document.querySelector('.aboutme p:nth-child(2)');
const description = document.querySelector('.aboutme p:nth-child(3)');
const favoritePet = document.querySelector('.aboutme p:nth-child(4)');
const favoriteHobby = document.querySelector('.aboutme p:nth-child(5)');
const github = document.querySelector('.aboutme p:nth-child(6)');

// Fetch data from json file
async function fetchdata() {

    const response = await fetch("./app.json");
    const data = await response.json();

    username.innerHTML += data.name;
    description.innerHTML += data.description;
    favoritePet.innerHTML += data.favoritePets[1];
    favoriteHobby.innerHTML += data.hobbys[2];
    github.innerHTML += data.github;
}

async function fetchProjects() {
    try {
        const res = await fetch("https://api.github.com/users/Mitchel-DS/repos");
        const data = await res.json();
        console.log(data);

        const projects = document.querySelector('.showcase ul');
        data.forEach(project => {
        const projectDiv = document.createElement('li');
        projectDiv.classList.add('project');

        const projectName = document.createElement('h3');
        projectName.innerHTML = project.name;
        projectDiv.appendChild(projectName);

        const projectDesc = document.createElement('p');
        projectDesc.innerHTML = project.description;
        projectDiv.appendChild(projectDesc);

        const projectLink = document.createElement('a');
        projectLink.innerHTML = "View project";
        projectLink.href = project.html_url;
        projectLink.target = "_blank";
        projectDiv.appendChild(projectLink);

        projects.appendChild(projectDiv);
    });
    } catch (error) {
        console.log(error);
    }


    
}

fetchdata();
fetchProjects();