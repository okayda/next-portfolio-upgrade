import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

const Particles = dynamic(() => import("@/components/animation/Particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <Skills />
      </section>
    </>
  );
}
