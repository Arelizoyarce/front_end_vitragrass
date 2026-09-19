/**
 * ============================================================================
 * Módulo: Servicio Principal de Cotizaciones y Emisión Documentaria
 * Propósito: Cálculo de medidas, actualización de estados, proformas y boletas
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";

const RUTA_API = "http://localhost:8080/api";

/**
 * Modifica el estado comercial de la cotización y fija la fecha de entrega acordada.
 */
export const updateEstadoCotizacion = async (idCotizacion, nuevoEstado, fechaEntrega) => {
  const respuesta = await axios.put(`${RUTA_API}/cotizaciones/${idCotizacion}/estado`, {
    estado: nuevoEstado,
    fechaEntrega
  });
  return respuesta.data;
};

/**
 * Consulta el tarifario de tipos de vidrios, acabados y grosores.
 */
export const getTiposVidrio = async () => {
  const respuesta = await axios.get(`${RUTA_API}/tipos-vidrio`);
  return respuesta.data;
};

/**
 * Registra una cotización completa con sus piezas de vidrio y cliente asociado.
 */
export const createCotizacion = async (datosCotizacion) => {
  const respuesta = await axios.post(`${RUTA_API}/cotizaciones`, datosCotizacion);
  return respuesta.data;
};

/**
 * Obtiene el desglose detallado de una cotización mediante su identificador único.
 */
export const getCotizacionById = async (idCotizacion) => {
  const respuesta = await axios.get(`${RUTA_API}/cotizaciones/${idCotizacion}`);
  return respuesta.data;
};

/**
 * Descarga la proforma oficial de cotización en formato PDF como archivo descargable.
 */
export const descargarPdf = async (idCotizacion) => {
  const respuesta = await axios.get(`${RUTA_API}/cotizaciones/${idCotizacion}/pdf`, {
    responseType: "blob"
  });
  const enlaceTemporal = window.URL.createObjectURL(new Blob([respuesta.data]));
  const elementoDescarga = document.createElement("a");
  elementoDescarga.href = enlaceTemporal;
  elementoDescarga.setAttribute("download", `Cotizacion_${String(idCotizacion).padStart(6, "0")}.pdf`);
  document.body.appendChild(elementoDescarga);
  elementoDescarga.click();
  elementoDescarga.remove();
};

/**
 * Despacha la proforma de cotización adjunta al correo electrónico del cliente.
 */
export const enviarPorCorreo = async (idCotizacion) => {
  const respuesta = await axios.post(`${RUTA_API}/cotizaciones/${idCotizacion}/enviar-correo`);
  return respuesta.data;
};

/**
 * Descarga la boleta electrónica de venta generada en formato PDF.
 */
export const descargarBoleta = async (idCotizacion) => {
  const respuesta = await axios.get(`${RUTA_API}/cotizaciones/${idCotizacion}/boleta-pdf`, {
    responseType: "blob"
  });
  const enlaceTemporal = window.URL.createObjectURL(new Blob([respuesta.data]));
  const elementoDescarga = document.createElement("a");
  elementoDescarga.href = enlaceTemporal;
  elementoDescarga.setAttribute("download", `Boleta_B001-${String(idCotizacion).padStart(6, "0")}.pdf`);
  document.body.appendChild(elementoDescarga);
  elementoDescarga.click();
  elementoDescarga.remove();
};

/**
 * Envía la boleta electrónica de venta al buzón de correo del cliente.
 */
export const enviarBoletaPorCorreo = async (idCotizacion) => {
  const respuesta = await axios.post(`${RUTA_API}/cotizaciones/${idCotizacion}/enviar-boleta`);
  return respuesta.data;
};