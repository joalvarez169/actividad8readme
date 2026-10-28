import React from 'react';
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="space-y-16 pb-12">
      {/* sección superior */}
      <section className="relative bg-gradient-to-br from-eco-900 via-eco-800 to-eco-950 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="bg-eco-700/60 text-eco-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider border border-eco-500/30">
              <i className="fa-solid fa-earth-americas mr-2"></i>Comunidad Sostenible Global
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Únete a la <span className="text-eco-400">Revolución Ambiental</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Conectamos iniciativas de reciclaje, proyectos de reforestación y ciudadanos comprometidos en una sola plataforma inteligente.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/registro" className="bg-eco-500 hover:bg-eco-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition duration-200 flex items-center space-x-2">
                <span>Registrar Iniciativa</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/servicios" className="bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-xl border border-slate-700 transition">
                Explorar Servicios
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-eco-500 to-eco-300 rounded-2xl blur-lg opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80" 
              alt="Sostenibilidad ambiental" 
              className="relative rounded-2xl shadow-2xl w-full h-[380px] object-cover border border-eco-500/20" 
            />
          </div>
        </div>
      </section>

      {/* funciones */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300 group">
            <div className="bg-eco-100 text-eco-600 w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-eco-600 group-hover:text-white transition">
              <i className="fa-solid fa-recycle"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Puntos de Acopio Inteligentes</h3>
            <p className="text-slate-600 leading-relaxed">Localiza contenedores cercanos para residuos sólidos, electrónicos y orgánicos con trazabilidad digital.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300 group">
            <div className="bg-eco-100 text-eco-600 w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-eco-600 group-hover:text-white transition">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Educación y Talleres</h3>
            <p className="text-slate-600 leading-relaxed">Capacitaciones abiertas sobre economía circular, reducción de huella de carbono y compostaje casero.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition duration-300 group">
            <div className="bg-eco-100 text-eco-600 w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-eco-600 group-hover:text-white transition">
              <i className="fa-solid fa-users-line"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Comunidad Activa</h3>
            <p className="text-slate-600 leading-relaxed">Colabora con líderes ambientales locales y participa en jornadas masivas de limpieza y reforestación.</p>
          </div>
        </div>
      </section>
    </div>
  );
}