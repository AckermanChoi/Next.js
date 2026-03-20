import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { formatPrice, getLibroById } from "@/data/libros";

export const metadata = {
  title: "Carrito",
};

export default function CarritoPage() {
  const carritoIds = ["1", "3"];
  const items = carritoIds.map((id) => getLibroById(id)).filter(Boolean);
  const total = items.reduce((sum, libro) => sum + libro.precio, 0);

  return (
    <section className="card">
      <PageTitle
        title="Carrito"
        subtitle="Aquí ves los libros seleccionados"
      />

      {items.length === 0 ? (
        <p>
          Tu carrito está vacío. <Link href="/catalogo">Ir a comprar</Link>
        </p>
      ) : (
        <>
          <ul>
            {items.map((libro) => (
              <li key={libro.id}>
                {libro.titulo} - {formatPrice(libro.precio)}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total:</strong> {formatPrice(total)}
          </p>
        </>
      )}
    </section>
  );
}
