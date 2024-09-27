// Referencias a los elementos
const continuarBtn = document.getElementById('continuar');
const preguntaDiv = document.getElementById('pregunta');
const siBtn = document.getElementById('si');
const noBtn = document.getElementById('no');
const poemaDiv = document.getElementById('poema');
const noTeQuieroDiv = document.getElementById('noTeQuiero');
const inicioDiv = document.getElementById('inicio');
const body = document.body;

// Evento al hacer clic en "Continuar"
continuarBtn.addEventListener('click', function() {
    inicioDiv.style.display = 'none';  // Oculta la pantalla de inicio
    preguntaDiv.style.display = 'block';  // Muestra la pregunta
    body.classList.add('fade-bg');  // Activa la animación del fondo
});

// Evento al hacer clic en "Sí"
siBtn.addEventListener('click', function() {
    preguntaDiv.style.display = 'none';  // Oculta la pregunta
    poemaDiv.style.display = 'block';  // Muestra el poema
    body.classList.remove('fade-bg');  // Detiene la animación de fondo
    body.classList.add('poema-bg');  // Aplica el fondo rosa y negro
});

// Evento al hacer clic en "No"
noBtn.addEventListener('click', function() {
    preguntaDiv.style.display = 'none';  // Oculta la pregunta
    noTeQuieroDiv.style.display = 'block';  // Muestra el mensaje triste
});