import Image from "next/image";
import Link from "next/link";

type Props = {
  view: string;
  code: string;
  src: string;
  title: string;
  technologies: string[];
  position: number;
};

export default function ProjectContent({
  view,
  code,
  src,
  title,
  technologies,
  position,
}: Props) {
  return (
    <article
      itemScope
      itemType="https://schema.org/CreativeWork"
      className="flex flex-col justify-between overflow-hidden rounded-md border border-[#B49BFF]/30 bg-slate-950/60"
    >
      <meta itemProp="position" content={position.toString()} />

      <div>
        <Image
          itemProp="image"
          src={src}
          alt={title}
          width={480}
          height={480}
          loading="lazy"
          className="w-full object-contain"
        />

        <div className="p-4">
          <h3
            itemProp="headline"
            className="mb-4 text-2xl font-semibold text-gray-200"
          >
            {title}
          </h3>

          <ul className="flex flex-wrap gap-2 text-xs">
            {technologies.map((tech, i) => (
              <li
                key={i}
                itemProp="keywords"
                className="rounded-md border border-amber-300/40 px-2 py-1 font-medium tracking-wider text-gray-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between text-center text-sm font-medium text-[#1E90FF]">
        <Link
          itemProp="url"
          href={view}
          target="_blank"
          className="w-full px-4 py-3"
        >
          View
        </Link>

        <Link
          itemProp="codeRepository"
          href={code}
          target="_blank"
          className="w-full px-4 py-3"
        >
          Code
        </Link>
      </div>
    </article>
  );
}
