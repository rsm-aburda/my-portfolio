import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block mb-6">
              <div className="rounded-lg border overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out transform-gpu">
                {post.metadata.image && (
                  <Image
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover object-center"
                  />
                )}
                <div className="p-4">
                  <p className="font-semibold tracking-tight">{post.metadata.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{post.metadata.publishedAt}</p>
                  <p className="text-sm text-muted-foreground mt-2">{post.metadata.summary}</p>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
