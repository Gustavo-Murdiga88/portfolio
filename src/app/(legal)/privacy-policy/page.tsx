import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade - Gustavo Murdiga",
  description:
    "Política de privacidade do portfólio de Gustavo Murdiga sobre coleta e uso de dados pessoais",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
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

      <article className="space-y-8 text-zinc-200">
        <header>
          <h1 className="mb-4 text-3xl font-bold text-zinc-50">
            Política de Privacidade
          </h1>
          <div className="mb-8 text-sm text-zinc-400">
            <p>Data de vigência: {new Date().toLocaleDateString("pt-BR")}</p>
            <p>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>
        </header>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-50">
            1. Informações Gerais
          </h2>
          <div className="space-y-4">
            <p>
              Esta Política de Privacidade descreve como o site
              gustavomurdiga.vercel.app coleta, usa e protege as informações
              pessoais dos usuários em conformidade com a Lei Geral de Proteção
              de Dados (LGPD) e outras regulamentações aplicáveis.
            </p>
            <div className="rounded-lg bg-zinc-800 p-4">
              <p>
                <strong>Responsável pelos dados:</strong> Gustavo Murdiga
              </p>
              <p>
                <strong>E-mail de contato:</strong> gumurdiga@gmail.com
              </p>
              <p>
                <strong>Localização:</strong> Jaú, São Paulo, Brasil
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-50">
            2. Informações que Coletamos
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-medium text-zinc-50">
                Informações fornecidas diretamente:
              </h3>
              <ul className="list-inside list-disc space-y-1">
                <li>
                  Nome, e-mail e mensagem através do formulário de contato
                </li>
                <li>Informações voluntariamente fornecidas em comunicações</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium text-zinc-50">
                Informações coletadas automaticamente:
              </h3>
              <ul className="list-inside list-disc space-y-1">
                <li>Endereço IP</li>
                <li>Tipo de navegador e sistema operacional</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Data e hora das visitas</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium text-zinc-50">
                Cookies e tecnologias similares:
              </h3>
              <p className="mb-2">Utilizamos cookies para:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Melhorar a experiência do usuário</li>
                <li>Analisar o tráfego do site</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Manter preferências do usuário</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-50">
            3. Como Usamos suas Informações
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Responder às suas mensagens e solicitações</li>
            <li>Melhorar nossos serviços e conteúdo</li>
            <li>Analisar o uso do site</li>
            <li>Cumprir obrigações legais</li>
            <li>Exibir anúncios personalizados através do Google AdSense</li>
            <li>Prevenir fraudes e garantir a segurança</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-50">
            4. Google AdSense e Publicidade
          </h2>
          <div className="space-y-4">
            <p>
              Este site usa o Google AdSense para exibir anúncios. O Google pode
              usar cookies para veicular anúncios com base nas visitas
              anteriores a este site ou outros sites.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Os anúncios podem ser personalizados com base em seus interesses
              </li>
              <li>
                Você pode optar por não receber anúncios personalizados
                visitando as{" "}
                <Link
                  href="https://adssettings.google.com/"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Configurações de anúncios do Google
                </Link>
              </li>
              <li>
                Para mais informações, consulte a{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Política de Privacidade do Google
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-50">
            5. Seus Direitos (LGPD)
          </h2>
          <div className="space-y-4">
            <p>Você tem direito a:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>Acesso:</strong> Saber quais dados possuímos sobre você
              </li>
              <li>
                <strong>Retificação:</strong> Corrigir dados incorretos ou
                incompletos
              </li>
              <li>
                <strong>Exclusão:</strong> Solicitar a remoção de seus dados
              </li>
              <li>
                <strong>Portabilidade:</strong> Receber seus dados em formato
                legível
              </li>
              <li>
                <strong>Oposição:</strong> Opor-se ao processamento de seus
                dados
              </li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato através do e-mail:{" "}
              <Link
                href="mailto:gumurdiga@gmail.com"
                className="text-blue-400 hover:underline"
              >
                gumurdiga@gmail.com
              </Link>
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-50">
            6. Segurança dos Dados
          </h2>
          <p>
            Implementamos medidas de segurança apropriadas para proteger suas
            informações pessoais contra acesso não autorizado, alteração,
            divulgação ou destruição. No entanto, nenhuma transmissão pela
            internet é 100% segura.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-50">
            7. Cookies e Gerenciamento
          </h2>
          <p>
            Você pode controlar e/ou deletar cookies conforme desejar. Para
            detalhes, consulte{" "}
            <Link
              href="https://aboutcookies.org/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              aboutcookies.org
            </Link>
            . Você pode deletar todos os cookies que já estão no seu computador
            e pode configurar a maioria dos navegadores para impedir que sejam
            colocados.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-zinc-50">
            8. Contato
          </h2>
          <div className="space-y-4">
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre
              como tratamos seus dados pessoais, entre em contato:
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
  );
}
