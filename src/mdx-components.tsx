import type { MDXComponents } from "mdx/types";
import SyntaxHighlighter from "react-syntax-highlighter";

const components: MDXComponents = {
  wrapper: ({ children }) => (
    <article className="prose prose-invert mx-auto my-12 min-h-[calc(100svh-3.375rem)] max-w-[45rem] p-2">
      {children}
    </article>
  ),
  code: ({ children }) => {
    return (
      <SyntaxHighlighter showLineNumbers showInlineLineNumbers>
        {children}
      </SyntaxHighlighter>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
