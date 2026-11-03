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
