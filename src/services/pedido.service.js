/**
 * ============================================================================
 * Módulo: Servicio de Pedidos y Trazabilidad Operativa
 * Propósito: Seguimiento de órdenes en producción para vistas de vendedor y admin
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";

const RUTA_PEDIDOS = "http://localhost:8080/api/pedidos";

/**
 * Recupera la lista de pedidos gestionados por el vendedor con sesión activa.
 */
export const getPedidos = async () => {
  const respuesta = await axios.get(`${RUTA_PEDIDOS}/dashboard`);
  return respuesta.data;
};

/**
 * Recupera el consolidado global de todos los pedidos para la vista de supervisión.
 */
export const getAllPedidos = async () => {
  const respuesta = await axios.get(`${RUTA_PEDIDOS}/admin/dashboard`);
  return respuesta.data;
};

/**
 * Consulta el expediente técnico y comercial de un pedido específico.
 */
export const getPedidoById = async (idPedido) => {
  const respuesta = await axios.get(`${RUTA_PEDIDOS}/${idPedido}`);
  return respuesta.data;
};

/**
 * Filtra los pedidos según su etapa (COTIZADO, EN PROCESO, COMPLETADO, CANCELADO).
 */
export const getPedidosByEstado = async (estadoFiltro) => {
  const respuesta = await axios.get(`${RUTA_PEDIDOS}/estado/${estadoFiltro}`);
  return respuesta.data;
};