import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { BLOGS } from "@/data/blogs";
import { Calendar, Clock, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Blogs & Market Insights — Urbannest",
  description: "Stay informed with real estate market intelligence, prime yield analysis, and strategic buyer advisory across global luxury enclaves."
};

export default function BlogsPage() {
  const featured = BLOGS[0];
  const remaining = BLOGS.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#181715]">
      <Navbar />

      <main className="flex-1 py-14 lg:py-20 space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181715]/5 text-xs font-semibold uppercase tracking-wider text-[#181715]">
              <Sparkles className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>Private Journal &amp; Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#181715] leading-[1.1]">
              Explore latest prime real estate <span className="font-serif italic font-light text-[#C29D59]">market insights</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B665F]">
              We share proprietary research on architectural design, macro yield trends, and private wealth strategies shaping luxury acquisitions worldwide.
            </p>
          </div>

          {/* Featured Article Card */}
          <Link
            href={`/blogs/${featured.slug}`}
            className="group block bg-white rounded-3xl p-6 sm:p-9 border border-black/8 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative aspect-16/10 rounded-2xl overflow-hidden bg-black/5 border border-black/8">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#181715] text-[#C29D59] shadow-sm">
                    Featured Insight
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3 text-xs text-[#6B665F]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C29D59]" />
                    {featured.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C29D59]" />
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181715] group-hover:text-[#C29D59] leading-tight transition-colors">
                  {featured.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#6B665F] leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="pt-5 border-t border-black/6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-black/10">
                      <Image
                        src={featured.author.avatar}
                        alt={featured.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#181715] block">
                        {featured.author.name}
                      </span>
                      <span className="text-[10px] text-[#8E8880]">
                        {featured.author.role}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#181715] group-hover:text-[#C29D59] transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Remaining Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {remaining.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="bg-white rounded-3xl p-5 border border-black/8 flex flex-col justify-between hover:shadow-xl transition-all group"
              >
                <div className="space-y-4">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-black/5 border border-black/8">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#181715]/80 text-[#C29D59] backdrop-blur-md">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] text-[#6B665F]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C29D59]" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C29D59]" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-[#181715] group-hover:text-[#C29D59] line-clamp-2 leading-snug transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-[#6B665F] line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-black/10">
                      <Image
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-[#181715]">{blog.author.name}</span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[#181715] group-hover:bg-[#181715] group-hover:text-[#C29D59] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
}
