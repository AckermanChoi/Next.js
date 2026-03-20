import Link from "next/link";
import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Inicio",
};

export default function Home() {
  const pasos = [
    "Entrar a la tienda",
    "Elegir un libro",
    "Añadir al carrito",
    "Pagar",
  ];

  return (
    <section className="card">
      <PageTitle
        title="Bienvenidos"
        subtitle="Proyecto simple para aprender las bases de Next.js"
      />

      <h3>¿Cómo funciona una tienda?</h3>
      <ol>
        {pasos.map((paso) => (
          <li key={paso}>{paso}</li>
        ))}
      </ol>

      <p>
        ¿Listo para empezar? <Link href="/catalogo">Ir al catálogo</Link>
      </p>
    </section>
  );
}
