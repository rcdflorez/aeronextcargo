// import i18next from 'i18next';
// import en from '../locales/en.js'
// import es from '../locales/es.js'

// const btnLanguage = document.getElementById('language')

// async function initTranslate(){
//   // console.log(navigator.language) 
  

//   //localStorage functions and assignment to values to btnLanguage
//   const langEs = () =>{
//     localStorage.setItem('lang', "es")
//     btnLanguage.value = "es"
//   }
//   const langEn = () =>{
//     localStorage.setItem('lang', "en")
//     btnLanguage.value = "en"
//   }

//   //Navigator language Validation and dropdown init
//   if(navigator.language.includes('es')){
//     btnLanguage.children[0].innerHTML = 'Es'
//     btnLanguage.children[0].value = "es"
    
//     btnLanguage.children[1].innerHTML = "En"
//     btnLanguage.children[1].value = "en"
//   }else{
//     btnLanguage.children[0].innerHTML = 'En'
//     btnLanguage.children[0].value = "en"

//     btnLanguage.children[1].innerHTML = "Es"
//     btnLanguage.children[1].value = "es"
//   }

//   // dropdown listener(change )
//   btnLanguage.addEventListener('change', e =>{
//     if(btnLanguage.value === "es"){
//       langEs()
//       location.reload()
//     }
//     if(btnLanguage.value === "en"){
//       langEn()
//       location.reload()
//     }
//   })

//   //saving btnLanguage.value
//   if(localStorage.getItem('lang') === null) localStorage.setItem('lang', btnLanguage.value)
//   if(localStorage.getItem('lang') === "es") langEs()
//   if(localStorage.getItem('lang') === "en") langEn()
  
//   //init i18next library
//   await i18next.init({
//     lng: btnLanguage.value,
//     debug: false,
//     resources: {
//       en, es
//     }
//   });
  
//   const datas = document.querySelectorAll('[data-translate]')
//   datas.forEach(item => {
//     if(item.hasAttribute('placeholder')){
//       item.setAttribute('placeholder', `${i18next.t(item.dataset.translate)}`)
//     }else{
//       item.innerHTML = i18next.t(item.dataset.translate)
//     }
//   })
// }

// initTranslate()