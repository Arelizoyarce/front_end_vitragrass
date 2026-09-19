/**
 * ============================================================================
 * Módulo: Servicio de Gestión de Clientes
 * Propósito: Consulta predictiva por nombre y registro de nuevos clientes
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";
import { USE_MOCKS, delay, generarId } from "./mocks/mockHelpers";
import { mockClientes } from "./mocks/mockData";

const RUTA_CLIENTES = "http://localhost:8080/api/clientes";

/**
 * Busca clientes registrados a partir del criterio de nombre o razón social.
 */
export const buscarClientesPorNombre = async (terminoBusqueda) => {
  if (USE_MOCKS) {
    const termino = terminoBusqueda.toLowerCase();
    const resultado = mockClientes.filter((c) =>
      `${c.nombres} ${c.apellidos}`.toLowerCase().includes(termino)
    );
    return delay(resultado);
  }

  const respuesta = await axios.get(`${RUTA_CLIENTES}/buscar`, {
    params: { nombre: terminoBusqueda },
  });
  return respuesta.data;
};

/**
 * Da de alta a un nuevo cliente en el sistema para permitir cotizarle.
 */
export const crearCliente = async (datosCliente) => {
  if (USE_MOCKS) {
    const nuevoCliente = { idCliente: generarId(), ...datosCliente };
    mockClientes.push(nuevoCliente);
    return delay(nuevoCliente);
  }

  const respuesta = await axios.post(RUTA_CLIENTES, datosCliente);
  return respuesta.data;
};
