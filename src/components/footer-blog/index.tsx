import Link from "next/link";
import { memo } from "react";

function Component() {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "20px",
          borderRadius: "10px",
          margin: "30px 0",
          color: "white",
        }}
      >
        <h3 style={{ margin: "0 0 15px 0", color: "white" }}>
          🚀 Newsletter em Breve!
        </h3>
        <p style={{ margin: "0", lineHeight: "1.6" }}>
          Estamos preparando uma newsletter exclusiva com as{" "}
          <strong>
            novidades mais importantes do mundo Node.js, React e React Native
          </strong>
          . Você receberá insights práticos, tutoriais avançados, oportunidades
          de carreira e muito mais!
        </p>
        <p style={{ margin: "15px 0 0 0", fontStyle: "italic" }}>
          📧 Em breve, você poderá se inscrever e fazer parte desta comunidade
          de desenvolvedores apaixonados por tecnologia!
        </p>
      </div>
      <Link
        href={"/"}
        className="block text-center text-[12px] text-zinc-600 underline underline-offset-2"
      >
        Este post foi escrito por Gustavo Murdiga.{" "}
      </Link>
    </>
  );
}

export const FooterBlog = memo(Component);
