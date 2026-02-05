/* eslint-disable tailwindcss/no-custom-classname */

import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const components: MDXComponents = {
  wrapper: ({ children }) => (
    <article className="prose prose-invert mx-auto my-12 min-h-[calc(100svh-3.375rem)] max-w-[45rem] p-2 prose-p:text-zinc-50">
      {children}
    </article>
  ),
  img: ({ ...props }) => (
    <img
      className="aspect-video rounded-xs border-zinc-700/25 object-cover"
      loading="eager"
      decoding="sync"
      fetchPriority="high"
      alt={props.alt}
      height={400}
      width={800}
      {...props}
    />
  ),
  pre: ({ children }) => {
    return (
      <>
        <div className="my-6">{children}</div>
        <ins
          className="adsbygoogle block text-center"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-6252769412873895"
          data-ad-slot="6253825845"
        />
      </>
    );
  },
  code: ({ children }) => {
    return (
      <SyntaxHighlighter
        customStyle={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontWeight: "bold",
        }}
        showLineNumbers
        style={dracula}
      >
        {children}
      </SyntaxHighlighter>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
