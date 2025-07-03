"use client";
import { useEffect, useState } from 'react'
import React from "react";
import { ShootingStars } from "@/components/ui/ShootingStars";

export function Hero() {


  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])





  return (


    <section className="relative h-screen flex flex-col items-center text-center px-4 overflow-hidden text-white bg-black">

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="stars absolute inset-0" />
      </div>

    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-black/70 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 md:py-6 max-w-7xl mx-auto">
        <div className="border-4 border-purple-500 rounded-full bg-gray-900 bg-opacity-30 py-2 px-6 ml-20 animate-up-down">
          <h1 className="text-purple-500 text-3xl font-bold">
            Lid.<span className="text-purple-900">Dev</span>
          </h1>
        </div>

        {!menuOpen && (
          <button
            className="md:hidden text-4xl text-purple-900"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            &#9776;
          </button>
        )}

        <nav
          className={`
            ${menuOpen ? 'flex' : 'hidden'}
            md:flex gap-6 font-semibold transition-all duration-300
            text-white md:text-white
            ${menuOpen ? 'fixed inset-0 flex-col justify-center items-center bg-black/90 z-[9999]' : ''}
            md:static md:bg-black/40 md:backdrop-blur-md md:rounded-lg md:flex-row md:relative
          `}
          style={menuOpen ? { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' } : {}}
        >
          {menuOpen && (
            <button
              className="absolute top-6 right-6 text-4xl text-purple-400 md:hidden"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
          )}

          <a
            href="#inicio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-400 transition-colors text-2xl md:text-base my-4 md:my-0"
          >
            Início
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-400 transition-colors text-2xl md:text-base my-4 md:my-0"
          >
            Sobre
          </a>
          <a
            href="#portfolio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-400 transition-colors text-2xl md:text-base my-4 md:my-0"
          >
            Portfólio
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-400 transition-colors text-2xl md:text-base my-4 md:my-0"
          >
            Depoimentos
          </a>
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="hover:text-purple-400 transition-colors text-2xl md:text-base my-4 md:my-0"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>



      <div className="relative z-10 flex flex-col justify-center items-center mt-72">
        <h2 id='inicio' className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Sua presença online começa aqui
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
          Desenvolvimento de sites profissionais, landing pages, lojas virtuais e presença digital com identidade forte.
        </p>
        <div>
          <a
            href="/contato"
            className="mt-8 inline-block bg-purple-600 hover:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Solicitar Orçamento
          </a>
          <a
            href="/portfolio"
            className="mt-8 inline-block ml-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Saiba Mais
          </a>
        </div>
      </div>


      <ShootingStars
        starColor="#A855F7"
        trailColor="#7C3AED"
        minSpeed={15}
        maxSpeed={30}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#D946EF"
        trailColor="#9333EA"
        minSpeed={12}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#9333EA"
        trailColor="#D946EF"
        minSpeed={18}
        maxSpeed={35}
        minDelay={1500}
        maxDelay={3500}
      />


      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 40px 70px, #fff, transparent),
            radial-gradient(2px 2px at 50px 160px, #ddd, transparent),
            radial-gradient(2px 2px at 90px 40px, #fff, transparent),
            radial-gradient(2px 2px at 130px 80px, #fff, transparent),
            radial-gradient(2px 2px at 160px 120px, #ddd, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.4;
        }

        @keyframes twinkle {
          0% { opacity: 0.4; }
          50% { opacity: 0.8; }
          100% { opacity: 0.4; }
        }

        .animate-up-down {
          animation: up-down 2s ease-in-out infinite alternate;
        }

        @keyframes up-down {
          0% {
            transform: translate(-50%, 0);
          }
          100% {
            transform: translate(-50%, 20px);
          }
        }
      `}</style>
    </section>

  )
}
