import { getDailyLiturgy } from "@/http/daily-liturgy";

export { metadata } from "./meta";

export default async function Page() {
  const data = await getDailyLiturgy();

  const liturgy = `${data.evangelho.texto.replaceAll(/(\d)/g, "<sup class='font-semibold'>$1 </sup>")}`;
  const title = data.evangelho.titulo.replace("✠", "✞");

  return (
    <div className="prose prose-sm prose-zinc mx-auto flex max-w-[45rem] flex-1 flex-col justify-center p-4 dark:prose-invert md:prose-base prose-h1:mb-4 prose-h3:mt-0 prose-p:hyphens-auto prose-p:text-zinc-50">
      <span className="text-[0.75rem] font-semibold text-zinc-100/60">
        Cor Litúrgica: {data.cor}
      </span>
      <span className="mb-4 text-[0.75rem] font-semibold text-zinc-100/60">
        Data: {data.data}
      </span>

      <h1>{data.liturgia}</h1>
      <span className="text-[0.75rem] font-semibold text-zinc-200/60">
        Referência:
      </span>
      <h3>{data.evangelho.referencia}</h3>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: liturgy }} />
      <strong className="block font-light">— Palavra da Salvação.</strong>
      <strong className="block font-light">— Glória a vós, Senhor.</strong>
    </div>
  );
}
