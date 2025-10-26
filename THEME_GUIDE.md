# 🎨 Sistema de Temas - Guía de Uso

## Descripción

Este proyecto cuenta con un sistema de temas **light** y **dark** implementado con Context API, CSS custom properties y Tailwind CSS.

## ✨ Características

- 🌓 Cambio entre tema claro y oscuro **EN TIEMPO REAL**
- 💾 Persistencia en localStorage
- 🔄 Respeta las preferencias del sistema
- ⚡ Transiciones suaves sin recargar página
- 🎯 Variables CSS reutilizables
- 🔌 Context API para estado global
- 🚀 Sin flash al cargar la página

## 📁 Archivos Clave

### 1. Variables CSS (`app/globals.css`)

```css
:root {
  /* Tema Light */
  --bg-primary: 249 250 251; /* gray-50 */
  --text-primary: 17 24 39; /* gray-900 */
  --border-primary: 219 234 254; /* blue-200 */
  /* ... más variables */
}

.dark {
  /* Tema Dark */
  --bg-primary: 0 0 0; /* black */
  --text-primary: 255 255 255; /* white */
  --border-primary: 59 130 246; /* blue-500 */
  /* ... más variables */
}
```

### 2. ThemeProvider con Context API (`app/components/ThemeProvider.tsx`)

Provider que maneja el estado del tema globalmente:
- Context API para compartir estado
- Detecta tema guardado o preferencia del sistema
- Aplica cambios en tiempo real
- Guarda automáticamente en localStorage
- Prevención de hydration mismatch

### 3. Componente ThemeToggle (`app/components/ThemeToggle.tsx`)

Botón simple que consume el context:
- Iconos Moon/Sun según tema activo
- Usa hook `useTheme()` del provider
- Cambio instantáneo al hacer clic

### 4. Layout con ThemeProvider (`app/layout.tsx`)

Envuelve toda la app con el ThemeProvider:
```tsx
<ThemeProvider>
  <main>{children}</main>
</ThemeProvider>
```

Script inline en `<head>` que previene el flash:
```javascript
// Se ejecuta ANTES de renderizar
const savedTheme = localStorage.getItem('theme');
const theme = savedTheme || systemTheme;
document.documentElement.classList.add(theme === 'dark' ? 'dark' : '');
```

### 5. Configuración Tailwind (`tailwind.config.ts`)

```typescript
const config: Config = {
  darkMode: "class", // Importante!
  // ...
};
```

## 🚀 Uso del Theme Context

### Hook useTheme

Cualquier componente puede acceder al tema usando el hook:

```tsx
'use client';

import { useTheme } from '@/app/components/ThemeProvider';

function MiComponente() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>Cambiar tema</button>
      <button onClick={() => setTheme('dark')}>Forzar dark</button>
    </div>
  );
}
```

### Métodos Disponibles

- `theme`: `'light' | 'dark'` - Tema actual
- `toggleTheme()`: Alterna entre light y dark
- `setTheme(theme)`: Establece un tema específico

## 🎨 Uso en Componentes

### Clases de Tailwind con Dark Mode

```tsx
// Básico
<div className="bg-white dark:bg-black text-gray-900 dark:text-white">
  Contenido
</div>

// Bordes
<div className="border-blue-200 dark:border-blue-500/20">

// Hover states
<button className="hover:bg-blue-100 dark:hover:bg-blue-500/10">

// Backgrounds con opacidad
<div className="bg-white/80 dark:bg-black/50">
```

### Patrones Comunes

```tsx
// Card
<div className="border border-blue-200 dark:border-blue-500/30 
                bg-white/80 dark:bg-blue-500/5 
                hover:bg-blue-100 dark:hover:bg-blue-500/10">

// Texto
<p className="text-gray-600 dark:text-gray-400">

// Input
<input className="border-blue-200 dark:border-blue-500/30 
                  bg-white/80 dark:bg-black/50 
                  text-gray-900 dark:text-white" />
```

## 📦 Componentes Actualizados

Los siguientes componentes ya tienen soporte dark mode:

- ✅ Layout principal (`app/layout.tsx`)
- ✅ Home page y componentes
  - BackHero (fondo animado)
  - Header (navegación)
  - Footer (con ThemeToggle)
  - Features
- ✅ ThemeToggle en el footer

## 🎯 Agregar Dark Mode a Nuevos Componentes

1. **Agrega clases dark: a elementos visuales**
```tsx
<div className="bg-white dark:bg-gray-800">
```

2. **Para textos**
```tsx
<p className="text-gray-900 dark:text-white">
<span className="text-gray-600 dark:text-gray-400">
```

3. **Para bordes**
```tsx
<div className="border-blue-200 dark:border-blue-500/30">
```

4. **Para fondos con transparencia**
```tsx
<div className="bg-white/80 dark:bg-black/50">
```

## 🔧 Variables CSS Disponibles

### Backgrounds
- `--bg-primary`: Fondo principal
- `--bg-secondary`: Fondo secundario
- `--bg-card`: Fondo de tarjetas
- `--bg-card-hover`: Hover de tarjetas
- `--bg-input`: Fondo de inputs
- `--bg-sidebar`: Fondo de sidebar

### Textos
- `--text-primary`: Texto principal
- `--text-secondary`: Texto secundario
- `--text-tertiary`: Texto terciario
- `--text-muted`: Texto atenuado

### Bordes
- `--border-primary`: Borde principal
- `--border-secondary`: Borde secundario

### Gradientes y Blobs
- `--gradient-start/mid/end`: Gradientes de fondo
- `--blob-blue/cyan/purple`: Colores de blobs animados
- `--blob-opacity`: Opacidad de blobs

## 💡 Tips

1. **Siempre testea ambos temas** al crear/modificar componentes
2. **Usa opacidades** (`/80`, `/50`) para backgrounds con transparencia
3. **Mantén contraste adecuado** entre texto y fondo en ambos temas
4. **Usa las variables CSS** cuando necesites valores personalizados:
   ```tsx
   style={{ backgroundColor: `rgb(var(--bg-primary))` }}
   ```

## 🐛 Troubleshooting

### El tema no cambia
- Verifica que `darkMode: "class"` esté en `tailwind.config.ts`
- Asegúrate que el componente tenga clases `dark:`

### Hydration mismatch
- El ThemeToggle ya maneja esto con el flag `mounted`

### localStorage no funciona
- Verifica que el componente sea client-side (`'use client'`)

## 📝 Próximas Mejoras

- [ ] Agregar más variables CSS personalizadas
- [ ] Modo automático (basado en hora del día)
- [ ] Temas personalizados (azul, verde, etc.)
- [ ] Transiciones animadas entre temas
