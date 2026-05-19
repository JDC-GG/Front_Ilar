import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

// Usamos Playfair Display para el "Tu hogar lejos de casa" que se ve elegante y Serif como tu mockup
const serifFont = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 1. Cabecera (Barra Superior Verde Musgo) */}
      <header className="bg-[#667c66] text-white p-4 flex items-center justify-between shadow-sm h-20 flex-shrink-0">
        {/* Logo de cabecera */}
        <div className="bg-white p-1 rounded-sm">
          <Image 
            src="/logoILAR.jpg" 
            alt="Logo ILAR"
            width={60} 
            height={60} 
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Botones de Cabecera */}
        <div className="flex gap-4">
          <Link href="/login">
            <button className="bg-white text-[#667c66] px-5 py-2 rounded-sm font-semibold hover:bg-gray-100 transition">
              Ingresar
            </button>
          </Link>
          <Link href="/registro">
            <button className="bg-white text-[#667c66] px-5 py-2 rounded-sm font-semibold hover:bg-gray-100 transition">
              Registro
            </button>
          </Link>
        </div>
      </header>

      {/* 2. Cuerpo (Hero Section Dividido) */}
      <main className="flex flex-col lg:flex-row flex-grow h-[calc(100vh-80px)] w-full overflow-hidden">
        
        {/* Carril Izquierdo (Logo Grande) */}
        <div className="lg:w-1/3 w-full flex items-center justify-center p-8 bg-white border-r border-gray-100 flex-shrink-0">
          <Image 
            src="/logoILAR.jpg" 
            alt="Logo ILAR Club de Bienestar"
            width={400} 
            height={400}
            className="w-full max-w-sm object-contain"
            priority
          />
        </div>

        {/* Carril Derecho (Contenedor de la Habitación con posición relativa explícita y tamaño forzado) */}
        <div className="lg:w-2/3 w-full h-full relative min-h-[300px] bg-gray-100">
          {/* Imagen de fondo de la habitación */}
          <Image 
            src="/habitacion.jpg" 
            alt="Habitación de hotel acogedora"
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover"
            priority
          />

          {/* Texto Superpuesto - Ajustado al mockup exacto */}
          <div className="absolute inset-0 flex items-start justify-center pt-16 lg:pt-24 z-10 bg-black/10">
            <h1 className={`text-white text-4xl md:text-6xl lg:text-7xl text-center px-6 tracking-wide drop-shadow-md ${serifFont.className}`}>
              Tu hogar lejos de casa
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}