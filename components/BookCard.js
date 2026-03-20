import Link from "next/link";
import PropTypes from "prop-types";
import { formatPrice } from "@/data/libros";

export default function BookCard({ libro }) {
  return (
    <article className="book-card">
      <h3>{libro.titulo}</h3>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p>{libro.descripcion}</p>
      <p><strong>Precio:</strong> {formatPrice(libro.precio)}</p>
      <Link href={`/libros/${libro.id}`} className="button-link">
        Ver detalle
      </Link>
    </article>
  );
}

BookCard.propTypes = {
  libro: PropTypes.shape({
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
  }).isRequired,
};
