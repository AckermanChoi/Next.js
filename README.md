# Tienda Virtual de Libros (Next.js)

Proyecto simple para enseñar qué es una tienda online usando Next.js.

## Páginas

1. `/` → Inicio
2. `/catalogo` → Lista de libros
3. `/libro-del-dia` → Recomendación
4. `/carrito` → Resumen de compra
5. `/contacto` → Datos de ayuda
6. `/libros/[id]` → Detalle dinámico de cada libro

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

## Estructura fácil de entender

- `app/layout.js`: Estructura principal de toda la app.
- `app/page.js`: Página de inicio.
- `app/catalogo/page.js`: Catálogo usando datos compartidos.
- `app/libro-del-dia/page.js`: Recomendación del día.
- `app/libros/[id]/page.js`: Página dinámica por libro.
- `app/carrito/page.js`: Carrito demo con total.
- `app/contacto/page.js`: Datos de contacto.
- `app/not-found.js`: Vista para rutas no encontradas.
- `components/`: Componentes reutilizables (`Navbar`, `PageTitle`, `BookCard`).
- `data/libros.js`: Datos de libros y funciones auxiliares.
- `app/globals.css`: Estilos globales y utilidades visuales.
