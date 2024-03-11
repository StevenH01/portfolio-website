import React from "react";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-2-5xl">
      <HomeSection />
      <About />
      <Projects />
    </main>
  );
}
