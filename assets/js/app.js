// Obtiene las secciones
var secciones = document.querySelectorAll('.seccion');

// Obtiene los enlaces del menú lateral
var menuLinks = document.querySelectorAll('.sidebar a');

// Añade un controlador de eventos al hacer scroll
window.addEventListener('scroll', function() {
  // Obtiene la posición del scroll
  var scrollPosition = window.scrollY;

  // Recorre las secciones y verifica si el scroll está en una sección
  secciones.forEach(function(seccion) {
    var seccionTop = seccion.offsetTop - 50; // Ajusta el valor para tomar en cuenta el espacio de margen
    var seccionId = seccion.getAttribute('id');
    var link = document.querySelector('.sidebar a[href="#' + seccionId + '"]');

    if (scrollPosition >= seccionTop) {
      // Remueve la clase 'active' de todos los enlaces
      menuLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      // Agrega la clase 'active' al enlace correspondiente a la sección activa
      link.classList.add('active');
    }
  });
});

const toggleButton = document.getElementById('toggleButton');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

