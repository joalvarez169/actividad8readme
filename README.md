# EcoConnect - Únete a la Revolución Ambiental

## 1. Descripción del proyecto
**EcoConnect** es una aplicación web de tipo página única (SPA). El objetivo principal es conectar a la ciudadanía con iniciativas ecológicas, puntos de acopio de reciclaje y programas educativos sobre sostenibilidad. 

La plataforma incluye una barra de navegación con React Router DOM, vistas institucionales detalladas (Inicio, Servicios, Sobre Nosotros) y un módulo de registro interactivo con formularios controlados y operaciones CRUD completas (Crear, Leer, Actualizar y Eliminar) sincronizadas en tiempo real con Firebase Firestore.

---

## 2. Tecnologías utilizadas
El proyecto se construyó con herramientas de desarrollo web frontend y servicios en la nube:
* **React (Vite)**: Biblioteca principal para las interfaces de usuario modulares.
* **React Router DOM**: Para la gestión de rutas y navegación entre las distintas vistas de la SPA.
* **Tailwind CSS**: Framework de CSS para lograr un diseño responsivo, adaptado a la identidad visual de EcoConnect.
* **Firebase Firestore**: Base de datos NoSQL en la nube para almacenamiento y sincronización en línea de registros del formulario.
* **FontAwesome & Google Fonts**: Iconografía vectorial y tipografía.

---

## 3. Instrucciones de instalación y ejecución

### Requisitos previos
* Tener instalado **Node.js**
* Navegador web.

### Pasos de instalación
1. Abrir la Terminal en la caperta donde estan las fuentes:
   bash
   cd actividad8-final

2. Instala las dependencias del proyecto (React Router, Firebase y Tailwind):
   npm install

3. Configura las credenciales de la base de datos:
   Abre el archivo ubicado en src/firebase/config.js

4. Ejecuta el servidor de desarrollo local:
   npm run dev

5. Abre el enlace (http://localhost:5173) para visualizar la página web.