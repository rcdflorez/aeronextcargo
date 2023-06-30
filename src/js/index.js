document.addEventListener("DOMContentLoaded", () =>{
  const btnDrop = document.getElementById('drop-main')
  if(btnDrop){
    btnDrop.addEventListener('mouseover', (e) =>{
      $('.dropdown-toggle').dropdown('show')
    })
    btnDrop.addEventListener('mouseleave', (e) =>{
      $('.dropdown-toggle').dropdown('hide')
    })
  }

  const copyDate = document.getElementById('copyDate ')
  const year = new Date().getFullYear()
  if(copyDate) copyDate.children[0].innerHTML = year

})

