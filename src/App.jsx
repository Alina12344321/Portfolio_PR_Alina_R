import React, { useState, useEffect } from 'react';
import { Play, ArrowDownRight, Star } from 'lucide-react';

// --- КОМПОНЕНТ ДЛЯ МЕДИА И ПЛЕЙСХОЛДЕРОВ ---
const MediaBox = ({ src, type = 'image', alt, className }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#111] text-[#F4F4F4] p-6 border-2 border-dashed border-[#F4F4F4]/30 text-center ${className}`}>
        <Star className="text-[#AFD9FF] mb-4 animate-spin-slow" size={32} />
        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#AFD9FF] mb-2">[ LOCAL ASSET PENDING ]</span>
        <span className="font-mono text-xs opacity-50 break-all">{src}</span>
      </div>
    );
  }

  if (type === 'video') {
    return (
      <video 
        src={src} 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={`object-cover ${className}`} 
        onError={() => setError(true)} 
      />
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`object-cover ${className}`} 
      onError={() => setError(true)} 
    />
  );
};

export default function App() {
  return (
    <>
      {/* СТИЛИ: Шрифты, Шум, Анимации */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap');
        
        :root {
          --c-red: #9B1D1D;
          --c-blue: #AFD9FF;
          --c-white: #F4F4F4;
          --c-black: #111111;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: var(--c-white);
          color: var(--c-black);
          font-family: 'Helvetica Neue', 'Helvetica', 'Futura', 'PT Sans', sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        /* Эффект шума на весь сайт */
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.35;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Анимация бегущей строки */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .text-huge {
          font-size: clamp(4rem, 15vw, 18rem);
          line-height: 0.8;
          letter-spacing: -0.04em;
        }
        
        .text-massive {
          font-size: clamp(3rem, 10vw, 12rem);
          line-height: 0.85;
          letter-spacing: -0.02em;
        }

        /* Убираем скроллбар для горизонтальных контейнеров */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Глобальный текстурный слой */}
      <div className="noise-overlay"></div>

      <div className="selection:bg-[#111] selection:text-[#AFD9FF]">
        
        {/* === HEADER === */}
        <header className="fixed top-0 w-full z-50 bg-[#9B1D1D] text-[#AFD9FF] border-b-4 border-[#111] flex flex-col md:flex-row justify-between uppercase font-bold tracking-widest text-xs md:text-sm transition-transform">
          <div className="p-3 md:p-5 border-b-4 md:border-b-0 md:border-r-4 border-[#111] flex items-center justify-center md:justify-start bg-[#9B1D1D] text-[#F4F4F4]">
            АЛИНА РОСТОВЦЕВА
          </div>
          <nav className="flex overflow-x-auto no-scrollbar md:flex-wrap w-full md:w-auto bg-[#9B1D1D]">
            <a href="#about" className="p-3 md:p-5 border-r-4 md:border-r-0 md:border-l-4 border-[#111] hover:bg-[#AFD9FF] hover:text-[#9B1D1D] transition-colors whitespace-nowrap flex-1 text-center md:flex-none">Обо мне</a>
            <a href="#works" className="p-3 md:p-5 border-r-4 md:border-r-0 md:border-l-4 border-[#111] hover:bg-[#AFD9FF] hover:text-[#9B1D1D] transition-colors whitespace-nowrap flex-1 text-center md:flex-none">Мои работы</a>
            <a href="#practice" className="p-3 md:p-5 border-r-4 md:border-r-0 md:border-l-4 border-[#111] hover:bg-[#AFD9FF] hover:text-[#9B1D1D] transition-colors whitespace-nowrap flex-1 text-center md:flex-none">Практика</a>
            <a href="#contact" className="p-3 md:p-5 md:border-l-4 border-[#111] hover:bg-[#AFD9FF] hover:text-[#9B1D1D] transition-colors whitespace-nowrap flex-1 text-center md:flex-none">Контакты</a>
          </nav>
        </header>

        {/* === SECTION 1: HERO === */}
        <section className="relative min-h-[90vh] bg-[#9B1D1D] flex flex-col justify-end overflow-hidden pt-40 pb-12">
          <div className="px-4 md:px-8 z-10 relative">
            <h2 className="text-[#AFD9FF] text-xl md:text-3xl font-bold uppercase mb-4 tracking-tight flex items-center gap-4">
              <ArrowDownRight size={32} />
              Мультимедийный дизайн / Арт-дирекшн / 3D
            </h2>
            <h1 className="text-huge font-bold uppercase text-[#F4F4F4] m-0">
              АЛИНА<br/>РОСТОВЦЕВА
            </h1>
          </div>
          
          {/* Бегущая строка */}
          <div className="absolute bottom-0 w-full bg-[#111] text-[#AFD9FF] py-3 overflow-hidden border-t-2 border-b-2 border-[#AFD9FF]">
            <div className="animate-marquee font-bold uppercase tracking-widest text-lg md:text-2xl flex items-center">
              <span>MULTIMEDIA DESIGN • INTERACTIVE ENVIRONMENTS • 3D MODELING • TYPOGRAPHY • CREATIVE DIRECTION •</span>
              <span className="ml-4">MULTIMEDIA DESIGN • INTERACTIVE ENVIRONMENTS • 3D MODELING • TYPOGRAPHY • CREATIVE DIRECTION •</span>
            </div>
          </div>
        </section>

        {/* === SECTION 2: ABOUT === */}
        <section id="about" className="bg-[#AFD9FF] py-24 md:py-40 px-4 md:px-8 border-b-4 border-[#111]">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Фото */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-[#9B1D1D] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              <MediaBox 
                src="IMG_5887.JPG" 
                alt="Алина Ростовцева" 
                className="w-full aspect-[3/4] object-cover grayscale contrast-125 border-4 border-[#111]"
              />
              <div className="absolute -top-10 -right-10 bg-[#F4F4F4] border-4 border-[#111] p-6 rounded-full animate-spin-slow hidden md:block">
                <Star size={48} className="text-[#9B1D1D]" fill="currentColor" />
              </div>
            </div>

            {/* Текст */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="text-4xl md:text-7xl font-bold text-[#9B1D1D] uppercase leading-none tracking-tighter mb-10">
                Создаю <br/>цифровую <br/>эстетику.
              </h3>
              <p className="text-xl md:text-3xl text-[#111] font-medium leading-tight mb-16">
                Студентка направления мультимедийного дизайна. Фокусируюсь на создании интерактивных сред, 3D-моделировании, проектировании визуальных интерфейсов и типографике.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Unreal Engine 5', 'Blender', 'GDevelop', 'Framer', 'Figma', 'CapCut', 'Photoshop'].map((skill, i) => (
                  <span key={i} className="px-6 py-3 border-2 border-[#111] text-[#111] uppercase font-bold tracking-wider hover:bg-[#9B1D1D] hover:text-[#F4F4F4] hover:border-[#9B1D1D] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* === SECTION 3: PROJECT 1 (3D) === */}
        <section id="works" className="bg-[#F4F4F4] py-24 md:py-40 px-4 md:px-8 border-b-4 border-[#111]">
          <div className="max-w-[1600px] mx-auto">
            <p className="text-[#9B1D1D] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-12 h-1 bg-[#9B1D1D]"></span> Проект 01 / Автотюнинг
            </p>
            <h2 className="text-massive font-bold text-[#111] uppercase mb-12">
              ALLYWOOD STUDIO
            </h2>
            <p className="text-2xl md:text-4xl max-w-4xl text-[#111]/80 leading-tight mb-20">
              Интерактивный 3D-конфигуратор автомобиля. Standalone-приложение на Unreal Engine 5 для визуализации и настройки тюнинга с динамическим освещением и детальной проработкой материалов.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <MediaBox src="1 страница.jpg" className="w-full aspect-[4/3] border-4 border-[#111]" />
              <div className="flex flex-col gap-8 md:gap-12">
                <MediaBox src="2 страница.jpg" className="w-full aspect-video border-4 border-[#111]" />
                <MediaBox src="24026_Ростовцева_Алина - шторки.jpg" className="w-full flex-grow object-cover border-4 border-[#111]" />
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 4: PROJECT 2 (TYPOGRAPHY) === */}
        <section className="bg-[#9B1D1D] py-24 md:py-40 px-4 md:px-8 text-[#F4F4F4] border-b-4 border-[#111]">
          <div className="max-w-[1600px] mx-auto">
            <p className="text-[#AFD9FF] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-12 h-1 bg-[#AFD9FF]"></span> Проект 02 / Графика
            </p>
            <h2 className="text-massive font-bold uppercase mb-20">
              ТИПОГРАФИКА <br/>& ПЛАКАТ
            </h2>
            
            {/* Асимметричная сетка (editorial layout) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <MediaBox src="326_4_Ростовцева_Алина_№3.jpg" className="w-full aspect-[3/4] md:aspect-square object-cover border-4 border-[#111]" />
              </div>
              <div className="md:col-span-4 flex flex-col gap-8">
                <MediaBox src="326_1_Ростовцева_Алина_№2.jpg" className="w-full aspect-square border-4 border-[#111]" />
                <MediaBox src="326_3_Ростовцева_Алина.jpg" className="w-full aspect-square border-4 border-[#111]" />
              </div>
              
              <div className="md:col-span-4 mt-8 md:mt-24">
                <MediaBox src="326_6_Ростовцева_Алина.jpg" className="w-full aspect-square border-4 border-[#111]" />
              </div>
              <div className="md:col-span-4 mt-8 md:mt-0">
                <MediaBox src="326_8_Ростовцева_Алина.jpg" className="w-full aspect-square border-4 border-[#111]" />
              </div>
              <div className="md:col-span-4 mt-8 md:mt-24">
                <MediaBox src="326_7_Ростовцева_Алина.jpg" className="w-full aspect-square border-4 border-[#111]" />
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 5: SUMMER PRACTICE === */}
        <section id="practice" className="bg-[#AFD9FF] py-24 md:py-40 px-4 md:px-8 border-b-4 border-[#111] overflow-hidden">
          <div className="max-w-[1600px] mx-auto">
            <p className="text-[#9B1D1D] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-12 h-1 bg-[#9B1D1D]"></span> Проект 03 / Искусство
            </p>
            <h2 className="text-massive font-bold text-[#111] uppercase mb-12">
              ЛЕТНЯЯ ПРАКТИКА: <br/>ЕКАТЕРИНБУРГ
            </h2>
            
            {/* Горизонтальный скролл-контейнер */}
            <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory">
              {[
                "IMG_7613.jpg", 
                "IMG_7622.jpg", 
                "IMG_7630 (2).jpg", 
                "IMG_7614.jpg", 
                "IMG_7619.jpg", 
                "IMG_7620.jpg"
              ].map((img, idx) => (
                <div key={idx} className="shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] snap-center">
                  <MediaBox src={img} className="w-full aspect-[4/5] object-cover border-4 border-[#111] shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:translate-y-[-10px] hover:shadow-[16px_16px_0px_0px_rgba(17,17,17,1)] transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION 6: VIDEO HIGHLIGHT === */}
        <section className="bg-[#111] py-24 md:py-40 px-4 md:px-8 border-b-4 border-[#111]">
          <div className="max-w-[1600px] mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-bold text-[#F4F4F4] uppercase mb-16 text-center">
              Анимация & Материалы
            </h2>
            <div className="w-full max-w-5xl aspect-video border-4 border-[#F4F4F4] p-2 md:p-4 bg-[#F4F4F4]/5">
               <MediaBox type="video" src="0001-0110.mp4" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* === SECTION 7: FOOTER === */}
        <section id="contact" className="bg-[#9B1D1D] text-[#F4F4F4] py-32 px-4 md:px-8 flex flex-col items-center justify-center min-h-[70vh]">
          <h2 className="text-huge font-bold uppercase text-center leading-[0.8] mb-12 hover:text-[#AFD9FF] transition-colors cursor-pointer">
            LET'S<br/>COLLAB<br/>ORATE
          </h2>
          
          <a 
            href="mailto:rostowczewa.alina@gmail.com" 
            className="text-2xl md:text-5xl border-b-4 border-[#AFD9FF] pb-2 text-[#AFD9FF] hover:text-[#F4F4F4] hover:border-[#F4F4F4] transition-colors font-bold tracking-tight"
          >
            rostowczewa.alina@gmail.com
          </a>
          
          <div className="mt-32 w-full max-w-[1600px] flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest opacity-60">
            <p>© {new Date().getFullYear()} ALINA ROSTOVTSEVA</p>
            <p className="mt-4 md:mt-0">DESIGNED WITH TRENDS</p>
          </div>
        </section>

      </div>
    </>
  );
}