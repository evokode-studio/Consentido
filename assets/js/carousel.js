// En tu JS (menu-mobile.js o uno nuevo)
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector(".js-carousel-list");
  const clones = list.innerHTML;
  list.innerHTML += clones; // duplicamos dinámicamente

  let scrollAmount = 0;
  const speed = 1;

  function animate() {
    scrollAmount += speed;
    list.style.transform = `translateX(-${scrollAmount}px)`;

    // Cuando la mitad ya pasó, reiniciamos scroll sin corte
    if (scrollAmount >= list.scrollWidth / 2) {
      scrollAmount = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
});

document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector('.welcome__list');
    const items = Array.from(list.children);

    // Crear contenedor interno
    const listInner = document.createElement('div');
    listInner.classList.add('welcome__list-inner');

    // Añadir todos los items 2 veces (para loop infinito)
    items.forEach(item => {
        listInner.appendChild(item.cloneNode(true)); // Clonado
    });
    items.forEach(item => {
        listInner.appendChild(item); // Original
    });

    // Limpiar y reemplazar
    list.innerHTML = '';
    list.appendChild(listInner);
});
