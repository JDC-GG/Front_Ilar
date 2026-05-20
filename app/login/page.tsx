"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";

const serifFont = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function LoginPage() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Intento de login:", { correo, contrasena });
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#667c66]">
      {/* COLUMNA IZQUIERDA: Mensaje de Bienvenida */}
      <div className="md:w-1/2 w-full flex flex-col justify-center p-8 md:p-16 relative text-white min-h-[40vh] md:min-h-screen">
        {/* Logo flotante arriba a la izquierda */}
        <div className="absolute top-4 left-4 bg-white p-1 shadow-md rounded-sm">
          <Image src="/logoILAR.jpg" alt="Logo ILAR" width={60} height={60} className="w-12 h-12 object-contain" />
        </div>

        {/* Texto de Bienvenida basado en tu mockup */}
        <div className="max-w-md mx-auto md:mx-0 md:pl-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            Bienvenidos a Hoteles Ilar
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify font-light">
            una empresa dedicada a ofrecer soluciones de alojamiento de alta calidad, combinando confort, seguridad y una atención excepcional. Nos especializamos en brindar experiencias memorables tanto para viajeros de negocios como de turismo, garantizando espacios modernos, funcionales y un servicio óptimo que supera las expectativas de nuestros huéspedes en cada estadía.
          </p>
        </div>
      </div>

      {/* COLUMNA DERECHA: Formulario de Ingreso */}
      <div className="md:w-1/2 w-full bg-[#f4ebe6] flex flex-col justify-center items-center p-8 md:p-16 border-t md:border-t-0 md:border-l border-black/10">
        <div className="w-full max-w-md flex flex-col items-center">
          <h1 className={`text-[#7c7470] text-4xl tracking-wider mb-2 ${serifFont.className}`}>
            Registro
          </h1>

          <p className="text-gray-400 text-sm mb-12">
            NO tienes cuenta?{" "}
            <Link href="/registro" className="text-[#f1a84f] hover:underline font-medium">
              Crear Cuenta
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-8">
            {/* Campo Correo */}
            <div className="flex flex-col">
              <label className="text-[#f1a84f] text-center font-medium mb-1">Correo</label>
              <input
                type="email"
                placeholder="maria@gmail.com"
                className="bg-transparent border-b-2 border-gray-800 text-center text-gray-600 focus:outline-none focus:border-[#f1a84f] py-1 transition"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            {/* Campo Contraseña */}
            <div className="flex flex-col">
              <label className="text-[#f1a84f] text-center font-medium mb-1">Contraseña</label>
              <input
                type="password"
                placeholder="Minimo 8 Caracteres"
                className="bg-transparent border-b-2 border-gray-800 text-center text-gray-600 focus:outline-none focus:border-[#f1a84f] py-1 transition"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>

            {/* Botón Ingresar */}
            <button
              type="submit"
              className="w-full bg-[#051c0c] hover:bg-[#0a2f16] text-white font-medium py-3 px-6 mt-4 shadow-md transition duration-300 text-lg tracking-wider lowercase"
            >
              ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}