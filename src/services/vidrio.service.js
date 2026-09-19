/**
 * ============================================================================
 * Módulo: Servicio de Administración del Catálogo de Vidrios
 * Propósito: Mantenimiento de especificaciones, acabados y precios base
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";

const RUTA_TIPOS_VIDRIO = "http://localhost:8080/api/tipos-vidrio";

/**
 * Obtiene el catálogo completo de vidrios para administración y configuración.
 */
export const getVidrios = async () => {
  const respuesta = await axios.get(`${RUTA_TIPOS_VIDRIO}/admin`);
  return respuesta.data;
};

/**
 * Agrega un nuevo tipo de vidrio o acabado al catálogo maestro.
 */
export const crearVidrio = async (datosVidrio) => {
  const respuesta = await axios.post(`${RUTA_TIPOS_VIDRIO}/admin`, datosVidrio);
  return respuesta.data;
};

/**
 * Actualiza las especificaciones técnicas o costos de un vidrio del catálogo.
 */
export const actualizarVidrio = async (idVidrio, datosActualizados) => {
  const respuesta = await axios.put(`${RUTA_TIPOS_VIDRIO}/admin/${idVidrio}`, datosActualizados);
  return respuesta.data;
};

/**
 * Deshabilita temporal o permanentemente un tipo de vidrio del catálogo.
 */
export const desactivarVidrio = async (idVidrio) => {
  await axios.delete(`${RUTA_TIPOS_VIDRIO}/admin/${idVidrio}`);
};