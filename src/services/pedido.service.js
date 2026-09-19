/**
 * ============================================================================
 * Módulo: Servicio de Pedidos y Trazabilidad Operativa
 * Propósito: Seguimiento de órdenes en producción para vistas de vendedor y admin
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";
import { USE_MOCKS, delay } from "./mocks/mockHelpers";
import { mockRegistros } from "./mocks/mockData";

const RUTA_PEDIDOS = "http://localhost:8080/api/pedidos";

/**
 * Recupera la lista de pedidos gestionados por el vendedor con sesión activa.
 */
export const getPedidos = async () => {
  if (USE_MOCKS) {
    return delay([...mockRegistros]);
  }

  const respuesta = await axios.get(`${RUTA_PEDIDOS}/dashboard`);
  return respuesta.data;
};

/**
 * Recupera el consolidado global de todos los pedidos para la vista de supervisión.
 */
export const getAllPedidos = async () => {
  if (USE_MOCKS) {
    return delay([...mockRegistros]);
  }

  const respuesta = await axios.get(`${RUTA_PEDIDOS}/admin/dashboard`);
  return respuesta.data;
};

/**
 * Consulta el expediente técnico y comercial de un pedido específico.
 */
export const getPedidoById = async (idPedido) => {
  if (USE_MOCKS) {
    const registro = mockRegistros.find((r) => r.id === idPedido);
    return delay(registro ?? null);
  }

  const respuesta = await axios.get(`${RUTA_PEDIDOS}/${idPedido}`);
  return respuesta.data;
};

/**
 * Filtra los pedidos según su etapa (COTIZADO, EN PROCESO, COMPLETADO, CANCELADO).
 */
export const getPedidosByEstado = async (estadoFiltro) => {
  if (USE_MOCKS) {
    return delay(mockRegistros.filter((r) => r.estado === estadoFiltro));
  }

  const respuesta = await axios.get(`${RUTA_PEDIDOS}/estado/${estadoFiltro}`);
  return respuesta.data;
};
