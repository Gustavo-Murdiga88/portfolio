import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    content: `
# Como otimizar performance em aplicações React

A performance é um aspecto crucial no desenvolvimento de aplicações React modernas. Neste artigo, vamos explorar várias técnicas que podem ajudar você a criar aplicações mais rápidas e eficientes.

## 1. React.memo e useMemo

O React.memo é uma higher-order component que pode prevenir re-renders desnecessários:

\`\`\`javascript
const MeuComponente = React.memo(({ nome, idade }) => {
  return <div>{nome} tem {idade} anos</div>;
});
\`\`\`

## 2. Lazy Loading com React.lazy

Para componentes que não são necessários imediatamente:

\`\`\`javascript
const ComponentePesado = React.lazy(() => import('./ComponentePesado'));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ComponentePesado />
    </Suspense>
  );
}
\`\`\`

## 3. Otimização de imagens

Use Next.js Image component para otimização automática:

\`\`\`javascript
import Image from 'next/image';

<Image
  src="/foto.jpg"
  alt="Descrição"
  width={500}
  height={300}
  priority={true}
/>
\`\`\`

## Conclusão

Implementar essas técnicas pode resultar em melhorias significativas na experiência do usuário e nos Core Web Vitals do Google.
    `,
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
    content: `
# Next.js 14: Novidades e melhorias

O Next.js 14 trouxe várias melhorias importantes para o desenvolvimento web moderno. Vamos explorar as principais funcionalidades.

## App Router Estável

O novo App Router agora é a forma recomendada de roteamento:

\`\`\`javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
\`\`\`

## Server Components por padrão

Componentes são renderizados no servidor por padrão, melhorando a performance.

## Turbopack melhorado

O bundler do futuro está cada vez mais rápido e estável.
    `,
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
    content: `
# TypeScript: Dicas avançadas para desenvolvedores

TypeScript oferece recursos poderosos além da tipagem básica. Vamos explorar técnicas avançadas.

## Utility Types

Use utility types para manipular tipos existentes:

\`\`\`typescript
interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
}

// Omitir senha para exibição
type UsuarioPublico = Omit<Usuario, 'senha'>;

// Tornar todas as propriedades opcionais
type UsuarioParcial = Partial<Usuario>;
\`\`\`

## Conditional Types

Crie tipos que dependem de condições:

\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T }
  : { data: T };
\`\`\`

## Template Literal Types

Combine strings em tipos:

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;
// "onClick", "onSubmit", etc.
\`\`\`
    `,
    date: "2024-01-05",
    readTime: "10 min",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-zinc-400 transition-colors hover:text-zinc-50"
        >
          ← Voltar ao início
        </Link>
      </div>

      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-zinc-50">Blog</h1>
        <p className="text-lg text-zinc-300">
          Artigos sobre desenvolvimento web, tecnologia e programação.
          Compartilhando conhecimento e experiências do mundo do
          desenvolvimento.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group rounded-lg border border-zinc-700 bg-zinc-900/50 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-900/80"
          >
            <div className="mb-4">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="h-48 w-full rounded-lg object-cover"
              />
            </div>

            <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
              <span className="rounded-full bg-blue-900/30 px-2 py-1 text-blue-400">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="mb-3 text-xl font-semibold text-zinc-50 group-hover:text-blue-400">
              {post.title}
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-zinc-300">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              Ler artigo →
            </Link>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-lg border border-zinc-700 bg-zinc-900/30 p-8">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-50">
          Sobre o Blog
        </h2>
        <p className="leading-relaxed text-zinc-300">
          Este blog é onde compartilho meu conhecimento e experiências como
          desenvolvedor full-stack. Aqui você encontrará artigos sobre as
          tecnologias que uso no dia a dia, dicas de desenvolvimento, boas
          práticas e reflexões sobre a evolução da tecnologia.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-300">
          Meu objetivo é contribuir para a comunidade de desenvolvedores,
          compartilhando soluções para problemas comuns e explorando novas
          tecnologias e ferramentas que podem melhorar nosso trabalho.
        </p>
      </section>
    </div>
  );
}
