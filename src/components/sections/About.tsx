"use client";

import React from "react";
import Lidiane from "@/assets/Lidiane.jpg";
import Image from "next/image";

export function About() {
    return (
        <section
            id="about"
            className="bg-black text-white min-h-screen p-4 md:p-8 overflow-y-scroll scrollbar-none"
            style={{ scrollSnapType: "y mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
            <div className="h-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                <div className="flex flex-col justify-center items-center w-full md:max-w-2xl md:ml-30">
                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-700 to-purple-400 bg-[length:200%_200%] animate-gradient-x mb-8 text-center"
                        data-aos="fade-up"
                    >
                        Sobre mim
                    </h2>

                    <p
                        className="text-lg leading-relaxed  text-transparent bg-clip-text bg-gradient-to-r from-purple-900  to-purple-400 bg-[length:400%_100%] animate-gradient-flow hover:text-white hover:bg-none transition-colors duration-500 text-center max-w-3xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Muito prazer! Sou Lidiane — desenvolvedora web especializada em criar sites modernos, rápidos e visualmente encantadores.
                        Acredito que cada negócio tem uma essência única, e o meu trabalho é transformá-la em uma presença digital marcante.
                    </p>

                    <p
                        className="text-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-400 bg-[length:400%_100%] animate-gradient-flow hover:text-white hover:bg-none transition-colors duration-500 text-center max-w-3xl mx-auto mt-6"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Com foco em design inteligente e desenvolvimento eficiente, entrego soluções personalizadas que realmente conectam marcas ao seu público.
                        Se você busca um site que impressiona, comunica com clareza e atrai mais clientes, estou pronta para te ajudar.
                        Vamos dar vida ao seu projeto?
                    </p>

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
                            animation: gradient-flow 4s ease-in-out infinite;
                        }
                    `}</style>


                </div>

                <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[600px] mr-30 mt-10 rounded-3xl overflow-hidden shadow-lg">
                    <Image
                        src={Lidiane}
                        alt="Lidiane"
                        className="object-cover w-full h-full brightness-75 hover:brightness-100 transition duration-500"
                        priority
                        fill
                        style={{ objectPosition: "center" }}
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none" />
                </div>
            </div>


        </section>
    );
}

<style jsx global>{`
        #about::-webkit-scrollbar {
            display: none;
        }
    `}</style>
