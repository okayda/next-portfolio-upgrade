import React from "react";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <React.Fragment>
      <section>
        <Hero />
      </section>

      <section>
        <Skills />
      </section>
    </React.Fragment>
  );
}
