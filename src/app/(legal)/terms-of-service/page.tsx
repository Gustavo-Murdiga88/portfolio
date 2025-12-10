import { Metadata } from "next";
import { ViewTransition } from "react";

import { BackButton } from "@/components/back-button";
import { Title } from "@/components/title";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do portfólio de Gustavo Murdiga. Regras e condições para uso do site.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service`,
    languages: {
      "pt-BR": `${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service`,
    },
  },
};

export default async function TermsOfService() {
  "use cache";

  return (
    <ViewTransition name="terms">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Title className="mb-10">
          <BackButton />
        </Title>

        <article className="space-y-8 text-zinc-200">
          <header>
            <h1 className="mb-4 text-3xl font-bold text-zinc-50">
              Termos de Uso
            </h1>
            <div className="mb-8 text-sm text-zinc-400">
              <p>Data de vigência: {new Date().toLocaleDateString("pt-BR")}</p>
              <p>
                Última atualização: {new Date().toLocaleDateString("pt-BR")}
              </p>
            </div>
          </header>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e usar o site gustavomurdiga.vercel.app, você concorda
              em cumprir e estar vinculado a estes Termos de Uso. Se você não
              concordar com qualquer parte destes termos, não deve usar nosso
              site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              2. Descrição do Serviço
            </h2>
            <p>
              Este site é o portfólio pessoal de Gustavo Murdiga, desenvolvedor
              full-stack, contendo informações sobre experiência profissional,
              projetos, habilidades, equipamentos e serviços oferecidos. O site
              também pode incluir conteúdo educativo e de entretenimento
              relacionado à tecnologia.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              3. Uso Permitido
            </h2>
            <div className="space-y-4">
              <p>Você pode usar este site para:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Visualizar informações sobre serviços profissionais</li>
                <li>Entrar em contato para oportunidades de trabalho</li>
                <li>Ler conteúdo educativo sobre tecnologia</li>
                <li>Conhecer mais sobre o autor e seus projetos</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              4. Uso Proibido
            </h2>
            <div className="space-y-4">
              <p>É proibido usar este site para:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Atividades ilegais ou fraudulentas</li>
                <li>Enviar spam ou mensagens não solicitadas</li>
                <li>Tentar violar a segurança do site</li>
                <li>Usar bots ou scripts automatizados sem permissão</li>
                <li>
                  Copiar, reproduzir ou distribuir conteúdo sem autorização
                </li>
                <li>Enviar vírus ou códigos maliciosos</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              5. Propriedade Intelectual
            </h2>
            <div className="space-y-4">
              <p>
                Todo o conteúdo deste site, incluindo textos, imagens, logos,
                códigos e design, é de propriedade de Gustavo Murdiga ou de seus
                respectivos proprietários e está protegido por leis de direitos
                autorais e propriedade intelectual.
              </p>
              <p>
                Você não pode copiar, modificar, distribuir ou usar
                comercialmente qualquer conteúdo sem permissão expressa por
                escrito.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              6. Formulário de Contato
            </h2>
            <div className="space-y-4">
              <p>Ao usar nosso formulário de contato, você concorda em:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Não enviar mensagens ofensivas ou inadequadas</li>
                <li>Respeitar limites de frequência de envio</li>
                <li>
                  Entender que suas informações serão usadas conforme nossa
                  Política de Privacidade
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              7. Publicidade
            </h2>
            <p>
              Este site pode exibir anúncios através do Google AdSense. Não
              garantimos a precisão ou adequação dos produtos/serviços
              anunciados. Você interage com anunciantes por sua própria conta e
              risco.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              8. Links Externos
            </h2>
            <p>
              Nosso site pode conter links para sites externos. Não somos
              responsáveis pelo conteúdo, políticas de privacidade ou práticas
              desses sites. O acesso a links externos é por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              9. Disponibilidade do Serviço
            </h2>
            <p>
              Nos esforçamos para manter o site disponível 24/7, mas não
              garantimos disponibilidade contínua. Podemos suspender o acesso
              temporariamente para manutenção, atualizações ou por razões
              técnicas.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              10. Limitação de Responsabilidade
            </h2>
            <div className="space-y-4">
              <p>
                Na máxima extensão permitida por lei, Gustavo Murdiga não será
                responsável por:
              </p>
              <ul className="list-inside list-disc space-y-1">
                <li>Danos diretos, indiretos ou consequenciais</li>
                <li>Perda de lucros ou oportunidades de negócios</li>
                <li>Interrupção de negócios ou perda de dados</li>
                <li>Uso ou incapacidade de usar o site</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              11. Modificações dos Termos
            </h2>
            <p>
              Reservamos o direito de modificar estes Termos de Uso a qualquer
              momento. Alterações entrarão em vigor imediatamente após a
              publicação no site. Seu uso continuado do site após as alterações
              constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              12. Rescisão
            </h2>
            <p>
              Podemos encerrar ou suspender seu acesso ao site imediatamente,
              sem aviso prévio, por qualquer motivo, incluindo violação destes
              Termos de Uso.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              13. Lei Aplicável
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer
              disputa será resolvida nos tribunais competentes de Jaú, São
              Paulo, Brasil.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-zinc-50">
              14. Contato
            </h2>
            <div className="space-y-4">
              <p>
                Se você tiver dúvidas sobre estes Termos de Uso, entre em
                contato:
              </p>
              <div className="rounded-lg bg-zinc-800 p-4">
                <p>
                  <strong>E-mail:</strong> gumurdiga@gmail.com
                </p>
                <p>
                  <strong>Site:</strong> gustavomurdiga.vercel.app
                </p>
                <p>
                  <strong>Localização:</strong> Jaú, São Paulo, Brasil
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </ViewTransition>
  );
}
