const nodo = document.getElementById('carouser-handler')
if(nodo){
  const tbnHandlerDesk = 6
  const tbnHandlerMobile = 17
  //const avatarDefault = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"

  const dataDesktop = [
    [
      {
        name: 'Patricio Sepúlveda',
        cargo: 'Founder & CEO',
        photo: './img/team1.png',
      },
      {
        name: 'Camila Restrepo',
        cargo: 'Co-founder/ Controller/COO',
        photo: './img/team3.png',
      },
      {
        name: 'Christian Rendel',
        cargo: 'Planning Director',
        photo: './img/team2.jpg',
      },
    ],
    [
      {
        name: 'Roberto Ilanes',
        cargo: 'Head of Operation',
        photo: './img/team5.png',
      },
      {
        name: 'Frank Jerez',
        cargo: 'Operational Control Center Manager',
        photo: "./img/team17.png",
      },
      {
        name: 'Ignacio Gómez',
        cargo: 'Contract & Compliance Manager',
        photo: './img/team4.png',
      },
    ],
    [
      {
        name: 'Angela María Angarita',
        cargo: 'Business Analyst',
        photo: './img/team7.png',
      },
      {
        name: 'Luisa Flórez G',
        cargo: 'Quality Manager',
        photo: './img/team6.png',
      },
      {
        name: 'Inalvis Santana',
        cargo: 'Accountant',
        photo: './img/team9.png',
      },
    ],
    [
      {
        name: 'Mohamed Abdelaziz',
        cargo: 'Finance Manager Reconciliations',
        photo: './img/team8.png',
      },
      {
        name: 'Carla Schoo Lastra',
        cargo: 'Revenue & Commercial Manager',
        photo: './img/team12.jpg',
      },
      {
        name: 'Paola García',
        cargo: 'Accounting Assistant',
        photo: './img/team10.png',
      },
    ],
    [
      {
        name: 'Thais Bordarampe',
        cargo: 'Claim Analyst',
        photo: './img/team11.png',
      },
      {
        name: 'Soledad Espinosa',
        cargo: 'Operations Controller',
        photo: './img/team13.png',
      },
      {
        name: 'Leonardo Chifelle',
        cargo: 'Operations Controller',
        photo: './img/team14.png',
      },
    ],
    [
      {
        name: 'Vicente Lobos',
        cargo: 'Operations Controller',
        photo: "./img/team16.png",
      },
      {
        name: 'Juan Carlos Rodríguez',
        cargo: 'Operations Controller',
        photo: './img/team15.png',
      },
    ],
    
  ]
  
  
  dataDesktop.forEach((list, i )=> {
    const container = 
      `<div class="carousel-item">
        <div class="d-lg-flex" id=item-${i}>
  
        </div>
      </div>`
    
    nodo.innerHTML += container
    i == 0 ? nodo.firstElementChild.classList.add('active') : false
  
    list.forEach(user => {
      const userNodo = document.getElementById(`item-${i}`)
      
      const userContainer = 
        `<div class="employee">
          <div class="hexagon-container">
            <div class="hexagon">
              <i class="bi bi-hexagon-fill">
                <div class="hexagon-content">
                  <img src="${user.photo}" alt="img">
                </div>
              </i>
            </div>
          </div>
          <div class="data-employee text-center">
            <p class="employee-name">${user.name}</p>
            <p class="employment-name">${user.cargo}</p>
          </div>
        </div>`
        user.name ? userNodo.innerHTML += userContainer : false
    });
  });
}