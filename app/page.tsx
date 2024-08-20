import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

const Particles = dynamic(() => import("@/components/animation/Particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Mobile & Tablet Particles */}
      <Particles
        className="fixed left-0 top-0 -z-10 h-full w-full lg:hidden"
        quantity={60}
      />

      {/* Destop Particles */}
      <Particles
        className="fixed left-0 top-0 -z-10 hidden h-full w-full lg:block"
        quantity={140}
      />

      <section>
        <Hero />
      </section>

      <section>
        <Skills />
      </section>
    </>
  );
}
