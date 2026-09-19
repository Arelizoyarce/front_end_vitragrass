/**
 * ============================================================================
 * Módulo: Cliente HTTP Centralizado (Axios Interceptor)
 * Propósito: Inyección automática del Bearer Token JWT en solicitudes seguras
 * Autor: Frank Vargas (U23243651)
 * ============================================================================
 */
import axios from "axios";

axios.interceptors.request.use(
  (configuracion) => {
    const tokenAcceso = localStorage.getItem("token");
    if (tokenAcceso) {
      configuracion.headers.Authorization = `Bearer ${tokenAcceso}`;
    }
    return configuracion;
  },
  (error) => Promise.reject(error)
);

export default axios;