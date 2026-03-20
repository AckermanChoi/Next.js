import Link from "next/link";

export default function NotFound() {
  return (
    <section className="card">
      <h2>Página no encontrada</h2>
      <p>La página que buscas no existe.</p>
      <p>
        Puedes volver al <Link href="/">inicio</Link>.
      </p>
    </section>
  );
}
