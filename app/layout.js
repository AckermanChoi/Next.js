import "./globals.css";
import PropTypes from "prop-types";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: {
    default: "Librería Pequeña",
    template: "%s | Librería Pequeña",
  },
  description: "Tienda virtual de libros hecha con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <h1>Librería IRG</h1>
          <p>Una tienda virtual simple para practicar Next.js</p>
          <ThemeToggle />
          <Navbar />
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
