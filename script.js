
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');
  const overlay = document.getElementById('overlay');

  function toggleMenu() {
    menuList.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Закрываем меню при клике на оверлей
  overlay.addEventListener('click', () => {
    menuList.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Закрываем меню при клике на пункт меню
  menuList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuList.classList.remove('active');
      overlay.classList.remove('active');
    });
  });


