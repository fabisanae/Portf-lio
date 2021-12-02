'use strict'

let projects = [
  {
    id: 1,
    urlImage:"img/wsat demo.png",
    urlGitHub: "https://github.com/fabisanae/Site-comercial-wsat",
    urlLink: "https://fabisanae.github.io/Site-comercial-wsat/",
    name: "WSat",
    language: "HTML, CSS, SASS, Boostrap, HTML, Javascript",
    description: "É um site para uma empresa que fornece serviços de Segurança Eletrônica."
  },
  {
    id: 2,
    urlImage: "img/caravanDemo.png",
    urlGitHub: "https://github.com/fabisanae/Site-caravan",
    urlLink: "https://fabisanae.github.io/Site-caravan/",
    name: "Caravan",
    language: "HTML, CSS, Bootstrap, SASS, Javascript",
    description: "O site foi realizado na proposta de um projeto do Origamid no curso de Bootstrap. O objetivo foi criar um Site, adicionando novas funcionalidades e a criatividade utilizando o Bootstrap."
  }, 
 
  
]

function listAllProjects() {
  let card = document.getElementById("card-project");
  
  projects.forEach(res => {  
    let iconGithub, iconOpen;
    
    if (res.urlGitHub) {
      iconGithub =
      `<a href="${res.urlGitHub}" alt="Github" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="app-icon--github">
        <path class="path" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 
        6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 
        0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 
        6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      `
    } else {
      iconGithub = ""
    }

    if(res.urlLink) {
      iconOpen =
      `<a href="${res.urlLink}" alt="Abrir" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="app-icon--open">
          <path class="path" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline class="path" points="15 3 21 3 21 9"></polyline>
          <line class="path" x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>`
    } else {
      iconOpen = ""
    }

    const cardHTML = 
    `<div class="card">
    <a href="${res.urlLink}" alt="Abrir" target="_blank"><img src="${res.urlImage}" alt="${res.name}" class="card-image"/>
      <div class="card-content">
        <div class="card-content--title">
          <h3 class="card-title">${res.name}</h3>

          <div class="app-icon">
          `+ iconGithub +`

        
          </div>
        </div>

        <p class="card-text">${res.description}</p>

        <p class="card-subtitle">${res.language}</p>
      </div>
    </div>`

    // <a class="btn-primary" href="details.html?id=${res.id}" style="margin-top: 1.5rem;">Ver detalhes</a>

    const ele = document.createElement('div');
    ele.innerHTML = cardHTML;

    card.appendChild(ele.firstChild);
  })
}

function details() {
  const id = location.search.split('id=')[1]

  projects.forEach(result => {
    if(result.id === parseInt(id)) {
      let title = document.getElementById('title');
      let description = document.getElementById('description')

      title.innerHTML = result.name;
      description.innerHTML = result.description;
    }
  })
}

function listAllTechnology() {
  let tech = ["HTML", "CSS" ,"Bootstrap", "JavaScript", "Git", "GitHub","SASS"];

  let card = document.getElementById("card-skills");

  tech.forEach(name => {
    const cardHTML = 
    `<div class="card">
      <div class="card-content">
        <div class="card-content--title" style="justify-content: flex-start;">
          <img class="verified-color" height="24" weight="24" alt="Verificado" src="https://img.icons8.com/ios-glyphs/30/000000/verified-account--v2.png"/>
          &nbsp;  &nbsp;
          <h4 class="card-title"> 
            ${name} 
          </h4>
        <div>
      </div>
    </div>`

    const element = document.createElement('div');
    element.innerHTML = cardHTML;
  
    card.appendChild(element.firstChild);
  })

}

listAllTechnology();

