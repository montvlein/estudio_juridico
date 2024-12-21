import { Scale, Car } from 'lucide-react';

export function PracticeAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Áreas de Práctica</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg flex flex-col justify-center items-center">
            <Scale className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Derecho Laboral</h3>
            <ul className="space-y-2 self-start">
              <li>✓ Despidos injustificados</li>
              <li>✓ Accidentes laborales</li>
              <li>✓ Discriminación laboral</li>
              <li>✓ Acoso laboral</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg flex flex-col justify-center items-center">
            <Car className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Accidentes de Tránsito</h3>
            <ul className="space-y-2 self-start">
              <li>✓ Colisiones vehiculares</li>
              <li>✓ Atropellos</li>
              <li>✓ Daños materiales</li>
              <li>✓ Reclamos al seguro</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}