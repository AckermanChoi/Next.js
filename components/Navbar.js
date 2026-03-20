import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/libro-del-dia", label: "Libro del día" },
  { href: "/carrito", label: "Carrito" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav className="menu" aria-label="Navegación principal">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
