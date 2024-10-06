import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <section className="pt-36">
      <div className="mx-auto grid max-w-[410px] gap-10 sm:max-w-[800px] sm:grid-cols-2 sm:gap-4 lg:max-w-[1260px] lg:grid-cols-3 lg:gap-6">
        <Link
          href="/blogs/blog-1"
          className="flex flex-col justify-between overflow-hidden rounded-md border border-[#B49BFF]/30 bg-slate-950/60 hover:border-sky-700"
        >
          <article>
            <Image
              itemProp="image"
              src="/assets/firstBlog.webp"
              alt=""
              width={480}
              height={480}
              loading="lazy"
              className="w-full object-contain shadow-xl shadow-[#2A0E61]/50"
            />

            <div className="p-4">
              <h3
                itemProp="headline"
                className="mb-4 text-2xl font-semibold text-gray-100"
              >
                Async/Await Concept
              </h3>

              <p className="mb-4 text-gray-300">
                In this blog post, we will explore & focus how async/await works
              </p>

              <div className="flex justify-between text-sm">
                <span className="text-sky-400">Read More</span>
                <span className="text-gray-400">10 / 5 / 24</span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
