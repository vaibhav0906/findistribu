(function () {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleNavBg = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-sm', 'bg-dark', 'bg-gradient');
    } else {
      navbar.classList.remove('shadow-sm', 'bg-dark', 'bg-gradient');
    }
  };

  const setActiveLink = () => {
    const fromTop = window.scrollY + 120;
    navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute('href'));
      if (!section) return;
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  toggleNavBg();
  setActiveLink();
  window.addEventListener('scroll', () => {
    toggleNavBg();
    setActiveLink();
  });
})();
