# DevStudio - Portafolio Web Profesional

Sitio web personal para ofrecer servicios de desarrollo web. Construido con React, Vite, TailwindCSS y Framer Motion.

## 🚀 Tecnologías

- **React 19** - Librería de UI
- **Vite 7** - Build tool ultrarrápido
- **TailwindCSS 4** - Framework CSS utility-first
- **Framer Motion** - Animaciones fluidas
- **React Router** - Navegación SPA
- **Lucide React** - Iconos modernos

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Build para producción

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── TechCarousel.jsx
│   ├── Portfolio.jsx
│   ├── Process.jsx
│   ├── FAQ.jsx
│   ├── CTA.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Loader.jsx
├── pages/            # Páginas de la aplicación
│   └── Home.jsx
├── assets/           # Imágenes y recursos
│   └── images/
├── App.jsx           # Componente principal
├── App.css           # Animaciones personalizadas
├── index.css         # Estilos globales + Tailwind
└── main.jsx          # Punto de entrada
```

## ✨ Características

- **Diseño moderno** con glassmorphism y gradientes
- **Animaciones suaves** con Framer Motion
- **Carrusel infinito** de tecnologías
- **Responsive** para todos los dispositivos
- **Formulario de contacto** integrado con Formspree
- **SEO optimizado** con meta tags
- **Carga rápida** con Vite

## 🎨 Personalización

Los colores principales se pueden modificar en `src/index.css`:

```css
:root {
  --color-primary: #00acac;
  --color-secondary: #fffafa;
  --color-success: #6ed6a5;
}
```

## 📝 Notas

- Actualiza el email de Formspree en `Contact.jsx`
- Agrega tus proyectos reales en `Portfolio.jsx`
- Personaliza la información de contacto en `Footer.jsx` y `Contact.jsx`


📋 Pendientes para ti (requieren tu información real):
Cambiar URLs en index.html de devstudio.cl a tu dominio real
Crear imagen OG (og-image.jpg de 1200x630px) y subirla a /public
Crear favicon.svg y apple-touch-icon.png
Actualizar datos de contacto en el Schema.org (teléfono, email, redes sociales)
Actualizar coordenadas geográficas si no estás en Santiago# webPortafolio
