/* eslint-disable @next/next/no-img-element */

import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const components: MDXComponents = {
  wrapper: ({ children }) => (
    <article className="prose prose-invert mx-auto my-12 min-h-[calc(100svh-3.375rem)] max-w-[45rem] p-2">
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
      {...props}
    />
  ),
  pre: ({ children }) => {
    return <div className="my-6">{children}</div>;
  },
  code: ({ children }) => {
    return (
      <SyntaxHighlighter showLineNumbers language="javascript" style={dracula}>
        {children}
      </SyntaxHighlighter>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
