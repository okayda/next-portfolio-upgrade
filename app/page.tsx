import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";

const Particles = dynamic(() => import("@/components/animation/Particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Particles
        className="-z-5 fixed left-0 top-0 h-full w-full"
        quantity={130}
        ease={80}
        color={"#FFF"}
      />

      <section>
        <Hero />
      </section>
    </>
  );
}
