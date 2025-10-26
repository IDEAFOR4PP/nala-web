// Configuración del endpoint
// Opción 1: Usar proxy de Next.js (evita CORS pero requiere reiniciar servidor)
export const USE_PROXY = true;

// Opción 2: URL directa del backend (funciona en Postman, puede tener CORS en navegador)
const BACKEND_DIRECT = 'http://whspai-backend-0yik3p-cd0ce1-89-116-50-152.traefik.me/';

// ENDPOINT final según la configuración
export const ENDPOINT = USE_PROXY ? '/api/' : BACKEND_DIRECT;