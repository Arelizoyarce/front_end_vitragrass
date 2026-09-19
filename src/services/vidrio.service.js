/**
 * ============================================================================
 * Módulo: Servicio de Administración del Catálogo de Vidrios
 * Propósito: Mantenimiento de especificaciones, acabados y precios base
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";
import { USE_MOCKS, delay, generarId } from "./mocks/mockHelpers";
import { mockVidrios } from "./mocks/mockData";

const RUTA_TIPOS_VIDRIO = "http://localhost:8080/api/tipos-vidrio";

/**
 * Obtiene el catálogo completo de vidrios para administración y configuración.
 */
export const getVidrios = async () => {
  if (USE_MOCKS) {
    return delay([...mockVidrios]);
  }

  const respuesta = await axios.get(`${RUTA_TIPOS_VIDRIO}/admin`);
  return respuesta.data;
};

/**
 * Agrega un nuevo tipo de vidrio o acabado al catálogo maestro.
 */
export const crearVidrio = async (datosVidrio) => {
  if (USE_MOCKS) {
    const nuevoVidrio = { idTipoVidrio: generarId(), estado: "ACTIVO", ...datosVidrio };
    mockVidrios.push(nuevoVidrio);
    return delay(nuevoVidrio);
  }

  const respuesta = await axios.post(`${RUTA_TIPOS_VIDRIO}/admin`, datosVidrio);
  return respuesta.data;
};

/**
 * Actualiza las especificaciones técnicas o costos de un vidrio del catálogo.
 */
export const actualizarVidrio = async (idVidrio, datosActualizados) => {
  if (USE_MOCKS) {
    const vidrio = mockVidrios.find((v) => v.idTipoVidrio === idVidrio);
    if (!vidrio) {
      throw { response: { data: { mensaje: "Vidrio no encontrado" } } };
    }
    Object.assign(vidrio, datosActualizados);
    return delay({ ...vidrio });
  }

  const respuesta = await axios.put(`${RUTA_TIPOS_VIDRIO}/admin/${idVidrio}`, datosActualizados);
  return respuesta.data;
};

/**
 * Deshabilita temporal o permanentemente un tipo de vidrio del catálogo.
 */
export const desactivarVidrio = async (idVidrio) => {
  if (USE_MOCKS) {
    const vidrio = mockVidrios.find((v) => v.idTipoVidrio === idVidrio);
    if (vidrio) vidrio.estado = "INACTIVO";
    return delay(true);
  }

  await axios.delete(`${RUTA_TIPOS_VIDRIO}/admin/${idVidrio}`);
};
