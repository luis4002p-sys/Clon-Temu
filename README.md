Temu Clone (React + Node.js)
Proyecto educativo que replica de forma parcial la experiencia de la plataforma Temu, desarrollado con React + TypeScript (TSX) en el frontend y Node.js + TypeScript en el backend.

La aplicación permite:
Registro e inicio de sesión de usuarios.
Envío automático de los datos del formulario de registro a un correo controlado llamado "Práctica Temu".
Este proyecto fue creado con fines de práctica y aprendizaje

Tecnologías utilizadas

Frontend:
React
TypeScript (TSX)
React Router
CSS modularizado
Zustand (manejo de estado)

Backend:
Node.js
Express
TypeScript
Nodemailer (envío de correos)
Arquitectura por capas (controllers, routes, services)

Funcionalidad principal
Registro de usuarios
Cuando un usuario crea una cuenta y completa el formulario de registro:
Los datos se envían desde el frontend al backend.
El backend procesa la información.
Se envía un correo electrónico con los datos del registro al email configurado como Práctica Temu.
Esta funcionalidad se utiliza únicamente con fines de prueba y validación de formularios.

Estructura del proyecto
Frontend (src)
src
├─ api
│ ├─ auth.ts
│ └─ products.ts
├─ assets
│ ├─ icons
│ ├─ images
│ └─ logos
├─ constants
├─ features
│ ├─ auth
│ │ └─ components
│ │ ├─ pages
│ │ │ ├─ LoginModal.tsx
│ │ │ └─ RegisterModal.tsx
│ │ └─ LoginPage.tsx
│ ├─ cart
│ ├─ category
│ ├─ home
│ │ ├─ components
│ │ └─ pages
│ ├─ product
│ │ ├─ components
│ │ ├─ hooks
│ │ ├─ pages
│ │ └─ services
│ └─ search
├─ layout
│ ├─ Header
│ ├─ Footer
│ └─ MainLayout
├─ router
│ └─ index.tsx
├─ store
│ └─ useStore.ts
├─ styles
├─ ui
├─ utils
├─ types
├─ App.tsx
└─ main.tsx

Backend (backend/src)
src
├─ config
│ └─ db.ts
├─ controllers
│ └─ auth.controller.ts
├─ routes
│ └─ auth.routes.ts
├─ services
│ └─ mail.service.ts
├─ types
├─ server.ts
.env
PORT=3000
EMAIL_USER=tu_correo@gmail.com (agregar un correo de practicas para recibir y enviar datos )
EMAIL_PASS=tu_contraseña_o_app_password
EMAIL_TO=tu_correo@gmail.com   (agregar un correo de practicas para recibir y enviar datos )
