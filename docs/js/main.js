console.log('main.js is connected'); // checks if the file is connected

const headerNav = document.querySelector('header');

const topButton = document.querySelector('.test');

const showcase = document.querySelector('ul.showcase');
const showcaseLoader = document.querySelector('ul.showcaseLoad');

const nav = document.querySelector('header nav ul');
const navMenu = document.querySelector('header nav .menu');
const navItem = document.querySelectorAll('header nav ul li a');

// Add event listener to the nav menu
window.onload = function () {
    if (window.innerWidth <= 768) { // checks if the window is mobile
        nav.style.display = 'none'; // hides the nav bar
    } else {
        nav.style.display = 'flex'; // shows the nav bar
    }
};

// responsive nav menu
navMenu.addEventListener('click', () => {
    if (nav.style.display === 'none') { // checks if the nav bar is hidden
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});

// loop through the nav items and add event listener to each
for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', () => {
        // Your code here
        if (window.innerWidth <= 768) { // checks if the window is mobile
            nav.style.display = 'none'; // hides the nav menu when clicking on a link
        } else {
            nav.style.display = 'flex';
        }
    });
}

// Add scroll event to header
window.addEventListener('scroll', () => {
    if (window.scrollY > 10 && window.innerWidth >= 768) { // checks how far the user has scrolled and if its NOT  mobile
        headerNav.classList.add('scroll'); // adds class to change color of nav
        topButton.style.display = "flex"; // shows the back to top button
    } else if (window.scrollY > 10 && window.innerWidth <= 768) { // if it is mobile only the button will work
        topButton.style.display = "flex";
    } else {
        headerNav.classList.remove('scroll');
        topButton.style.display = "none";
    }
});

function backTop() {
    document.documentElement.scrollTop = 0; // brings the user to the top of the page
    if (document.documentElement.scrollTop === 0) { // checks if the user is at the top of the page
        topButton.classList.remove('topClicked'); // removes back to top button
    } else {
        topButton.classList.add('topClicked');
    }
}

topButton.addEventListener('click', backTop);

// json variables
const fullName = document.querySelector('.aboutme p:nth-child(1)');
const age = document.querySelector('.aboutme p:nth-child(2)');
const city = document.querySelector('.aboutme p:nth-child(3)');
const hobbies = document.querySelector('.aboutme p:nth-child(4)');
const favoriteAnimal = document.querySelector('.aboutme p:nth-child(5)');
const bio = document.querySelector('.aboutme p:nth-child(6)');


// Fetch data from json file
async function fetchdata() {

    const response = await fetch("./info.json"); // fetches the json file
    const data = await response.json();

    fullName.innerHTML += data.firstName + " "; // adds the data to the html
    fullName.innerHTML += data.lastName + ".";
    age.innerHTML += data.age;
    city.innerHTML += data.city + ".";
    hobbies.innerHTML += data.hobbies[0] + ", " + data.hobbies[1] + ", " + data.hobbies[2] + ".";
    favoriteAnimal.innerHTML += data.favouriteAnimal + ".";
    bio.innerHTML += data.bio;
}

// Fetch projects from github rest api
async function fetchProjects() {
    try {
        const res = await fetch("https://api.github.com/users/Mitchel-DS/repos"); // fetches repos from github
        const data = await res.json();

        showcaseLoader.style.display = "none"; // hides the skeleton loader
        showcase.style.display = "flex"; // shows the project cards

        const projects = document.querySelector('.showcase ul'); // selects the ul to append the projects to
        data.forEach(project => { // loops through the projects
            console.log(project.topics);
            const projectContainer = document.createElement('li');
            projectContainer.classList.add('project');

            const projectName = document.createElement('h3');
            projectName.innerHTML = project.name;
            projectContainer.appendChild(projectName);

            const projectDesc = document.createElement('p');
            projectDesc.innerHTML = project.description;
            projectContainer.appendChild(projectDesc);

            const projectLink = document.createElement('a');
            projectLink.innerHTML = "View project";
            projectLink.href = project.html_url;
            projectLink.target = "_blank"; // opens the link in a new tab
            projectContainer.appendChild(projectLink);

            projects.appendChild(projectContainer); // appends the project to the ul
        });
    } catch (error) {
        console.log(error);
        showcaseLoader.style.display = "flex"; // shows the skeleton loader
        showcase.style.display = "none"; // hides the project cards
    }
}

fetchdata();
fetchProjects();