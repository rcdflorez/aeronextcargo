const boxContainer = document.getElementById('box-container')
if (boxContainer) {
  let boxes = [...boxContainer.children] 
  
  boxes.forEach(node => {
    node.addEventListener('click', boxData)
  });
  
  function boxData (e){
    clearBoxes()
    activeTarget(e.composedPath())
  }
  
  const clearBoxes = () =>{
    boxes.forEach(box => {
      box.classList.remove('box-active')
    });
  }
  
  const activeTarget = (target) =>{
    target.forEach(li => {
      if(li.nodeName === "LI"){
        li.classList.add('box-active')
        const liData = li.children[1].children[0].dataset.text
  
        switch (liData) {
          case "cargo":
            showDataService(cargoData)
            break;
  
          case "no-cargo":
            showDataService(noCargoData)
            break;
  
          case "list-airports":
            showDataService(airportsList)
            break;
  
          case "jetBlue":
            showDataService(jetBlueData)
            break;
        }
  
        
      }
    });
  }
  const showDataService = (dataBox) =>{
    const box = document.getElementById('box-cargo-data')
    box.innerHTML = dataBox
  }
}