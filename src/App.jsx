import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/registro" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}