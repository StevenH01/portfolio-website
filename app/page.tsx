"use client"

import React from "react";
import HomeSection from "@/app/components/HomeSection";
import About from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import Hobbies from "./components/Hobbies";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-2-5xl">
      <HomeSection />
      <About />
      <Projects />
      <Hobbies />
    </main>
  );
}
