import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { formatPrice, getLibroDelDia } from "@/data/libros";

export const metadata = {
  title: "Libro del día",
};

export default function LibroDelDiaPage() {
  const libro = getLibroDelDia();

  return (
    <section className="card">
      <PageTitle
        title="Libro del día"
        subtitle="Recomendación destacada de la librería"
      />

      <p><strong>Título:</strong> {libro.titulo}</p>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Precio:</strong> {formatPrice(libro.precio)}</p>
      <p>{libro.descripcion}</p>

      <Link href={`/libros/${libro.id}`}>Ver detalle completo</Link>
    </section>
  );
}
