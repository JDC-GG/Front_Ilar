"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const serifFont = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    aceptarTerminos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de registro:", formData);
    // Aquí conectarás con tu API de Kotlin/C# más adelante
  };

  return (
    <div className="min-h-screen bg-[#667c66] flex flex-col justify-center items-center p-4 relative">
      {/* Logo flotante arriba a la izquierda como el mockup */}
      <div className="absolute top-4 left-4 bg-white p-1 shadow-md rounded-sm">
        <Image src="/logoILAR.jpg" alt="Logo ILAR" width={60} height={60} className="w-12 h-12 object-contain" />
      </div>

      {/* Contenedor del Formulario (Tono crema/arena) */}
      <div className="bg-[#f4ebe6] w-full max-w-xl p-8 md:p-12 shadow-2xl rounded-sm flex flex-col items-center">
        <h1 className={`text-[#7c7470] text-3xl md:text-4xl tracking-wider mb-2 uppercase ${serifFont.className}`}>
          Crear Cuenta
        </h1>
        
        <p className="text-gray-500 text-sm mb-8">
          ya tiene cuenta{" "}
          <Link href="/login" className="text-[#f1a84f] hover:underline font-medium">
            ingresar
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6">
          {/* Fila Nombre y Apellido */}
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-md">
            <div className="flex flex-col flex-1">
              <label className="text-[#f1a84f] text-center md:text-left font-medium mb-1 text-sm md:text-base">Nombre</label>
              <input
                type="text"
                placeholder="Maria"
                className="bg-transparent border-b-2 border-gray-800 text-center text-gray-600 focus:outline-none focus:border-[#f1a84f] py-1 transition"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[#f1a84f] text-center md:text-left font-medium mb-1 text-sm md:text-base">Apellido</label>
              <input
                type="text"
                placeholder="Garcia"
                className="bg-transparent border-b-2 border-gray-800 text-center text-gray-600 focus:outline-none focus:border-[#f1a84f] py-1 transition"
                value={formData.apellido}
                onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Correo */}
          <div className="flex flex-col w-full max-w-md">
            <label className="text-[#f1a84f] text-center font-medium mb-1">Correo</label>
            <input
              type="email"
              placeholder="maria@gmail.com"
              className="bg-transparent border-b-2 border-gray-800 text-center text-gray-600 focus:outline-none focus:border-[#f1a84f] py-1 transition"
              value={formData.correo}
              onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              required
            />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col w-full max-w-md">
            <label className="text-[#f1a84f] text-center font-medium mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="Minimo 8 Caracteres"
              className="bg-transparent border-b-2 border-gray-800 text-center text-gray-600 focus:outline-none focus:border-[#f1a84f] py-1 transition"
              value={formData.contrasena}
              onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
              required
            />
          </div>

          {/* Checkbox Términos y Condiciones */}
          <div className="flex items-center space-x-2 w-full max-w-md pt-2">
            <input
              type="checkbox"
              id="terminos"
              className="w-4 h-4 accent-[#f1a84f] cursor-pointer"
              checked={formData.aceptarTerminos}
              onChange={(e) => setFormData({ ...formData, aceptarTerminos: e.target.checked })}
              required
            />
            <label htmlFor="terminos" className="text-gray-400 text-xs md:text-sm cursor-pointer select-none">
              Acepto <span className="text-[#f1a84f] font-semibold">terminos y condiciones</span>
            </label>
          </div>

          {/* Botón Crear Cuenta */}
          <button
            type="submit"
            className="w-full max-w-md bg-[#051c0c] hover:bg-[#0a2f16] text-white font-medium py-3 px-6 mt-4 shadow-md transition duration-300 text-lg tracking-wider"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  );
}