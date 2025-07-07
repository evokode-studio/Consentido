document.addEventListener('DOMContentLoaded', () => {
  // SERVICES
  const section = document.querySelector('.layout__services');
  const serviceItems = document.querySelectorAll('.services__info');

  const servicesObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        serviceItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate');
          }, index * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (section) {
    servicesObserver.observe(section);
  }

  // TITULOS
  const titlesObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in-section').forEach(section => {
    titlesObserver.observe(section);
  });

  // FOOTER
  const footerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("footer-animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".footer__top, .footer__bottom").forEach(el => {
    el.classList.add("pre-animate");
    footerObserver.observe(el);
  });

  // PROCESS
  const processCards = document.querySelectorAll('.process__card');

  const processObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const visibleCards = [...processCards];
        visibleCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('is-visible');
          }, index * 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const processSection = document.querySelector('.layout__process');
  if (processSection) {
    processObserver.observe(processSection);
  }
});
