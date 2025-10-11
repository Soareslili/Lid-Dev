import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href:"#about" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const SOCIAL = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/lidianesantossoares", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Soareslili", label: "GitHub" },
  { icon: SiTiktok, href: "https://www.tiktok.com/@seuusuario", label: "TikTok" }, 
  { icon: Mail, href: "mailto:lidianesantossoares2@gmail.com", label: "E-mail" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0C0C12] text-zinc-300">
     
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CB6CE6]/70 to-transparent" />

      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        
          <div className="text-center sm:text-left">
            <div className="text-xl font-extrabold tracking-tight text-white">Lid.Dev</div>
            <p className="text-sm text-zinc-400">Desenvolvedora Front-End</p>
          </div>

       
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

        
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
              >
                <Icon className="h-5 w-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <span className="rounded-full border border-[#CB6CE6]/40 bg-[#CB6CE6]/10 px-4 py-2 text-xs font-semibold text-[#EBD0F3] shadow-[0_10px_30px_rgba(203,108,230,.25)]">
            © {year} LIDIANE SANTOS SOARES
          </span>
        </div>
      </div>
    </footer>
  );
}
