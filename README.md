# Web App From Scratch @cmda-minor-web 2023 - 2024

![banner](./docs/assets/images/banner.png)

## Introduction

In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API, manipulated and finally shown in the UI of the App. You will learn to apply interface principles when building and testing the interface. With the gained knowsledge you will be able to build interactive prototypes, based on a user story and real data. Also you will gain a better understanding of how API's, frameworks and libraries work.

## Live demo

Check out the live demo [here.](https://mitchel-ds.github.io/web-app-from-scratch-2324/)

## Log

![Home](/docs/assets/images/home.png)
![Showcase](/docs/assets/images/showcase.png)
![Aboutme](/docs/assets/images/aboutme.png)

## Github REST API 

```js
async function fetchProjects() {
    try {
        const res = await fetch("https://api.github.com/users/Mitchel-DS/repos"); // fetches repos from github
        const data = await res.json();
        console.log(data);

        showcaseLoader.style.display = "none"; // hides the skeleton loader
        showcase.style.display = "flex"; // shows the project cards

        const projects = document.querySelector('.showcase ul'); // selects the ul to append the projects to
        data.forEach(project => { // loops through the projects
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
```

## Features checklist

## Sources
