document.querySelector('#menu-icon').addEventListener('click', (ev) => {
    const navbar = document.querySelector('#navbar');
    const menuicon = document.querySelector('#menu-icon');
  
    navbar.classList.toggle('active');
  
    if (navbar.classList.contains('active')) {
      menuicon.textContent = '×';
    } else {
      menuicon.textContent = '☰';
      
    }
  });