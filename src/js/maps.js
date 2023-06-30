
// if(location.pathname === '/OurServices.html'){

//   const imageContainer = document.getElementById('container-map-1');
//   const image = document.getElementById('imagen-map-1');
//   const loupe = document.getElementById('loupe-1');
  
//   imageContainer.addEventListener('mousemove', (e) => {
//     const { offsetX, offsetY } = e;
//     const { width, height } = image.getBoundingClientRect();
//     const xPos = (offsetX / width) * 0;
//     const yPos = (offsetY / height) * 0;
//     loupe.style.left = `${xPos}%`;
//     loupe.style.top = `${yPos}%`;
//     image.style.transform = `translate(-${xPos}%, -${yPos}%) scale(1.4)`;
//     loupe.style.visibility = 'visible';
//   });
  
//   imageContainer.addEventListener('mouseleave', () => {
//     loupe.style.visibility = 'hidden';
//     image.style.transform = 'translate(0, 0) scale(1)';
//   })
  
  
//   const imageContainer2 = document.getElementById('container-map-2');
//   const image2 = document.getElementById('imagen-map-2');
//   const loupe2 = document.getElementById('loupe-2');
  
//   imageContainer2.addEventListener('mousemove', (e) => {
//     const { offsetX, offsetY } = e;
//     const { width, height } = image.getBoundingClientRect();
//     const xPos = (offsetX / width) * 0;
//     const yPos = (offsetY / height) * 0;
//     loupe2.style.left = `${xPos}%`;
//     loupe2.style.top = `${yPos}%`;
//     image2.style.transform = `translate(-${xPos}%, -${yPos}%) scale(1.7)`;
//     loupe2.style.visibility = 'visible';
//   });
  
//   imageContainer2.addEventListener('mouseleave', () => {
//     loupe2.style.visibility = 'hidden';
//     image2.style.transform = 'translate(0, 0) scale(1)';
//   });
// }