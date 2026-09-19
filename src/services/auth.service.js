/**
 * ============================================================================
 * Módulo: Servicio de Autenticación y Control de Sesión
 * Propósito: Gestión de credenciales, token JWT y cierre de sesión
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";

const RUTA_AUTENTICACION = "http://localhost:8080/api/auth";

/**
 * Valida credenciales e inicializa sesión persistiendo el token de seguridad.
 */
export const login = async (correoElectronico, contrasena) => {
  const respuesta = await axios.post(`${RUTA_AUTENTICACION}/login`, {
    correoElectronico,
    contrasena,
  });

  if (respuesta.data.token) {
    localStorage.setItem("token", respuesta.data.token);
  }

  return respuesta.data;
};

/**
 * Finaliza la sesión y purga las credenciales del almacenamiento local.
 */
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

/**
 * Recupera el token JWT almacenado para validaciones de ruta.
 */
export const getToken = () => {
  return localStorage.getItem("token");
};