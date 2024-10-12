import { blogs } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <section className="pt-36">
      <div className="mx-auto grid max-w-[410px] gap-10 sm:max-w-[800px] sm:grid-cols-2 sm:gap-4 lg:max-w-[1260px] lg:grid-cols-3 lg:gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.title}
            href={blog.link}
            className="overflow-hidden rounded-md border border-[#B49BFF]/30 bg-slate-950/60 hover:border-sky-700"
          >
            <article className="flex h-full flex-col">
              <Image
                itemProp="image"
                src={blog.src}
                alt=""
                width={400}
                height={250}
                className="h-[250px] w-full object-cover shadow-xl shadow-[#2A0E61]/50"
              />

              <div className="flex flex-1 flex-col justify-between gap-y-8 p-4">
                <div>
                  <h3
                    itemProp="headline"
                    className="mb-4 text-xl font-semibold text-gray-100"
                  >
                    {blog.title}
                  </h3>

                  <p className="text-gray-300">{blog.descrition}</p>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-amber-500">Read More</span>
                  <span className="text-gray-400">{blog.date}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
