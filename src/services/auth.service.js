/**
 * ============================================================================
 * Módulo: Servicio de Autenticación y Control de Sesión
 * Propósito: Gestión de credenciales, token JWT y cierre de sesión
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";
import { USE_MOCKS, delay } from "./mocks/mockHelpers";
import { mockUsuarios } from "./mocks/mockData";

const RUTA_AUTENTICACION = "http://localhost:8080/api/auth";

/**
 * Valida credenciales e inicializa sesión persistiendo el token de seguridad.
 */
export const login = async (correoElectronico, contrasena) => {
  if (USE_MOCKS) {
    // La contraseña no se valida en modo mock (no hay backend que la verifique).
    const usuario = mockUsuarios.find(
      (u) => u.correoElectronico === correoElectronico && u.estado === "ACTIVO"
    );

    if (!usuario) {
      throw { response: { data: { mensaje: "Credenciales inválidas" } } };
    }

    // Login.jsx lee `data.rol` directamente, así que va al nivel raíz (no anidado en "usuario").
    const data = { token: "mock-jwt-token", ...usuario };
    localStorage.setItem("token", data.token);
    return delay(data);
  }

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
