import { ViewTransition } from "react";

import { BackButton } from "@/components/back-button";
import { Title } from "@/components/title";

interface IBlogLayoutProps {
  children: React.ReactNode;
}
export default function BlogLayout({ children }: IBlogLayoutProps) {
  return (
    <ViewTransition name="blog">
      <Title id="blog" title="Blog">
        <nav
          aria-label="Ações"
          className="flex flex-1 items-center justify-end gap-2"
        >
          <BackButton />
        </nav>
      </Title>

      {children}
    </ViewTransition>
  );
}
