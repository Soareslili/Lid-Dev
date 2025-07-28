

import { Component } from "../../components/ui/circulargallery";

const demoItems = [
  {
    image:`/assets/Barbearia.avif`,
    text: "Barbearia Stilo",
    link: "https://barbearia-stilo-w7hq.vercel.app/",
  },
  {
    image: `/assets/bella.webp`,
    text: "Bella Nails",
    link: "https://studio-bella-nails-kc3d.vercel.app/",
  },
  {
    image: `/assets/luna.png`,
    text: "Luna Petshop",
    link: "https://luna-petshop-xbws.vercel.app/",
  },
  {
    image: `/assets/Dentista.png`,
    text: "Sorriso Feli Clínica",
    link: "https://sorriso-feliz-cl-nica.vercel.app/",
  },
  {
    image: `/assets/doceheloisa.avif`,
    text: "Doce e mais Doce Heloisa",
    link: "https://projeto-doces-e-mais-doces-heloisa.vercel.app/",
  },
  
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
   
        <h2 className="text-5xl font-bold mb-10">Portfólio</h2>

   
        <div className="h-[80vh] overflow-hidden relative">
          <Component
            items={demoItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>
      </div>
    </section>
  );
};
