import FirstBlog from "@/components/blogs/FirstBlog";
import SecondBlog from "@/components/blogs/SecondBlog";

export default function page({ params }: { params: { id: string } }) {
  return (
    <section className="my-36">
      {params.id === "blog-1" && <FirstBlog />}

      {params.id === "blog-2" && <SecondBlog />}
    </section>
  );
}
