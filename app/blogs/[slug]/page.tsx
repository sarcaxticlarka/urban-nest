import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { BLOGS } from "@/data/blogs";
import { ArrowLeft, Calendar, Clock, Share2, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const related = BLOGS.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#181715]">
      <Navbar />

      <main className="flex-1 py-12 lg:py-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb / Back */}
          <div className="flex items-center justify-between">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#181715] hover:text-[#C29D59] group transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all insights</span>
            </Link>

            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#181715] text-[#C29D59]">
              {blog.category}
            </span>
          </div>

          {/* Title Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#6B665F]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C29D59]" />
                {blog.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C29D59]" />
                {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181715] leading-[1.12]">
              {blog.title}
            </h1>

            <p className="text-base sm:text-lg text-[#6B665F] leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          {/* Author Details Bar */}
          <div className="py-4 border-t border-b border-black/8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black/10">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-[#181715] block">
                  {blog.author.name}
                </span>
                <span className="text-xs text-[#8E8880]">
                  {blog.author.role}
                </span>
              </div>
            </div>

            <div className="text-xs text-[#6B665F] flex items-center gap-1.5 font-medium">
              <Share2 className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>Fiduciary Research</span>
            </div>
          </div>

          {/* Cover Photo */}
          <div className="relative aspect-16/10 rounded-3xl overflow-hidden bg-black/5 border border-black/8 shadow-md">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* Article Text Content */}
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-black/8 shadow-xs space-y-6 text-sm sm:text-base text-[#3E3A36] leading-relaxed">
            {blog.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F6F2] border border-[#C29D59]/30 my-8 space-y-2">
              <h4 className="font-bold text-sm text-[#181715] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C29D59]" />
                Key Takeaway for Private Investors
              </h4>
              <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                Conducting granular localized demographic analysis and partnering with an accredited fiduciary advisory significantly mitigates acquisition risks in dynamic real estate cycles.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="space-y-6 pt-12 border-t border-black/8">
            <h3 className="text-2xl font-normal tracking-tight text-[#181715]">
              Related <span className="font-serif italic font-light text-[#C29D59]">Market Insights</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.slug}`}
                  className="bg-white p-4 rounded-2xl border border-black/8 space-y-3 hover:shadow-lg transition-all group"
                >
                  <div className="relative aspect-16/10 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] text-[#8E8880] block">{item.date}</span>
                  <h4 className="text-xs font-bold text-[#181715] line-clamp-2 group-hover:text-[#C29D59] transition-colors">{item.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-16">
          <CtaBanner />
        </div>
      </main>

      <Footer />
    </div>
  );
}
