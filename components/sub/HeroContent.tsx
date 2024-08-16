import Link from "next/link";
import Image from "next/image";

import { MailCheck, FileCheck2 } from "lucide-react";
import GradientText from "../animation/GradientText";
import PulseLink from "../animation/PulseLink";

export default function HeroContent() {
  return (
    <div className="mt-40">
      <div className="md:grid md:grid-cols-2">
        <div className="lg-l:self-center">
          <div className="xs:justify-center mb-6 flex md:justify-start">
            <GradientText text="Jhon Que&ntilde;ano" />
          </div>

          <div className="xs:text-center xs:mx-auto xs:mb-12 mb-10 max-w-[460px] md:mx-0 md:max-w-[500px] md:text-left">
            <h1 className="xs:mb-12 mb-8 text-6xl font-bold text-gray-100">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
                interested
              </span>{" "}
              in what I&apos;m doing
            </h1>

            <p className="font-normal text-gray-300 lg:text-lg">
              During my High School days, I was considered one of the best coder
              by my teachers in the whole school at West Jefferson High School
              (US). I started learning how to code when I was 16 years old.
            </p>
          </div>

          <div className="xs:mx-auto flex max-w-[460px] flex-col items-start gap-4 font-semibold md:max-w-none">
            <Link
              className="flex items-center gap-2 rounded-md border border-[#764AF1]/70 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text px-3 py-2 tracking-wide text-transparent"
              href="mailto:jhonquenano27@gmail.com"
            >
              <MailCheck size={18} className="text-purple-300" />
              jhonquenano27@gmail.com
            </Link>

            <PulseLink
              pulseColor="#FBBF24"
              className="gap-2 bg-transparent tracking-wider"
            >
              <div className="flex items-center gap-2">
                <FileCheck2 size={18} className="text-purple-300" />

                <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                  Résumé CV
                </span>
              </div>
            </PulseLink>
          </div>
        </div>

        <Image
          src="/hero.svg"
          className="md-l:w-[400px] md-l:h-[400px] lg-l:w-[500px] lg-l:h-[500px] xl-l:w-[550px] xl-l:h-[550px] lg-l:justify-self-start animate-spin-slow hidden self-center md:block md:justify-self-end"
          alt="Coding icons"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
