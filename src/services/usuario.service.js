/**
 * ============================================================================
 * Módulo: Servicio de Administración de Cuentas de Usuario
 * Propósito: Gestión de accesos, roles y mantenimiento de personal
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";
import { USE_MOCKS, delay, generarId } from "./mocks/mockHelpers";
import { mockUsuarios } from "./mocks/mockData";

const RUTA_USUARIOS = "http://localhost:8080/api/usuarios";

/**
 * Lista a todos los usuarios y colaboradores registrados en la plataforma.
 */
export const getUsuarios = async () => {
  if (USE_MOCKS) {
    return delay([...mockUsuarios]);
  }

  const respuesta = await axios.get(RUTA_USUARIOS);
  return respuesta.data;
};

/**
 * Da de alta a un nuevo usuario asignándole credenciales y rol correspondiente.
 */
export const crearUsuario = async (datosUsuario) => {
  if (USE_MOCKS) {
    const nuevoUsuario = { idUsuario: generarId(), estado: "ACTIVO", ...datosUsuario };
    mockUsuarios.push(nuevoUsuario);
    return delay(nuevoUsuario);
  }

  const respuesta = await axios.post(RUTA_USUARIOS, datosUsuario);
  return respuesta.data;
};

/**
 * Actualiza la información de perfil o privilegios de un usuario registrado.
 */
export const actualizarUsuario = async (idUsuario, datosActualizados) => {
  if (USE_MOCKS) {
    const usuario = mockUsuarios.find((u) => u.idUsuario === idUsuario);
    if (!usuario) {
      throw { response: { data: { mensaje: "Usuario no encontrado" } } };
    }
    Object.assign(usuario, datosActualizados);
    return delay({ ...usuario });
  }

  const respuesta = await axios.put(`${RUTA_USUARIOS}/${idUsuario}`, datosActualizados);
  return respuesta.data;
};

/**
 * Desactiva el acceso de un usuario al sistema mediante baja lógica.
 */
export const desactivarUsuario = async (idUsuario) => {
  if (USE_MOCKS) {
    const usuario = mockUsuarios.find((u) => u.idUsuario === idUsuario);
    if (usuario) usuario.estado = "INACTIVO";
    return delay(true);
  }

  await axios.delete(`${RUTA_USUARIOS}/${idUsuario}`);
};
