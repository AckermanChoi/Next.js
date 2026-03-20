import BookCard from "@/components/BookCard";
import PageTitle from "@/components/PageTitle";
import { libros } from "@/data/libros";

export const metadata = {
  title: "Catálogo",
};

export default function CatalogoPage() {
  return (
    <section className="card">
      <PageTitle
        title="Catálogo"
        subtitle="Cada libro tiene su propia página de detalle"
      />

      <div className="book-grid">
        {libros.map((libro) => (
          <BookCard key={libro.id} libro={libro} />
        ))}
      </div>
    </section>
  );
}
