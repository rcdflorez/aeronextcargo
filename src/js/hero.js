const animationHero = (time, time2, data, key) =>{
  const query = 992
  window.innerWidth < query ? time = time2 : false
  setTimeout(() => {
    const text = document.querySelector(`#${key}`)
    window.innerWidth < query ? text.innerHTML = data : false
    text.classList.add('key-1')
    text.style.color = "#fff"
  }, time);
}



// animationHero(0, 0, "MODELO DE NEGOCIO ÚNICO", "key-1")
// animationHero(1000, 2000, "RENTABILIDAD", "key-2")
// animationHero(2000, 3000, "EXPERIENCIA", "key-3")
// animationHero(3000, 1000, "INNOVACIÓN", "key-4")