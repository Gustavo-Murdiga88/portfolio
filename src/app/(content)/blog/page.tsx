import { BookOpen, ChevronDown } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/util/date";

import * as meta from "./meta";
import { blogPosts } from "./posts";

export const metadata: Metadata = meta.metadata;

export default async function BlogPage() {
  "use cache";
  return (
    <div className="mx-auto max-w-[820px] px-4 py-8">
      <div className="flex flex-col">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={post.link}
            prefetch
            className="[&+&]:border-t [&+&]:border-t-zinc-700"
          >
            <article className="group my-2 flex flex-wrap gap-4 rounded-xs p-3 transition-colors duration-300 hover:bg-zinc-800/50 md:flex-nowrap md:gap-10">
              <div className="flex flex-1 flex-col">
                <div className="mb-3 flex gap-2 text-[12px] text-zinc-200 transition-colors duration-200">
                  <span>{formatDate(post.date).format("DD/MM/YYYY")}</span>
                  <span>{post.readTime}</span>
                  <BookOpen className="size-4" />
                </div>

                <h2 className="mb-3 text-sm font-semibold text-zinc-200 transition-colors duration-200">
                  {post.title}
                </h2>

                <p className="order-2 mb-4 bg-gradient-to-b from-zinc-200 to-transparent bg-clip-text text-[0.75rem] leading-relaxed text-transparent md:order-1">
                  {post.excerpt}
                </p>

                <div className="order-1 mb-4 flex flex-1 items-center justify-start gap-2 md:order-2 md:mb-0">
                  <div className="flex items-center">
                    <Image
                      height={30}
                      width={30}
                      fetchPriority="high"
                      decoding="sync"
                      loading="eager"
                      objectFit="cover"
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
                height={180}
                objectFit="cover"
                className="max-h-[180px] grow rounded-xs border border-zinc-700 md:grow-0"
              />
            </article>
          </Link>
        ))}
      </div>

      <div className="hidden w-full justify-center" aria-hidden="true">
        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xs border border-zinc-600 bg-zinc-800 px-4 py-2 text-[12px] text-zinc-50 md:max-w-[250px]">
          Carregar mais
          <ChevronDown className="size-4" />
        </button>
      </div>
    </div>
  );
}
