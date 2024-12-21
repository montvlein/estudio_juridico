import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+1234567890" className="hover:text-blue-400">123-456-7890</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contacto@estudio.com" className="hover:text-blue-400">
                  contacto@estudio.com
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Av. Principal 123, Ciudad</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Áreas de Práctica</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/laboral" className="hover:text-blue-400">Derecho Laboral</Link>
              </li>
              <li>
                <Link href="/transito" className="hover:text-blue-400">Accidentes de Tránsito</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horario de Atención</h3>
            <p className="mb-2">Lunes a Viernes</p>
            <p className="mb-4">9:00 - 18:00</p>
            <Link
              href="/contacto"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-block"
            >
              Agenda tu Consulta
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Estudio Jurídico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}