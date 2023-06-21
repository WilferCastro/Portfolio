const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

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

function scroll_animations() {
  // var allow_on_mobile = !0;
  // if (typeof config_scroll_animation_on_mobile !== "undefined") allow_on_mobile = config_scroll_animation_on_mobile;
  // if (allow_on_mobile == !1 && is_mobile_device) return;
  var defaults = {
      duration: 1.2,
      ease: "power4.out",
      animation: "fade_from_bottom",
      once: !1,
  };
  gsap.utils.toArray(".scroll-animation").forEach(function (box) {
      var gsap_obj = {};
      var settings = {
          // ease: box.dataset.animationEase || defaults.ease,
          duration: box.dataset.animationDuration || defaults.duration,
      };
      var animations = {
          fade_from_bottom: {
              y: 180,
              opacity: 0,
          },
          fade_from_top: {
              y: -180,
              opacity: 0,
          },
          fade_from_left: {
              x: -180,
              opacity: 0,
          },
          fade_from_right: {
              x: 180,
              opacity: 0,
          },
          fade_in: {
              opacity: 0,
          },
          rotate_up: {
              y: 180,
              rotation: 10,
              opacity: 0,
          },
      };
      var scroll_trigger = {
          scrollTrigger: {
              trigger: box,
              once: defaults.once,
              start: "top bottom+=20%",
              // start: "top bottom+=5%",
              toggleActions: "play none none reverse",
              markers: !1,
          },
      };
      jQuery.extend(gsap_obj, settings);
      jQuery.extend(gsap_obj, animations[box.dataset.animation || defaults.animation]);
      jQuery.extend(gsap_obj, scroll_trigger);
      gsap.from(box, gsap_obj);
  });
}
scroll_animations();

