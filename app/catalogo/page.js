const libros = [
  { id: 1, titulo: "El Principito", precio: "$10" },
  { id: 2, titulo: "Cuentos para soñar", precio: "$12" },
  { id: 3, titulo: "Aventuras en el bosque", precio: "$9" },
];

export default function CatalogoPage() {
  return (
    <section className="card">
      <h2>Catálogo</h2>
      <p>Aquí están algunos libros de ejemplo.</p>

      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.titulo} - {libro.precio}
          </li>
        ))}
      </ul>
    </section>
  );
}
