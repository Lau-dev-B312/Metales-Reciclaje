# Metales Reciclaje

Plataforma web oficial para la recuperación, compra y valorización de carburo de tungsteno y metales industriales duros con alcance internacional.

---

## Características

- **Catálogo de Materiales Industriales**: Listado detallado de 28 piezas, herramientas y rezagos de carburo de tungsteno (widias, insertos, triconos, brocas, boquillas, etc.).
- **Contacto Directo por WhatsApp**: Integración de consultas y cotizaciones personalizadas mediante WhatsApp con mensajes preconfigurados por tipo de material.
- **Sección de Servicios**: Detalle de soluciones logísticas, retiro en plantas industriales, compras de grandes volúmenes y valorización técnica.
- **Diseño Responsive & Moderno**: Interfaz con estética industrial oscura, efectos de desenfoque (*glassmorphism*), tipografía optimizada y navegación fluida adaptable a escritorio y dispositivos móviles.

---

## Tecnologías Utilizadas

- **React 19**
- **Vite 8**
- **CSS3 Vanilla** (Diseño responsivo, variables CSS y animaciones)
- **Oxlint**

---

## Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 18 o superior recomendada)
- **npm** (o gestor compatible como yarn / pnpm)

### Pasos

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd MetalesReciclaje
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

4. Compilar para producción:
   ```bash
   npm run build
   ```

5. Previsualizar la compilación de producción:
   ```bash
   npm run preview
   ```

6. Ejecutar linter:
   ```bash
   npm run lint
   ```

---

## Estructura del Proyecto

```text
MetalesReciclaje/
├── public/                 # Favicons y recursos estáticos
├── src/
│   ├── assets/             # Imágenes corporativas y catálogo de materiales
│   ├── components/         # Componentes modulares de React
│   │   ├── AboutUs.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── TungstenMaterials.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.css             # Estilos principales de la interfaz
│   ├── App.jsx             # Componente raíz
│   ├── index.css           # Variables de diseño y estilos globales
│   └── main.jsx            # Punto de entrada de la aplicación
├── index.html              # HTML base
├── package.json            # Dependencias y scripts del proyecto
├── vite.config.js          # Configuración de Vite
└── README.md               # Documentación del proyecto
```

---

## Licencia

Todos los derechos reservados © 2026 Metales Reciclaje.
