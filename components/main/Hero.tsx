import dynamic from "next/dynamic";
import HeroContent from "../sub/HeroContent";

const BlackHole = dynamic(() => import("@/components/animation/BlackHole"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="relative">
      <BlackHole />

      <HeroContent />
    </div>
  );
}
