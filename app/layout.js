import "./globals.css";
import Link from "next/link";
import PropTypes from "prop-types";

export const metadata = {
  title: "Librería Pequeña",
  description: "Tienda virtual de libros hecha con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <h1>Librería Pequeña</h1>
          <p>Una tienda virtual simple para aprender Next.js</p>
          <nav className="menu">
            <Link href="/">Inicio</Link>
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/libro-del-dia">Libro del día</Link>
            <Link href="/carrito">Carrito</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
