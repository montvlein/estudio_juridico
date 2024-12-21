import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas asesoramiento legal?</h2>
        <p className="text-xl mb-8">Agenda tu consulta gratuita y conoce tus derechos</p>
        <Link
          href="/contacto"
          className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100"
        >
          Contactar Ahora
        </Link>
      </div>
    </section>
  );
}