import Image from "next/image";
import Link from "next/link";

import { skills, certificates } from "@/constants";
import GradientText from "../animation/GradientText";

export default function SkillsContent() {
  return (
    <div
      itemScope
      itemType="https://schema.org/Person"
      className="mb-20 mt-48 lg:mb-48"
    >
      <div className="mb-8 flex justify-center md:mb-6 lg:justify-start">
        <GradientText text="Skills & Certificates" />
      </div>

      <div className="mx-auto max-w-[460px] md:max-w-[630px] lg:max-w-[1024px] xl:mx-0 xl:max-w-none">
        <h2 className="mb-10 hidden text-center text-4xl font-medium leading-tight text-gray-100 md:block lg:text-left">
          <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
            Technologies
          </span>{" "}
          I used to go beyond
        </h2>

        <div className="lg:flex lg:justify-between xl:gap-4">
          <div className="mb-8 flex max-w-[630px] flex-col gap-6 lg:mb-0 xl:max-w-[600px] xl:justify-between xl:border-r-4 xl:border-r-[#B49BFF] xl:pr-4">
            <ul className="flex flex-wrap justify-center gap-2 font-medium text-gray-300 lg:justify-start">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  itemProp="knowsAbout"
                  className="flex items-center gap-2 rounded-md border border-[#B49BFF]/50 px-3 py-1 text-[15px]"
                >
                  <Image src={skill.svg} alt="" height={16} width={16} />
                  {skill.name}
                </li>
              ))}
            </ul>

            <ul
              itemScope
              itemType="https://schema.org/ItemList"
              className="divide-y divide-dashed divide-[#B49BFF]/70 border-l border-dashed border-[#B49BFF]/70"
            >
              {certificates.map((certificate, i) => (
                <li
                  key={i}
                  itemScope
                  itemProp="itemListElement"
                  itemType="https://schema.org/ListItem"
                  className="relative pl-14"
                >
                  <meta itemProp="position" content={`${i + 1}`} />
                  <div className="absolute left-3 top-3 flex items-center justify-center rounded-full bg-slate-950">
                    <Image
                      itemProp="contentUrl"
                      src={certificate.icon}
                      alt=""
                      className="m-auto size-8"
                      width={32}
                      height={32}
                    />
                  </div>

                  <div className="flex items-end justify-between gap-4 pb-4">
                    <div>
                      <time
                        itemProp="datePublished"
                        dateTime={certificate.date}
                        className="text-muted-foreground text-xs text-gray-400"
                      >
                        {certificate.date}
                      </time>

                      <h3
                        itemProp="name"
                        className="text-sm font-medium text-gray-300"
                      >
                        {certificate.title}
                      </h3>
                    </div>

                    <Link
                      itemProp="url"
                      href={certificate.url}
                      target="_blank"
                      className="text-sm font-medium tracking-wider text-[#1E90FF]"
                    >
                      View
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto flex max-w-[320px] flex-col gap-8 md:mx-0 md:max-w-none md:flex-row md:gap-4 lg:flex-col lg:items-center xl:max-h-[427px] xl:flex-row xl:items-start xl:gap-8">
            <figure
              itemScope
              itemType="https://schema.org/ImageObject"
              className="flex flex-col items-center gap-2 md:w-[440px] md:items-start lg:w-[220px] xl:w-[270px]"
            >
              <Image
                itemProp="contentUrl"
                src="/self.webp"
                alt="Graduation picture"
                className="overflow-hidden rounded-md"
                width={270}
                height={370}
              />
              <figcaption
                itemProp="caption"
                className="text-sm font-medium text-gray-300"
              >
                West Jefferson High School (2023)
              </figcaption>
            </figure>

            <figure
              itemScope
              itemType="https://schema.org/ImageObject"
              className="flex flex-col items-center gap-2 lg:w-[300px] xl:w-[380px]"
            >
              <Image
                itemProp="contentUrl"
                src="/assets/mcdo.webp"
                alt="Macdonalds recognized award"
                className="w-full overflow-hidden rounded-md"
                width={340}
                height={260}
              />
              <figcaption
                itemProp="caption"
                className="text-center text-sm font-medium text-gray-300 md:text-left lg:text-center xl:text-left"
              >
                Recognized award for my exceptional contributions as a service
                crew member by bringing positive customer feedback to our
                McDonalds branch (US)
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
