# Canacintra

Bienvenido al repositorio del proyecto **Canacintra**. 

Este sistema es una **Plataforma de Crowdlending e Inversión** diseñada para conectar a emprendedores que buscan financiamiento con inversores interesados en apoyar proyectos productivos. La aplicación gestiona todo el ciclo de vida del crédito y la inversión, desde la solicitud de fondos hasta el retorno de capital.

## 💡 ¿Qué problema soluciona?

El objetivo principal de la aplicación es **facilitar el acceso al crédito para emprendedores y PyMEs**, ofreciendo a su vez opciones de inversión atractivas. El sistema digitaliza y automatiza el proceso de:

1.  **Solicitud de Crédito (Entrepreneurs):** Los usuarios pueden registrar propuestas de negocio, especificando monto solicitado, plazos y detalles del proyecto para su evaluación.
2.  **Gestión de Oportunidades:** Las propuestas aprobadas se convierten en "Oportunidades" de inversión publicadas en la plataforma.
3.  **Inversión (Investors):** Los usuarios con perfil de inversor pueden visualizar estas oportunidades y aportar capital.
4.  **Administración de Pagos:** El sistema lleva el control de los pagos de los emprendedores (retorno del crédito) y la distribución de rendimientos a los inversores.

## ✨ Funcionalidades Principales

- **🔐 Autenticación y Roles:** 
    - **Inversor:** Explora oportunidades y gestiona su portafolio de inversiones.
    - **Negocio (Emprendedor):** Solicita financiamiento, sube documentación y da seguimiento a sus propuestas.
    - **Administrador:** Valida propuestas, gestiona usuarios y supervisa el flujo de capital.
- **� Gestión de Propuestas:** Flujo completo para crear, editar y aprobar solicitudes de crédito.
- **💰 Control Financiero:** Seguimiento detallado de montos solicitados, invertidos, tablas de amortización y historial de pagos.
- **📊 Dashboards Especializados:** Vistas dedicadas para cada rol (Admin, Inversor, Negocio) con métricas relevantes (KPIs).

---

## 🚀 Tecnologías

El proyecto utiliza un stack tecnológico moderno y eficiente:

### Frontend
- **Framework:** Angular 18
- **Lenguaje:** TypeScript
- **Renderizado:** Server-Side Rendering (SSR) con Express.
- **Diseño:** Interfaces responsivas y amigables.

### Backend
- **Runtime:** Node.js
- **Framework:** Express
- **Base de Datos:** PostgreSQL
- **ORM:** Sequelize (Modelado de datos relacional).
- **Seguridad:** Autenticación con Passport.js y JWT.
- **Infraestructura:** Docker y Docker Compose.

## 📋 Prerrequisitos

Para ejecutar este proyecto localmente, necesitas:
- [Node.js](https://nodejs.org/) (Versión LTS recomendada)
- [Docker](https://www.docker.com/) y Docker Compose
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd canacintra
```

### 2. Configuración del Backend

```bash
cd backend
```

**Variables de Entorno (.env):**
Crea un archivo `.env` en `backend/`:
```env
PORT=3000
NODE_ENV=dev
DB_USER=canacintra_admin
DB_PASSWORD=12345678
DB_HOST=localhost
DB_NAME=canacintra
DB_PORT=5432
API_KEY=tu_api_key
JWT_SECRET=tu_secret_jwt
```

**Iniciar Base de Datos:**
```bash
docker-compose up -d
```

**Instalar y Migrar:**
```bash
npm install
npm run migrations:run
```

**Correr Servidor:**
```bash
npm run dev
```

### 3. Configuración del Frontend

```bash
cd ../frontend
npm install
ng serve
```
Accede desde `http://localhost:4200`.

## 📦 Estructura del Proyecto

```
canacintra/
├── backend/            # API RESTful
│   ├── db/models/      # Modelos (Propuesta, Inversión, Pago, etc.)
│   ├── services/       # Lógica de negocio (Cálculo de pagos, validaciones)
│   └── routes/         # Endpoints de la API
│
├── frontend/           # Aplicación Angular
│   ├── src/app/pages/  # Vistas (Home, Dashboards, Formularios)
│   └── src/app/servicios/ # Conexión con Backend
│
└── README.md
```

## 🤝 Contribución

1. Fork del repositorio.
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`).
3. Commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Push (`git push origin feature/nueva-funcionalidad`).
5. Pull Request.
