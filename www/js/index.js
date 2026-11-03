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

// Función para renderizar todos los consejos en la página de inicio
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

// Función de navegación entre vistas
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
}

// Funciones de perfil 
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
    mensaje.textContent = '¡Perfil y metas guardados con éxito!';
    setTimeout(() => { mensaje.textContent = ''; }, 3000);
}

function cargarPerfil() {
    const nombreGuardado = localStorage.getItem('eco_nombre');
    const metaGuardada = localStorage.getItem('eco_meta');

    if (nombreGuardado) document.getElementById('input-nombre').value = nombreGuardado;
    if (metaGuardada) document.getElementById('input-meta').value = metaGuardada;
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

// Función para actualizar el progreso diario de actividades
function actualizarProgreso() {
    const checks = [
        document.getElementById('check-bolsa').checked,
        document.getElementById('check-luces').checked,
        document.getElementById('check-ducha').checked,
        document.getElementById('check-separar').checked
    ];

    const totalCompletadas = checks.filter(Boolean).length;
    const porcentaje = Math.round((totalCompletadas / checks.length) * 100);

    const textoProgreso = document.getElementById('texto-progreso');
    if (textoProgreso) {
        textoProgreso.textContent = `${totalCompletadas} de 4 actividades completadas (${porcentaje}%)`;
    }
}

// Inicializar al cargar la página
window.onload = function() {
    cargarPerfil();
    mostrarConsejosEnInicio();
    actualizarProgreso();
};