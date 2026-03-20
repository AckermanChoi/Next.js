# Tienda Virtual de Libros (Next.js)

Proyecto simple para enseñar qué es una tienda online usando Next.js.

## Páginas

1. `/` → Inicio
2. `/catalogo` → Lista de libros
3. `/libro-del-dia` → Recomendación
4. `/carrito` → Resumen de compra
5. `/contacto` → Datos de ayuda

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000`.

## Estructura fácil de entender

- `app/layout.js`: Encabezado y menú común.
- `app/page.js`: Página de inicio.
- `app/catalogo/page.js`: Catálogo de libros.
- `app/libro-del-dia/page.js`: Libro recomendado.
- `app/carrito/page.js`: Carrito simple.
- `app/contacto/page.js`: Datos de contacto.
- `app/globals.css`: Estilos básicos.
