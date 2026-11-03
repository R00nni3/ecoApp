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
window.onload = function() {
    cargarPerfil();
};
