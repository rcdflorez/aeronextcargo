const ulNode = document.querySelectorAll('a[data-nav]')


ulNode.forEach(a => {
  a.addEventListener('click', () =>{
    scrollLocation(a.dataset.nav);
  })
});

function scrollLocation(id){
  const location = document.getElementById(id)
  if(location){
    let addOffset = id === "airports" ? 180 : 130
    window.location.hash = id
    scroll(0, location.offsetTop - addOffset)
  }else{
    if(id !== 'services') 
      window.location.href = `${window.location.origin}#${id}`
  }
}