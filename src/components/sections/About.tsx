"use client";

import React from "react";
import Image from "next/image";
import Lidiane from "../../../public/assets/Lidiane.jpg";
import { NotePencil, DeviceMobileCamera, Code, BugBeetle, RocketLaunch, Wrench } from "phosphor-react";

import { ScrollProgress } from "@/components/sections/ScrollProgress";
import { TextGradientScroll } from "@/components/sections/text-gradient-scroll";

const etapas = [
  {
    titulo: 'Briefing',
    descricao: 'Reunião inicial com o cliente para entender o escopo do projeto, público-alvo e objetivos.',
    icone: <NotePencil size={32} className="text-purple-400" />
  },
  {
    titulo: 'Wireframe',
    descricao: 'Desenho da estrutura visual do site, focando na experiência do usuário. Utilizando Figma, Canva e Photoshop.',
    icone: <DeviceMobileCamera size={32} className="text-purple-400" />
  },
  {
    titulo: 'Desenvolvimento',
    descricao: 'Código front-end e back-end baseado nas tecnologias mais adequadas ao projeto.',
    icone: <Code size={32} className="text-purple-400" />
  },
  {
    titulo: 'Teste',
    descricao: 'Validação de funcionalidades, testes multiplataforma e correções de bugs.',
    icone: <BugBeetle size={32} className="text-purple-400" />
  },
  {
    titulo: 'Lançamento',
    descricao: 'Publicação oficial do site, configurações extras e suporte final ao cliente.',
    icone: <RocketLaunch size={32} className="text-purple-400" />
  },
  {
    titulo: 'Ajustes Finais',
    descricao: 'Após o lançamento, realizamos ajustes pontuais, otimizações de SEO e orientações de uso para garantir o sucesso do projeto.',
    icone: <Wrench size={32} className="text-purple-400" />
  }
];

export function About() {
  return (
    <>
      <ScrollProgress />

      <section id="about" className="bg-black text-white min-h-screen p-4 md:px-20 md:py-12 overflow-hidden">
        <div className="h-full flex flex-col md:flex-row items-center justify-between gap-12 mt-40 mb-50">
        
          <div className="flex flex-col items-start text-left max-w-3xl" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-700 to-purple-400 animate-gradient-x mb-6">
              Sobre mim
            </h2>

            <div className="space-y-6 text-xl leading-relaxed text-white">
              <TextGradientScroll text="Muito prazer! Sou Lidiane — desenvolvedora web especializada em criar sites modernos, rápidos e visualmente encantadores. Acredito que cada negócio tem uma essência única, e o meu trabalho é transformá-la em uma presença digital marcante." />

              <TextGradientScroll text="Com foco em design inteligente e desenvolvimento eficiente, entrego soluções personalizadas que realmente conectam marcas ao seu público. Se você busca um site que impressiona, comunica com clareza e atrai mais clientes, estou pronta para te ajudar. Vamos dar vida ao seu projeto?" />
            </div>
          </div>

 
          <div className="relative w-[320px] h-[450px] md:w-[420px] md:h-[580px] rounded-3xl overflow-hidden shadow-lg" data-aos="fade-left">
            <Image
              src={Lidiane}
              alt="Lidiane"
              fill
              className="object-cover brightness-75 hover:brightness-100 transition duration-500"
              style={{ objectPosition: "center" }}
              priority
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none" />
          </div>
        </div>

   
        <div className="mt-20 w-full flex flex-col items-center py-12 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient-x mb-10 text-center">
            Etapas do Projeto
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full place-items-center">
            {etapas.map((etapa, idx) => (
              <div
                key={idx}
                className="w-full bg-zinc-800 p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <div className="flex items-center gap-3 mb-3">
                  {etapa.icone}
                  <h4 className="text-2xl font-semibold text-purple-400">{etapa.titulo}</h4>
                </div>
                <p className="text-zinc-300">{etapa.descricao}</p>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="mt-14 inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full shadow-lg hover:brightness-110 transition-all"
            data-aos="zoom-in-up"
            data-aos-delay={etapas.length * 500}
          >
            Solicitar Orçamento
          </a>

        
          <style jsx global>{`
            #about::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <style jsx>{`
            @keyframes gradient-flow {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
           .animate-gradient-flow {
  animation: gradient-flow 15s ease-in-out infinite;
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-flow 15s ease infinite;
}

          `}</style>
        </div>
      </section>
    </>
  );
}
