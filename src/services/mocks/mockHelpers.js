/**
 * ============================================================================
 * Módulo: Utilidades para Simulación de Backend (Mocks)
 * Propósito: Bandera de activación, simulación de latencia y generación de IDs
 * ============================================================================
 */

export const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === "true";

/**
 * Resuelve una promesa con la data indicada después de un retardo simulado,
 * para que los componentes se comporten igual que con una llamada real.
 */
export const delay = (data, ms = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

let contadorId = 1000;

/**
 * Genera un id incremental único para los registros creados en modo mock.
 */
export const generarId = () => contadorId++;
