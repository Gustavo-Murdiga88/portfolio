import { cookies } from "next/headers";

import { userCanSendEmail } from "@/util/useCanSendEmail";

import { Form } from "./form";

export default async function Contact() {
  const cookie = await cookies();
  const userAlreadySendEmail = !userCanSendEmail(cookie);

  return (
    <section aria-label="Contato comigo" className="flex flex-1 flex-col">
      <div className="mx-auto mb-20 mt-10 flex max-w-[820px] flex-1 flex-col items-center justify-center gap-10 px-4 lg:mb-10">
        <section className="flex w-full flex-col justify-center gap-2">
          <h2 className="text-left text-lg font-bold text-zinc-50 md:text-xl">
            Vamos trabalhar juntos no seu proximo projeto?
          </h2>
          <p className="text-[14px] font-bold text-neutral-200">
            Não perca tempo! Envie-me uma mensagem agora e saiba tudo sobre os
            serviços personalizados e como podemos colaborar para transformar
            ideias ambiciosas em projetos concretos.
          </p>
        </section>
        <Form userAlreadySendEmail={userAlreadySendEmail} />
      </div>
    </section>
  );
}
