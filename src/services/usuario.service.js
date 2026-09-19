/**
 * ============================================================================
 * Módulo: Servicio de Administración de Cuentas de Usuario
 * Propósito: Gestión de accesos, roles y mantenimiento de personal
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";

const RUTA_USUARIOS = "http://localhost:8080/api/usuarios";

/**
 * Lista a todos los usuarios y colaboradores registrados en la plataforma.
 */
export const getUsuarios = async () => {
  const respuesta = await axios.get(RUTA_USUARIOS);
  return respuesta.data;
};

/**
 * Da de alta a un nuevo usuario asignándole credenciales y rol correspondiente.
 */
export const crearUsuario = async (datosUsuario) => {
  const respuesta = await axios.post(RUTA_USUARIOS, datosUsuario);
  return respuesta.data;
};

/**
 * Actualiza la información de perfil o privilegios de un usuario registrado.
 */
export const actualizarUsuario = async (idUsuario, datosActualizados) => {
  const respuesta = await axios.put(`${RUTA_USUARIOS}/${idUsuario}`, datosActualizados);
  return respuesta.data;
};

/**
 * Desactiva el acceso de un usuario al sistema mediante baja lógica.
 */
export const desactivarUsuario = async (idUsuario) => {
  await axios.delete(`${RUTA_USUARIOS}/${idUsuario}`);
};