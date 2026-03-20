export const libros = [
  {
    id: "1",
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 10,
    descripcion: "Un clásico sobre amistad, imaginación y valores.",
  },
  {
    id: "2",
    titulo: "Cuentos para soñar",
    autor: "Ana Sol",
    precio: 12,
    descripcion: "Historias cortas para leer antes de dormir.",
  },
  {
    id: "3",
    titulo: "Aventuras en el bosque",
    autor: "Luis Verde",
    precio: 9,
    descripcion: "Una aventura divertida entre árboles y animales.",
  },
];

export function getLibroById(id) {
  return libros.find((libro) => libro.id === id);
}

export function getLibroDelDia() {
  return libros[1];
}

export function formatPrice(price) {
  return `$${price}`;
}
