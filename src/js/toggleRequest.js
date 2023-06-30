const containerQuestions = document.getElementById('cards-question-container')
const containerQuestionsServices = document.getElementById('cards-services-question-container')

function createDataCard(container, data){
  container.innerHTML = data.map(card =>{
    let cardTemplate = `
      <div class="${card.class}" id="${card.id}">
        <div class="header-card d-flex">
          <p class="question-title p-3">${card.title}</p>
          <button onclick="toggleResquest('${card.id}')">
            <i id="icon-airplane-${card.id}" class="bi bi-airplane-engines"></i>
          </button>
        </div>
        <div class="body-card">
          <p class="p-3">${card.response}</p>
        </div>
      </div>`
    return cardTemplate
  }).join("")
}

containerQuestions && createDataCard(containerQuestions, cardList)
containerQuestionsServices && createDataCard(containerQuestionsServices, cardListServices)

const icon = document.getElementById('icon-airplane-card-1')
icon.classList.add('rotateIcon1')

const toggleResquest = (e) =>{
  const cards = containerQuestions 
    ? containerQuestions.children
    : containerQuestionsServices.children

  const nodo = document.getElementById(e)
  Array.from(cards).forEach(c => {
    if(c.classList.contains('open')){
      if(c.id !== e){
        const icon = c.children[0].children[1].children[0]
        c.classList.remove('open')
        icon.classList.remove('rotateIcon1')
        icon.classList.add('rotateIcon2')
      }
    }
  });

  const icon = nodo.children[0].children[1].children[0]

  if(nodo.classList.contains('open')){
    nodo.classList.remove('open')
    icon.classList.remove('rotateIcon1')
    icon.classList.add('rotateIcon2')
  }else{
    nodo.classList.add('open')
    icon.classList.remove('rotateIcon2')
    icon.classList.add('rotateIcon1')
  }
}