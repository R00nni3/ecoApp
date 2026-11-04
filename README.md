# EcoApp Sostenible 🌿

Aplicación móvil híbrida orientada a fomentar la sostenibilidad, el reciclaje y los hábitos ecológicos cotidianos. Desarrollada como parte de la evaluación **EPE II** de **IPCHILE**.

---

## 🚀 Características Principales

* **Inicio Interactivo:** Panel principal que muestra sugerencias y consejos ecológicos clave para adoptar un estilo de vida más sostenible.
* **Calculadora de Impacto Ecológico:** Permite ingresar hábitos semanales para calcular de forma dinámica la cantidad de CO₂ evitado mediante el reciclaje y la movilidad sostenible.
* **Registro de Actividades Diarias:** Módulo interactivo con casillas de verificación para marcar acciones ecológicas cumplidas y un botón de guardado con persistencia local (`localStorage`).
* **Perfil y Resumen de Usuario:** Permite configurar el nombre del usuario y establecer metas ecológicas mensuales, unificando un panel de resumen con el progreso de actividades.

---

## 🧮 Lógica de la Calculadora de Impacto

La calculadora procesa los datos ingresados semanalmente por el usuario aplicando las siguientes fórmulas para estimar las emisiones de CO₂ evitadas:

1. **Botellas Plásticas Recicladas:**
   * Cada botella reciclada evita aproximadamente **0.08 kg de CO₂**.
   * Fórmula: $\text{CO}_2\text{ Botellas} = \text{Botellas Semanales} \times 0.08$

2. **Movilidad en Bicicleta:**
   * Cada kilómetro recorrido en bicicleta en lugar de transporte motorizado evita aproximadamente **0.21 kg de CO₂**.
   * Fórmula: $\text{CO}_2\text{ Bici} = \text{Kilómetros Semanales} \times 0.21$

3. **Impacto Total Evitado:**
   * Se suman ambos valores para obtener el total semanal expresado en kilogramos:
   * $\text{Total CO}_2\text{ Evitado} = (\text{CO}_2\text{ Botellas} + \text{CO}_2\text{ Bici})$

---

## 🛠️ Tecnologías y Herramientas Utilizadas

* **Frontend:** HTML5, CSS3 (Diseño responsivo con degradados personalizados y paleta corporativa).
* **Lógica:** JavaScript (Vanilla JS, Manipulación del DOM y persistencia con `localStorage`).
* **Framework Híbrido:** Apache Cordova.
* **Entorno de Desarrollo:** Visual Studio Code (con extensión Live Server).
* **Control de Versiones:** Git y GitHub.

---

## 📂 Estructura del Proyecto

```text
ecoApp/
│
└── www/
    ├── css/
    │   └── index.css       # Estilos visuales, degradados y diseño responsivo
    ├── js/
    │   └── index.js        # Lógica de la app, cálculo de impacto y localStorage
    └── index.html          # Estructura de vistas, formularios y navegación
```

---
## ⚙️ Cómo Ejecutar el Proyecto Localmente
1. **Clona el repositorio:**
   git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
   
2. **Abre el proyecto en Visual Studio Code.**
   
3. **Ejecuta la interfaz web haciendo clic derecho sobre el archivo www/index.html y seleccionando "Open with Live Server".**

---
## 👩‍💻 Desarrollado por
Rosario González Perucich

Proyecto realizado para Programación de Aplicaciones Móviles I — IPChile. Docente José Arellano
