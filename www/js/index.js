function cambiarVista(nombreVista) {
    // 1. Obtener todas las secciones con la clase .view
    const vistas = document.querySelectorAll('.view');

    // 2. Ocultar todas las vistas y quitar la clase 'active'
    vistas.forEach(vista => {
        vista.style.display = 'none';
        vista.classList.remove('active');
    });

    // 3. Mostrar únicamente la vista seleccionada
    const vistaActiva = document.getElementById(`vista-${nombreVista}`);
    if (vistaActiva) {
        vistaActiva.style.display = 'block';
        vistaActiva.classList.add('active');
    }
}

// 1. Función para guardar los datos en localStorage
function guardarPerfil() {
    const nombre = document.getElementById('input-nombre').value;
    const meta = document.getElementById('input-meta').value;

    // Validar que no estén vacíos
    if (nombre.trim() === '' || meta.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Guardar en la memoria local del navegador/dispositivo
    localStorage.setItem('eco_nombre', nombre);
    localStorage.setItem('eco_meta', meta);

    // Mostrar mensaje de éxito temporal
    const mensaje = document.getElementById('mensaje-guardado');
    mensaje.textContent = '¡Perfil y metas guardados con éxito! 🌿';

    setTimeout(() => {
        mensaje.textContent = '';
    }, 3000);
}

// 2. Función para cargar los datos guardados al iniciar la app
function cargarPerfil() {
    const nombreGuardado = localStorage.getItem('eco_nombre');
    const metaGuardada = localStorage.getItem('eco_meta');

    if (nombreGuardado) {
        document.getElementById('input-nombre').value = nombreGuardado;
    }
    if (metaGuardada) {
        document.getElementById('input-meta').value = metaGuardada;
    }
}

// Ejecutar la carga de datos apenas cargue la página
window.onload = function () {
    cargarPerfil();
};

// Función para calcular el impacto de CO2 evitado
function calcularImpacto() {
    const botellas = parseFloat(document.getElementById('input-botellas').value) || 0;
    const kmBici = parseFloat(document.getElementById('input-km-bici').value) || 0;

    // Fórmulas estimadas de impacto ambiental:
    // - Reciclar 1 botella evita aprox. 0.08 kg de CO2
    // - Recorrer 1 km en bici en vez de auto evita aprox. 0.21 kg de CO2
    const co2Botellas = botellas * 0.08;
    const co2Bici = kmBici * 0.21;
    const totalCo2Evitado = (co2Botellas + co2Bici).toFixed(2);

    // Mostrar el contenedor de resultados
    const contenedorResultado = document.getElementById('resultado-calculadora');
    const textoCo2 = document.getElementById('texto-co2');
    const textoResumen = document.getElementById('texto-resumen');

    contenedorResultado.style.display = 'block';
    textoCo2.innerHTML = `🌍 Has evitado la emisión de <strong>${totalCo2Evitado} kg de CO₂</strong> esta semana.`;
    textoResumen.textContent = `¡Excelente trabajo! Tus ${botellas} botellas recicladas y ${kmBici} km en bicicleta están marcando la diferencia.`;
}