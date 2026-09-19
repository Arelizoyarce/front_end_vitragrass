/**
 * ============================================================================
 * Módulo: Servicio de Gestión de Clientes
 * Propósito: Consulta predictiva por nombre y registro de nuevos clientes
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";

const RUTA_CLIENTES = "http://localhost:8080/api/clientes";

/**
 * Busca clientes registrados a partir del criterio de nombre o razón social.
 */
export const buscarClientesPorNombre = async (terminoBusqueda) => {
  const respuesta = await axios.get(`${RUTA_CLIENTES}/buscar`, {
    params: { nombre: terminoBusqueda }
  });
  return respuesta.data;
};

/**
 * Da de alta a un nuevo cliente en el sistema para permitir cotizarle.
 */
export const crearCliente = async (datosCliente) => {
  const respuesta = await axios.post(RUTA_CLIENTES, datosCliente);
  return respuesta.data;
};