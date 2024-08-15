import dynamic from "next/dynamic";

const BlackHole = dynamic(() => import("@/components/animation/BlackHole"), {
  ssr: false,
});

export default function Home() {
  return <></>;
}
