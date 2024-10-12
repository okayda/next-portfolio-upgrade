import Image from "next/image";

import GradientText from "../animation/GradientText";
import PulseLink from "../animation/PulseLink";

export default function HeroContent() {
  return (
    <div
      itemScope
      itemType="https://schema.org/Person"
      className="mt-40 border-b-4 border-dashed border-[#b49bff] pb-24"
    >
      <div className="md:grid md:grid-cols-2">
        <div className="lg-l:self-center">
          <div className="mb-6 flex xs:justify-center md:justify-start">
            <GradientText text="Jhon Que&ntilde;ano" />
          </div>

          <div className="mb-10 max-w-[460px] xs:mx-auto xs:mb-12 xs:text-center md:mx-0 md:max-w-[500px] md:text-left">
            <h1
              itemProp="name"
              className="mb-8 text-5xl font-bold text-gray-100 xs:mb-12 md-l:text-6xl"
            >
              <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
                Learning
              </span>{" "}
              things is my passion
            </h1>

            <p
              itemProp="description"
              className="border-l-4 border-l-[#B49BFF] pl-3 font-semibold text-gray-300 lg:text-lg"
            >
              During my High School (2023), I was considered one of the best
              coders by my teachers in the whole school at West Jefferson High
              School (US). I started learning how to code when I was 16 years
              old.
            </p>
          </div>

          <div className="flex max-w-[460px] font-semibold xs:mx-auto md:max-w-none">
            <PulseLink
              pulseColor="#FBBF24"
              className="bg-transparent tracking-wider"
            >
              <span className="bg-gradient-to-r from-purple-300 to-amber-400 bg-clip-text text-transparent">
                Résumé CV
              </span>
            </PulseLink>
          </div>
        </div>

        <Image
          itemProp="image"
          src="/hero.svg"
          className="hidden animate-spin-slow self-center md:block md:justify-self-end md-l:h-[400px] md-l:w-[400px] lg-l:h-[500px] lg-l:w-[500px] lg-l:justify-self-start xl-l:h-[570px] xl-l:w-[570px]"
          alt="Coding icons"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
