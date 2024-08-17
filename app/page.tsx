import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";

const Particles = dynamic(() => import("@/components/animation/Particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Particles
        className="fixed left-0 top-0 -z-50 h-full w-full"
        quantity={140}
        ease={80}
        color={"#FFF"}
        refresh
      />

      <section>
        <Hero />
      </section>
    </>
  );
}
