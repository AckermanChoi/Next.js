import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getLibroById } from "@/data/libros";

export function generateMetadata({ params }) {
  const libro = getLibroById(params.id);

  if (!libro) {
    return { title: "Libro no encontrado" };
  }

  return {
    title: libro.titulo,
    description: libro.descripcion,
  };
}

export default function LibroDetallePage({ params }) {
  const libro = getLibroById(params.id);

  if (!libro) {
    notFound();
  }

  return (
    <section className="card">
      <h2>{libro.titulo}</h2>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Precio:</strong> {formatPrice(libro.precio)}</p>
      <p>{libro.descripcion}</p>

      <div className="actions-row">
        <Link href="/catalogo" className="button-link">Volver al catálogo</Link>
        <Link href="/carrito" className="button-link">Agregar al carrito (demo)</Link>
      </div>
    </section>
  );
}
