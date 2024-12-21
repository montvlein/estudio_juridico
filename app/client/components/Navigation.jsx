"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Scale } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Estudio Jurídico</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/laboral" className="text-gray-700 hover:text-blue-600">Derecho Laboral</Link>
            <Link href="/transito" className="text-gray-700 hover:text-blue-600">Accidentes de Tránsito</Link>
            <Link href="/contacto" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Consulta Gratuita
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/laboral" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Derecho Laboral
            </Link>
            <Link href="/transito" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
              Accidentes de Tránsito
            </Link>
            <Link href="/contacto" className="block px-3 py-2 text-blue-600 font-medium">
              Consulta Gratuita
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}