"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { PortfolioSection } from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";









export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <PortfolioSection/>
    <Contact/>
    <Footer />
     
    
  
    </>
  );
}
