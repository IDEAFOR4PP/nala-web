# Solución de CORS - NalaBot AI

## Problema
El backend en `whspai-backend-0yik3p-cd0ce1-89-116-50-152.traefik.me` no tiene configurados los headers de CORS necesarios para permitir requests desde el frontend.

## Solución Implementada
Se creó una **API Route de Next.js** que actúa como proxy entre el frontend y el backend real, evitando problemas de CORS y certificados SSL.

## Arquitectura
```
Frontend (React) 
    ↓ fetch('/api/users')
API Route (/app/api/users/route.ts) 
    ↓ actúa como proxy
Backend Real (whspai-backend-...)
```

## Archivos Modificados

### 1. `/app/api/users/route.ts` (NUEVO)
- API route que maneja requests POST a `/api/users`
- Reenvía las peticiones al backend real
- Agrega headers CORS apropiados en la respuesta
- Maneja errores de red y respuestas del backend

### 2. `/app/constantes/index.ts`
- Cambiado de URL externa a `/api/` (ruta local)
- Ahora todas las peticiones van primero a Next.js

### 3. `.env.example` (NUEVO)
- Archivo de ejemplo para configurar variables de entorno

## Configuración

### Para Desarrollo
El archivo `.env.local` debe contener:
```bash
NEXT_PUBLIC_BACKEND_URL=http://whspai-backend-0yik3p-cd0ce1-89-116-50-152.traefik.me
```

### Para Producción
Actualizar `.env.local` o las variables de entorno del servidor:
```bash
NEXT_PUBLIC_BACKEND_URL=https://api-produccion.tudominio.com
```

## Reiniciar el Servidor
Después de cambiar variables de entorno, reinicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## Ventajas de esta Solución
✅ **Evita CORS**: Next.js hace el request desde el servidor, no desde el navegador  
✅ **Seguro**: Oculta la URL real del backend al cliente  
✅ **SSL**: No hay problemas con certificados inválidos  
✅ **Flexible**: Fácil cambiar entre dev/staging/prod  
✅ **Cacheable**: Se puede agregar caché en el futuro  

## Solución Alternativa (Backend)
Si tienes acceso al backend, agrega estos headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```
