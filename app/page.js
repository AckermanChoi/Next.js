export default function Home() {
  const pasos = [
    "Entrar a la tienda",
    "Elegir un libro",
    "Añadir al carrito",
    "Pagar",
  ];

  return (
    <section className="card">
      <h2>Bienvenidos</h2>
      <p>
        Esta es una tienda virtual de libros. Cada página muestra una parte del
        sitio de forma fácil.
      </p>

      <h3>¿Cómo funciona una tienda?</h3>
      <ol>
        {pasos.map((paso) => (
          <li key={paso}>{paso}</li>
        ))}
      </ol>
    </section>
  );
}
