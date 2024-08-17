import Image from "next/image";

import { MailCheck, FileCheck2 } from "lucide-react";
import GradientText from "../animation/GradientText";
import PulseLink from "../animation/PulseLink";

export default function HeroContent() {
  return (
    <div className="mt-40">
      <div className="md:grid md:grid-cols-2">
        <div className="lg-l:self-center">
          <div className="mb-6 flex xs:justify-center md:justify-start">
            <GradientText text="Jhon Que&ntilde;ano" />
          </div>

          <div className="mb-10 max-w-[460px] xs:mx-auto xs:mb-12 xs:text-center md:mx-0 md:max-w-[500px] md:text-left">
            <h1 className="mb-8 text-5xl font-bold text-gray-100 xs:mb-12 md-l:text-6xl">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
                interested
              </span>{" "}
              in what I&apos;m doing
            </h1>

            <p className="border-l-4 border-l-[#B49BFF] pl-3 font-semibold text-gray-300 lg:text-lg">
              During my High School (2023), I was considered one of the best
              coder by my teachers in the whole school at West Jefferson High
              School (US). I started learning how to code when I was 16 years
              old.
            </p>
          </div>

          <div className="flex max-w-[460px] flex-col items-start gap-4 font-semibold xs:mx-auto md:max-w-none">
            <span className="flex items-center gap-2 rounded-md border border-[#B49BFF]/70 bg-gradient-to-r from-purple-300 to-amber-400 bg-clip-text px-[14px] py-2 tracking-wide text-transparent">
              <MailCheck size={18} className="text-purple-300" />
              jhonquenano27@gmail.com
            </span>

            <PulseLink
              pulseColor="#FBBF24"
              className="gap-2 bg-transparent tracking-wider"
            >
              <div className="flex items-center gap-2">
                <FileCheck2 size={18} className="text-purple-300" />

                <span className="bg-gradient-to-r from-purple-300 to-amber-400 bg-clip-text text-transparent">
                  Résumé CV
                </span>
              </div>
            </PulseLink>
          </div>
        </div>

        <Image
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
