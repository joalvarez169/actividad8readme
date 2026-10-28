import React from 'react';

export default function SobreNosotros() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="text-eco-600 font-bold text-sm uppercase tracking-wider bg-eco-100 px-3 py-1 rounded-full">Quiénes Somos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Innovación tecnológica al servicio de la Tierra</h2>
          <p className="text-slate-600 leading-relaxed">
            EcoConect nace con la convicción de que la tecnología y la comunidad son el binomio perfecto para transformar el futuro ambiental de nuestra región.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Integramos herramientas modernas de desarrollo web y bases de datos descentralizadas para garantizar que cada iniciativa de reciclaje y educación tenga un impacto medible.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=700&q=80" 
            alt="Equipo sostenible" 
            className="rounded-2xl shadow-xl w-full h-[350px] object-cover" 
          />
        </div>
      </div>
    </div>
  );
}