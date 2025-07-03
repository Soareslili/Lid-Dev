"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <About />
    </>
  );
}
