/**
 * ============================================================================
 * Módulo: Datos Simulados - Capa de Servicios VitraGlass
 * Propósito: Registros de ejemplo mientras el backend en Java no está disponible
 * Nota: son arrays mutables (let) para poder simular altas/ediciones en memoria
 * ============================================================================
 */

export let mockUsuarios = [
  { idUsuario: 1, dni: "12345678", nombres: "Admin", apellidos: "Sistema", correoElectronico: "admin@vitroglass.com", rol: "ADMIN", estado: "ACTIVO" },
  { idUsuario: 2, dni: "87654321", nombres: "Sofia", apellidos: "Mendoza", correoElectronico: "sofia@vitroglass.com", rol: "VENDEDOR", estado: "ACTIVO" },
  { idUsuario: 3, dni: "11223344", nombres: "Carlos", apellidos: "Lopez", correoElectronico: "carlos@vitroglass.com", rol: "VENDEDOR", estado: "ACTIVO" },
];

export let mockClientes = [
  { idCliente: 1, nombres: "Constructora", apellidos: "Alfa", telefono: "999111222", correoElectronico: "contacto@alfa.com", direccion: "Av. Alfa 100" },
  { idCliente: 2, nombres: "Juan", apellidos: "Ramos", telefono: "999333444", correoElectronico: "juan.ramos@gmail.com", direccion: "Calle Los Pinos 45" },
];

export let mockVidrios = [
  { idTipoVidrio: 1, nombre: "Vidrio Claro", descripcion: "Transparente estándar para ventanas", grosorMm: 6, precioMetroCuadrado: 55.0, estado: "ACTIVO" },
  { idTipoVidrio: 2, nombre: "Vidrio Templado", descripcion: "Alta resistencia térmica y seguridad", grosorMm: 8, precioMetroCuadrado: 130.0, estado: "ACTIVO" },
  { idTipoVidrio: 3, nombre: "Vidrio Laminado", descripcion: "Seguridad reforzada con lámina interna", grosorMm: 10, precioMetroCuadrado: 160.0, estado: "ACTIVO" },
  { idTipoVidrio: 4, nombre: "Vidrio Esmerilado", descripcion: "Vidrio opaco decorativo para privacidad", grosorMm: 6, precioMetroCuadrado: 85.0, estado: "INACTIVO" },
];

/**
 * Representa la vista consolidada de cotizaciones/pedidos (igual al dashboard
 * real): tanto cotizacion.service como pedido.service leen de este mismo array,
 * ya que en tu backend ambos módulos comparten esa información.
 *
 * Nota: "cliente" va como string (nombre completo), tal como lo consume
 * OrdersTable.jsx (hace item.cliente.replace(...)); el backend real al
 * parecer concatena nombre + apellido y a veces deja un " null" colgando
 * cuando falta el apellido, por eso ese componente lo limpia con .replace().
 */
export let mockRegistros = [
  {
    id: 1,
    cliente: "Constructora Alfa",
    fecha: "2026-05-11T22:13:00",
    fechaEntrega: null,
    items: 2,
    total: 767.0,
    estado: "COTIZADO",
  },
  {
    id: 2,
    cliente: "Juan Ramos",
    fecha: "2026-05-11T22:13:00",
    fechaEntrega: null,
    items: 2,
    total: 236.0,
    estado: "COTIZADO",
  },
];
