import React from 'react';

export default function Servicios() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-eco-600 font-bold text-sm tracking-wider uppercase bg-eco-100 px-3 py-1 rounded-full">Portafolio</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Nuestros Servicios Ambientales</h2>
        <p className="text-slate-600">Soluciones tecnológicas y operativas diseñadas para acelerar la transición ecológica de ciudades y empresas.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:border-eco-300 transition">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-eco-100 text-eco-700 p-4 rounded-xl text-xl">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Gestión de Puntos limpios</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">Mapeo en tiempo real de estaciones de reciclaje y gestión logística optimizada para recolección de materiales aprovechables.</p>
          <ul className="space-y-2 text-slate-700 font-medium">
            <li className="flex items-center"><i className="fa-solid fa-check text-eco-600 mr-2"></i> Separación de RAEE (Residuos Electrónicos)</li>
            <li className="flex items-center"><i className="fa-solid fa-check text-eco-600 mr-2"></i> Certificados de disposición final</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:border-eco-300 transition">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-eco-100 text-eco-700 p-4 rounded-xl text-xl">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Consultoría de Huella Verde</h3>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">Evaluación integral de impacto ambiental para organizaciones, calculando emisiones de gases de efecto invernadero y planes de mitigación.</p>
          <ul className="space-y-2 text-slate-700 font-medium">
            <li className="flex items-center"><i className="fa-solid fa-check text-eco-600 mr-2"></i> Auditorías energéticas y de residuos</li>
            <li className="flex items-center"><i className="fa-solid fa-check text-eco-600 mr-2"></i> Estrategias corporativas Cero Residuos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}