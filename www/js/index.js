// Arreglo con consejos sostenibles
const listaConsejos = [
    {
        titulo: "Ahorro de Agua",
        texto: "Cierra la llave mientras te cepillas los dientes. Puedes ahorrar hasta 12 litros de agua por minuto."
    },
    {
        titulo: "Consumo Energético",
        texto: "Desenchufa los electrodomésticos y cargadores que no estés utilizando para evitar el consumo fantasma de energía."
    },
    {
        titulo: "Movilidad Sostenible",
        texto: "Opta por caminar, usar la bicicleta o compartir el auto para trayectos cortos y reducir tu huella de carbono."
    },
    {
        titulo: "Reducción de Plástico",
        texto: "Lleva siempre una bolsa reutilizable y una botella de agua recargable cuando salgas de casa."
    },
    {
        titulo: "Alimentación Consciente",
        texto: "Intenta planificar tus comidas semanales para reducir el desperdicio de alimentos en el hogar."
    }
];

// Función para renderizar los consejos en el inicio
function mostrarConsejosEnInicio() {
    const contenedor = document.getElementById('contenedor-consejos');
    if (!contenedor) return;

    contenedor.innerHTML = '';
    listaConsejos.forEach(consejo => {
        const tarjeta = document.createElement('div');
        tarjeta.style.backgroundColor = '#e7f0b8';
        tarjeta.style.padding = '15px';
        tarjeta.style.borderRadius = '8px';
        tarjeta.style.marginBottom = '12px';
        tarjeta.style.borderLeft = '5px solid #3fe972';

        tarjeta.innerHTML = `
            <h3 style="margin-top: 0; color: #791698; font-size: 16px;">${consejo.titulo}</h3>
            <p style="margin-bottom: 0; font-size: 14px; color: #333;">${consejo.texto}</p>
        `;
        contenedor.appendChild(tarjeta);
    });
}

// Navegación entre vistas
function cambiarVista(nombreVista) {
    const vistas = document.querySelectorAll('.view');
    vistas.forEach(vista => {
        vista.style.display = 'none';
        vista.classList.remove('active');
    });

    const vistaActiva = document.getElementById(`vista-${nombreVista}`);
    if (vistaActiva) {
        vistaActiva.style.display = 'block';
        vistaActiva.classList.add('active');
    }
    
    // Si entramos al perfil, actualizamos el resumen en pantalla
    if (nombreVista === 'perfil') {
        actualizarResumenPerfil();
    }
}

// Guardar Perfil
function guardarPerfil() {
    const nombre = document.getElementById('input-nombre').value;
    const meta = document.getElementById('input-meta').value;

    if (nombre.trim() === '' || meta.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    localStorage.setItem('eco_nombre', nombre);
    localStorage.setItem('eco_meta', meta);

    const mensaje = document.getElementById('mensaje-guardado');
    mensaje.textContent = '¡Perfil guardado con éxito! 🌿';
    setTimeout(() => { mensaje.textContent = ''; }, 3000);

    actualizarResumenPerfil();
}

// Guardar Actividades de forma manual mediante el botón
function guardarActividades() {
    const checkBolsa = document.getElementById('check-bolsa').checked;
    const checkLuces = document.getElementById('check-luces').checked;
    const checkDucha = document.getElementById('check-ducha').checked;
    const checkSeparar = document.getElementById('check-separar').checked;

    // Almacenar en localStorage
    localStorage.setItem('act_bolsa', checkBolsa);
    localStorage.setItem('act_luces', checkLuces);
    localStorage.setItem('act_ducha', checkDucha);
    localStorage.setItem('act_separar', checkSeparar);

    const mensaje = document.getElementById('mensaje-actividades');
    mensaje.textContent = '¡Actividades guardadas correctamente! ✅';
    setTimeout(() => { mensaje.textContent = ''; }, 3000);

    actualizarResumenPerfil();
}

// Cargar datos guardados al iniciar la app
function cargarDatosGuardados() {
    // Perfil
    const nombreGuardado = localStorage.getItem('eco_nombre');
    const metaGuardada = localStorage.getItem('eco_meta');

    if (nombreGuardado) document.getElementById('input-nombre').value = nombreGuardado;
    if (metaGuardada) document.getElementById('input-meta').value = metaGuardada;

    // Actividades (Checkboxes)
    if (localStorage.getItem('act_bolsa') === 'true') document.getElementById('check-bolsa').checked = true;
    if (localStorage.getItem('act_luces') === 'true') document.getElementById('check-luces').checked = true;
    if (localStorage.getItem('act_ducha') === 'true') document.getElementById('check-ducha').checked = true;
    if (localStorage.getItem('act_separar') === 'true') document.getElementById('check-separar').checked = true;

    actualizarResumenPerfil();
}

// Actualizar el panel de resumen en el Perfil
function actualizarResumenPerfil() {
    const nombre = localStorage.getItem('eco_nombre') || 'Sin registrar';
    const meta = localStorage.getItem('eco_meta') || 'Sin definir';

    const checkBolsa = localStorage.getItem('act_bolsa') === 'true';
    const checkLuces = localStorage.getItem('act_luces') === 'true';
    const checkDucha = localStorage.getItem('act_ducha') === 'true';
    const checkSeparar = localStorage.getItem('act_separar') === 'true';

    const checks = [checkBolsa, checkLuces, checkDucha, checkSeparar];
    const totalCompletadas = checks.filter(Boolean).length;
    const porcentaje = Math.round((totalCompletadas / checks.length) * 100);

    // Inyectar en el HTML de la vista de perfil
    const elNombre = document.getElementById('resumen-nombre-usuario');
    const elMeta = document.getElementById('resumen-meta-usuario');
    const elActividades = document.getElementById('resumen-actividades-usuario');

    if (elNombre) elNombre.innerHTML = `<strong>Usuario:</strong> ${nombre}`;
    if (elMeta) elMeta.innerHTML = `<strong>Meta:</strong> ${meta}`;
    if (elActividades) elActividades.innerHTML = `<strong>Actividades completadas:</strong> ${totalCompletadas} de 4 (${porcentaje}%)`;
}

// Función de la calculadora
function calcularImpacto() {
    const botellas = parseFloat(document.getElementById('input-botellas').value) || 0;
    const kmBici = parseFloat(document.getElementById('input-km-bici').value) || 0;

    const co2Botellas = botellas * 0.08;
    const co2Bici = kmBici * 0.21;
    const totalCo2Evitado = (co2Botellas + co2Bici).toFixed(2);

    const contenedorResultado = document.getElementById('resultado-calculadora');
    const textoCo2 = document.getElementById('texto-co2');
    const textoResumen = document.getElementById('texto-resumen');

    contenedorResultado.style.display = 'block';
    textoCo2.innerHTML = `🌍 Has evitado la emisión de <strong>${totalCo2Evitado} kg de CO₂</strong> esta semana.`;
    textoResumen.textContent = `¡Excelente trabajo! Tus ${botellas} botellas recicladas y ${kmBici} km en bicicleta están marcando la diferencia.`;
}

// Inicializar al cargar la página
window.onload = function() {
    cargarDatosGuardados();
    mostrarConsejosEnInicio();
};