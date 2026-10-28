import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-eco-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-eco-500 p-2 rounded-xl text-white shadow-md">
              <i className="fa-solid fa-seedling text-xl"></i>
            </div>
            <span className="font-extrabold text-2xl tracking-wide text-white">Eco<span className="text-eco-400">Conect</span></span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="hover:text-eco-300 transition duration-200">Inicio</Link>
            <Link to="/servicios" className="hover:text-eco-300 transition duration-200">Servicios</Link>
            <Link to="/sobre-nosotros" className="hover:text-eco-300 transition duration-200">Sobre Nosotros</Link>
            <Link to="/registro" className="bg-eco-600 hover:bg-eco-700 text-white px-4 py-2 rounded-xl shadow-sm transition">Registro</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-eco-950 px-4 pt-2 pb-4 space-y-2 border-t border-eco-800">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-eco-300">Inicio</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="block py-2 hover:text-eco-300">Servicios</Link>
          <Link to="/sobre-nosotros" onClick={() => setIsOpen(false)} className="block py-2 hover:text-eco-300">Sobre Nosotros</Link>
          <Link to="/registro" onClick={() => setIsOpen(false)} className="block py-2 text-eco-400 font-semibold">Registro</Link>
        </div>
      )}
    </nav>
  );
}