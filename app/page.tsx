import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

const Particles = dynamic(() => import("@/components/animation/Particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Particles
        className="-z-5 fixed left-0 top-0 h-full w-full"
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
