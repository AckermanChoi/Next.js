import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <section className="card">
      <PageTitle
        title="Contacto"
        subtitle="Estamos aquí para ayudarte"
      />

      <p>Si necesitas ayuda, puedes escribirnos:</p>
      <ul>
        <li>Correo: ayuda@libreriapequena.com</li>
        <li>Teléfono: 555-1234</li>
      </ul>
      <p>Horario: lunes a viernes de 9:00 a 17:00.</p>
    </section>
  );
}
