"use client";

import Image from "next/image";


const demoItems = [
  {
    image: "/assets/Barbearia.avif",
    text: "Barbearia Stilo",
    link: "https://barbearia-stilo-w7hq.vercel.app/",
  },
  {
    image: "/assets/bella.webp",
    text: "Bella Nails",
    link: "https://studio-bella-nails-kc3d.vercel.app/",
  },
  {
    image: "/assets/luna.png",
    text: "Luna Petshop",
    link: "https://luna-petshop-xbws.vercel.app/",
  },
  {
    image: "/assets/Dentista.png",
    text: "Sorriso Feliz Clínica",
    link: "https://sorriso-feliz-cl-nica.vercel.app/",
  },
  {
    image: "/assets/doceheloisa.avif",
    text: "Doce e mais Doce Heloisa",
    link: "https://projeto-doces-e-mais-doces-heloisa.vercel.app/",
  },
  {
    image: "/assets/Tattoo.png",
    text:  "Studio Tattoo Caveira",
    link:  "https://studio-tattoo-caveira-3q9z.vercel.app/" 
  },
  {
    image: "/assets/Kuro.png",
    text:  "Kuro Sushi",
    link:  "https://kuro-sushi-i2ih.vercel.app/" 
  },
   {
    image: "/assets/Advocacia.png",
    text:  "Ferraz Lima - Advocacia Associados",
    link:  "https://ferraz-lima.vercel.app/" 
  }

];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="w-full bg-black text-white py-20 px-4">
      <div className="container mx-auto px-4">
       
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Portfólio
          </h2>
          <p className="text-lg text-white mb-6 leading-relaxed max-w-2xl mx-auto">
            Explore meus projetos e veja como cada detalhe é planejado para transmitir identidade, destacar marcas e gerar resultados reais para os clientes.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {demoItems.map(({ image, text, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay={`${100 * (i + 1)}`}
              data-aos-duration="1200"
            >
           
              <Image
                src={image}
                alt={text}
                width={400}
                height={300}
                className="object-cover w-full h-64 md:h-90 group-hover:scale-105 transition-transform duration-500"
              />

             
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold text-center px-2">
                  {text}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
