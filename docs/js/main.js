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