import { Users, Award, Clock } from 'lucide-react';

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Experiencia</h3>
            <p>Más de 15 años defendiendo los derechos de nuestros clientes</p>
          </div>
          <div className="text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Profesionalismo</h3>
            <p>Equipo altamente calificado y comprometido con tu caso</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Atención Inmediata</h3>
            <p>Respuesta rápida y seguimiento personalizado de tu caso</p>
          </div>
        </div>
      </div>
    </section>
  );
}