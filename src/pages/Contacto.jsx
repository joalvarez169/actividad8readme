import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [usuarios, setUsuarios] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const usuariosCollection = collection(db, 'usuarios');

  const obtenerRegistros = async () => {
    try {
      const data = await getDocs(usuariosCollection);
      setUsuarios(data.docs.map((docSnap) => ({ ...docSnap.data(), id: docSnap.id })));
    } catch (e) {
      console.error("Error al obtener registros:", e);
    }
  };

  useEffect(() => {
    obtenerRegistros();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email) {
      setError('Por favor completa los campos obligatorios (Nombre y Correo).');
      setExito('');
      return;
    }
    setError('');
    try {
      if (editId) {
        await updateDoc(doc(db, 'usuarios', editId), { ...form, actualizadaEn: new Date() });
        setEditId(null);
        setExito('¡Registro actualizado con éxito en Firebase!');
      } else {
        await addDoc(usuariosCollection, { ...form, creadoEn: new Date() });
        setExito('¡Formulario enviado y guardado en Firebase con éxito!');
      }
      setForm({ nombre: '', email: '', mensaje: '' });
      obtenerRegistros();
    } catch (err) {
      console.error("Error al guardar en Firebase:", err);
      setError('Ocurrió un error al conectar con Firebase.');
    }
  };

  const eliminarRegistro = async (id) => {
    try {
      await deleteDoc(doc(db, 'usuarios', id));
      obtenerRegistros();
    } catch (err) {
      console.error("Error al eliminar:", err);
    }
  };

  const prepararEdicion = (user) => {
    setForm({ nombre: user.nombre, email: user.email, mensaje: user.mensaje || '' });
    setEditId(user.id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Formulario de Registro</h2>
        <p className="text-gray-600 mb-6">Completa tus datos para formar parte de la comunidad EcoConnect.</p>
        
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}
        {exito && <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-4 text-sm">{exito}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Nombre completo *</label>
            <input 
              type="text" 
              name="nombre" 
              value={form.nombre} 
              onChange={handleChange} 
              placeholder="Ej. Usuario Ejemplo" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Correo electrónico *</label>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="usuario@ejemplo.com" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Mensaje o iniciativa</label>
            <textarea 
              name="mensaje" 
              value={form.mensaje} 
              onChange={handleChange} 
              placeholder="Describe tu propuesta..." 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600 outline-none">
            </textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#1b7a43] text-white p-3 rounded-lg font-semibold hover:bg-green-800 transition">
            {editId ? 'Actualizar Datos' : 'Completar Registro'}
          </button>
        </form>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Registros Almacenados en Firebase ({usuarios.length})</h3>
        {usuarios.length === 0 ? (
          <p className="text-gray-500 text-sm">No hay registros guardados todavía.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {usuarios.map((user) => (
              <li key={user.id} className="flex justify-between items-center py-3">
                <div>
                  <span className="font-semibold text-gray-800">{user.nombre}</span>
                  <span className="text-gray-500 text-sm ml-2">({user.email})</span>
                  {user.mensaje && <p className="text-gray-600 text-sm mt-1">{user.mensaje}</p>}
                </div>
                <div className="flex space-x-3">
                  <button onClick={() => prepararEdicion(user)} className="text-blue-600 font-medium hover:underline text-sm">Editar</button>
                  <button onClick={() => eliminarRegistro(user.id)} className="text-red-600 font-medium hover:underline text-sm">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}