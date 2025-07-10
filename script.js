// script.js
 
// Acordeones desplegables con animación
const acordeonBtns = document.querySelectorAll('.acordeon-btn');
acordeonBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    content.classList.toggle('expandido');
  });
});

// Menú móvil toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Botón scroll arriba con suavidad
const scrollBtn = document.getElementById('btn-scroll');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validación de formulario amigable
const form = document.getElementById('form-contacto');
form.addEventListener('submit', function (e) {
  const { nombre, email, telefono, mensaje } = form;
  let errores = [];

  if (!nombre.value.trim()) errores.push('Nombre');
  if (!email.value.trim()) errores.push('Email');
  if (!telefono.value.trim()) errores.push('Teléfono');
  if (!mensaje.value.trim()) errores.push('Mensaje');

  if (errores.length > 0) {
    e.preventDefault();
    alert('Por favor, completa los siguientes campos: ' + errores.join(', '));
  }
});

// Animaciones al hacer scroll con transición
const animables = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animado');
    }
  });
}, {
  threshold: 0.1
});
animables.forEach(el => observer.observe(el));

// Carrusel automático con efecto de transición suave
const carrusel = document.querySelector('.carrusel');
let scrollX = 0;
setInterval(() => {
  scrollX += carrusel.offsetWidth;
  if (scrollX >= carrusel.scrollWidth) scrollX = 0;
  carrusel.scrollTo({ left: scrollX, behavior: 'smooth' });
}, 5000);

// Carga del mapa de Google Maps
function initMap() {
  const ubicacion = { lat: 35.2923, lng: -2.9381 };
  const mapa = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 15,
    center: ubicacion,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#e0e0e0" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#4a4a4a" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#c0c0c0" }] }
    ]
  });
  new google.maps.Marker({ position: ubicacion, map: mapa });
}

window.initMap = initMap;

  let indice = 0;
  const testimonios = document.querySelectorAll(".carrusel-item");

  function mostrarSiguienteTestimonio() {
    testimonios[indice].classList.remove("activo");
    indice = (indice + 1) % testimonios.length;
    testimonios[indice].classList.add("activo");
  }

  setInterval(mostrarSiguienteTestimonio, 4000); // Cambia cada 4 segundos

  document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let index = 0;

    function showImage(i) {
      images.forEach(img => img.classList.remove('active'));
      images[i].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
      index = (index === 0) ? images.length - 1 : index - 1;
      showImage(index);
    });

    nextBtn.addEventListener('click', () => {
      index = (index === images.length - 1) ? 0 : index + 1;
      showImage(index);
    });

    showImage(index); // Inicializa mostrando la primera imagen
  });
