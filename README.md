# VitraGlass — Frontend (vitraglass)

Aplicación web frontend para la automatización del módulo de cotización de la vidriería **VitraGlass**. Desarrollada en **React**, consume los servicios REST del backend (Spring Boot) para gestionar clientes, cotizaciones, pedidos y el catálogo de vidrios.

## 1. Tecnologías

| Capa | Tecnología |
|---|---|
| Framework | React (Vite) |
| UI | Material UI |
| HTTP client | Axios (con interceptor global para el token JWT) |
| Autenticación | JWT + Context API (`AuthContext`) |
| Backend consumido | Spring Boot (puerto `8080`) |

## 2. Estructura del proyecto

```
vitraglass/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── background_login.png
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── ActionButtons.jsx      # botones de acción (editar, cancelar, etc.)
│   │   ├── OrderDetails.jsx       # detalle de un pedido/cotización
│   │   ├── OrdersTable.jsx        # tabla de pedidos/cotizaciones
│   │   ├── ProtectedRoute.jsx     # bloqueo de rutas según rol autenticado
│   │   ├── QuoteInfo.jsx          # información/resumen de la cotización
│   │   ├── Sidebar.jsx            # menú lateral de navegación
│   │   └── UserMenu.jsx           # menú de usuario (nombre, rol, logout)
│   ├── context/
│   │   └── AuthContext.jsx        # manejo global de sesión/autenticación
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── AdminUsuarios.jsx  # gestión de usuarios (CRUD)
│   │   │   └── AdminVidrios.jsx   # catálogo de vidrios (CRUD)
│   │   ├── Dashboard.jsx          # listado de pedidos/cotizaciones
│   │   ├── Login.jsx              # inicio de sesión
│   │   └── NewQuote.jsx           # creación de una nueva cotización
│   ├── services/                  # llamadas a la API (axios instance)
│   ├── App.css
│   └── App.jsx
```

## 3. Funcionalidades

- **Login** (`Login.jsx`): autenticación contra el backend vía JWT; el token se guarda en `AuthContext` y se adjunta automáticamente a cada request con el interceptor de Axios.
- **Rutas protegidas** (`ProtectedRoute.jsx`): restringe el acceso a pantallas según el rol del usuario autenticado (`ADMIN` / `VENDEDOR`), redirigiendo si no corresponde.
- **Dashboard** (`Dashboard.jsx` + `OrdersTable.jsx`): listado de cotizaciones/pedidos — el vendedor ve solo los suyos, el administrador ve todos.
- **Nueva cotización** (`NewQuote.jsx` + `QuoteInfo.jsx`): registro de cliente y detalle de vidrios (tipo, medidas, cantidad), cálculo y visualización del total.
- **Detalle de pedido** (`OrderDetails.jsx` + `ActionButtons.jsx`): visualización del detalle de una cotización/pedido y acciones sobre su estado.
- **Módulo administrador**:
  - `AdminUsuarios.jsx`: CRUD de usuarios (crear, editar, desactivar).
  - `AdminVidrios.jsx`: CRUD del catálogo de tipos de vidrio.
- **Navegación**: `Sidebar.jsx` y `UserMenu.jsx` muestran el menú y los datos del usuario según su rol activo.

## 4. Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/Arelizoyarce/front_end_vitragrass.git
cd vitraglass

# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

La app corre por defecto en `http://localhost:5173` y espera que el backend esté disponible en `http://localhost:8080`.

### Variables de entorno

Crear un archivo `.env` en la raíz con:

```
VITE_API_URL=http://localhost:8080/api
```

## 5. Flujo de trabajo con Git

- `main`: rama principal, siempre estable.
- `feat/<funcionalidad>`: una rama por funcionalidad, creada a partir de `main`.
- Commits descriptivos por cada avance individual.
- Al terminar una funcionalidad, se abre PR / se hace merge a `main` (resolviendo conflictos si los hubiera).

```bash
git checkout main
git pull origin main
git checkout -b feat/nombre-funcionalidad
# ... trabajo y commits ...
git push origin feat/nombre-funcionalidad
# merge a main vía Pull Request o merge local
```

## 6. Equipo

- More Manrique, Renzo José — (U22228363)
- Oyarce Franco, Cynthia Areliz — (U23208307)
- Silva Saavedra, Joseph Gabriel Enrique — (U22219400)
- Vargas Huaman, Frank Emiliano — (U23243651)
- Juárez Huarcaya, Jhair Luis Ángel — (U22224474)