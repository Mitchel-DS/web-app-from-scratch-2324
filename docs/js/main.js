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
const name = document.querySelector('.aboutme p:nth-child(2)');
const description = document.querySelector('.aboutme p:nth-child(3)');
const favoritePet = document.querySelector('.aboutme p:nth-child(4)');
const favoriteHobby = document.querySelector('.aboutme p:nth-child(5)');
const github = document.querySelector('.aboutme p:nth-child(6)');

// Fetch data from json file
async function fetchdata() {

    const response = await fetch("./app.json");
    const data = await response.json();

    name.innerHTML += data.name;
    description.innerHTML += data.description;
    favoritePet.innerHTML += data.favoritePets[1];
    favoriteHobby.innerHTML += data.hobbys[2];
    github.innerHTML += data.github;
}

fetchdata();