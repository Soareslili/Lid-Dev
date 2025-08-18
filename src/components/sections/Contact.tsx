// app/components/ContactSection.tsx  (ou src/components/ContactSection.tsx)
import React from "react";
import { MessageCircle, Linkedin, Github} from "lucide-react";
import { SiTiktok } from "react-icons/si";

type Item = {
  icon: React.ElementType;
  title: string;
  href: string;
  aria: string;
  external?: boolean;
};

const PHONE_E164 = "5511948739869";

const WHATSAPP = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
  "Olá! Vi seu portfólio e gostaria de solicitar um orçamento."
)}`;



const LINKEDIN = "https://www.linkedin.com/in/lidianesantossoares";
const GITHUB = "https://github.com/Soareslili";

const TIKTOK = "https://www.tiktok.com/@lili2012.2?_t=ZM-8yygjthktEc&_r=1";



const items: Item[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    href: WHATSAPP,
    aria: "Falar com a Lidiane pelo WhatsApp",
    external: true,
  },
   {
    icon: SiTiktok,
    title: "TikTok",
    href: TIKTOK,
    aria: "Visitar o TikTok da Lidiane",
    external: true,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    href: LINKEDIN,
    aria: "Visitar o LinkedIn da Lidiane",
    external: true,
  },
  {
    icon: Github,
    title: "GitHub",
    href: GITHUB,
    aria: "Visitar o GitHub da Lidiane",
    external: true,
  },
];

function ContactIcons() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, href, aria, external }) => (
        <a
          key={title}
          href={href}
          aria-label={aria}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group flex flex-col items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(252, 182, 229, 0.18)]"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
            <Icon className="h-6 w-6 text-white" />
          </span>

          <div className="text-center leading-tight text-white">
            <p className="font-semibold">{title}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gradient-to-r from-[#150315] to-[#2d0124] py-20 text-white"
    >
    
      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-purple-700/10 blur-sm" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-purple-700/10 blur-sm" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-4xl md:text-5xl">
            Vamos criar seu site de impacto?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl">
            Fale comigo e receba um orçamento personalizado para o seu projeto.
          </p>
        </div>

        <ContactIcons />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          

        </div>
      </div>
    </section>
  );
}
