import { BookOpen, ChevronDown } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

import { formatDate } from "@/util/date";

export const metadata: Metadata = {
  title: "Blog - Gustavo Murdiga",
  description:
    "Artigos sobre desenvolvimento web, tecnologia, JavaScript, React, Next.js e dicas de programação por Gustavo Murdiga.",
  keywords: [
    "blog",
    "artigos",
    "desenvolvimento web",
    "javascript",
    "react",
    "nextjs",
    "programação",
    "tecnologia",
  ],
  openGraph: {
    title: "Blog - Gustavo Murdiga",
    description: "Artigos sobre desenvolvimento web, tecnologia e programação",
    type: "website",
  },
};

// Mock data - em produção viria de CMS ou arquivos markdown
const blogPosts = [
  {
    id: "1",
    title: "Como otimizar performance em aplicações React",
    excerpt:
      "Aprenda técnicas avançadas para melhorar a performance das suas aplicações React, incluindo lazy loading, memoization e otimização de re-renders.",
    content: ``,
    date: "2024-01-15",
    readTime: "8 min",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Next.js 14: Novidades e melhorias",
    excerpt:
      "Conheça as principais novidades do Next.js 14, incluindo Server Components, App Router e melhorias na experiência do desenvolvedor.",
    content: ``,
    date: "2024-01-10",
    readTime: "6 min",
    category: "Next.js",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "TypeScript: Dicas avançadas para desenvolvedores",
    excerpt:
      "Dicas e truques avançados de TypeScript que todo desenvolvedor deveria conhecer para escrever código mais seguro e maintível.",
    content: ``,
    date: "2024-01-05",
    readTime: "10 min",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "TypeScript: Dicas avançadas para desenvolvedores",
    excerpt:
      "Dicas e truques avançados de TypeScript que todo desenvolvedor deveria conhecer para escrever código mais seguro e maintível.",
    content: ``,
    date: "2024-01-05",
    readTime: "10 min",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "TypeScript: Dicas avançadas para desenvolvedores",
    excerpt:
      "Dicas e truques avançados de TypeScript que todo desenvolvedor deveria conhecer para escrever código mais seguro e maintível.",
    content: ``,
    date: "2024-01-05",
    readTime: "10 min",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-[820px] px-4 py-8">
      <div className="flex flex-col gap-2">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-wrap gap-4 bg-clip-text p-3 transition-all md:flex-nowrap md:gap-10 [&+&]:border-t [&+&]:border-zinc-700"
          >
            <div className="flex flex-col">
              <div className="mb-3 flex gap-2 text-[12px] text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                <span>{formatDate.format(new Date(post.date))}</span>
                <span>{post.readTime}</span>
                <BookOpen className="size-4" />
              </div>

              <h2 className="mb-3 text-sm font-semibold text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                {post.title}
              </h2>

              <p className="order-2 mb-4 bg-gradient-to-b from-zinc-200 to-transparent bg-clip-text text-[0.75rem] leading-relaxed text-transparent md:order-1">
                {post.excerpt}
                {post.excerpt}
              </p>

              <div className="order-1 mb-4 flex flex-1 items-center justify-start gap-2 md:order-2 md:mb-0">
                <div className="flex items-center">
                  <Image
                    height={30}
                    width={30}
                    alt="Avatar do autor"
                    className="z-10 rounded-full border border-zinc-700"
                    src={"https://github.com/Gustavo-Murdiga88.png"}
                  />
                </div>
                <div className="flex items-center text-[12px] text-zinc-300">
                  <p>Gustavo Murdiga</p>
                </div>
              </div>
            </div>
            <Image
              src={post.image}
              alt={post.title}
              width={250}
              height={200}
              className="max-h-[180px] grow rounded-xs border border-zinc-700 object-cover md:grow-0"
            />
          </article>
        ))}
      </div>

      <div className="flex w-full justify-center">
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xs border border-zinc-600 bg-zinc-800 px-4 py-2 text-[12px] text-zinc-50 md:max-w-[250px]">
          Carregar mais
          <ChevronDown className="size-4" />
        </button>
      </div>
    </div>
  );
}
