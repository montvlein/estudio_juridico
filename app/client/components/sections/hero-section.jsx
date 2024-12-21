import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        alt="Oficina legal"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expertos en Derecho Laboral y Accidentes de Tránsito
            </h1>
            <p className="text-xl mb-8">
              Protegemos tus derechos con más de 15 años de experiencia. Primera consulta sin cargo.
            </p>
            <Link
              href="/contacto"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
            >
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}