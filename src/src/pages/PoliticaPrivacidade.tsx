import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-bels.png";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header simples */}
      <header className="bg-background/90 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Clínica BELS" className="h-14 w-auto object-contain" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Título */}
          <div className="mb-12">
            <span className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase">
              Documentos legais
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-medium text-foreground mt-4 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Conteúdo */}
          <div className="prose prose-slate max-w-none space-y-10 text-foreground/80 leading-relaxed">

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">1. Quem somos</h2>
              <p>
                A <strong>Clínica BELS</strong> (Bem Estar, Longevidade e Saúde), inscrita sob o CNPJ e localizada no Edifício Igarassu, Rua Surubim, 577 – 1º andar, Cidade Monções, São Paulo – SP, é a responsável pelo tratamento dos seus dados pessoais conforme esta Política de Privacidade.
              </p>
              <p>
                Esta política explica como coletamos, usamos, armazenamos e protegemos os dados pessoais de nossos pacientes, visitantes do site e demais usuários, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">2. Dados que coletamos</h2>
              <p>Podemos coletar os seguintes tipos de dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Dados de identificação:</strong> nome completo, CPF, data de nascimento, sexo.</li>
                <li><strong>Dados de contato:</strong> telefone, e-mail, endereço.</li>
                <li><strong>Dados de saúde:</strong> histórico médico, diagnósticos, resultados de exames, informações sobre tratamentos realizados (dados sensíveis, conforme LGPD).</li>
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, cookies e dados de sessão.</li>
                <li><strong>Dados de comunicação:</strong> mensagens enviadas via WhatsApp, e-mail ou formulário de contato.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">3. Finalidade do tratamento</h2>
              <p>Utilizamos seus dados pessoais para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Agendamento e realização de consultas, procedimentos e acompanhamentos médicos;</li>
                <li>Elaboração e gestão de prontuários e históricos de saúde;</li>
                <li>Comunicação sobre resultados, retornos e informações da clínica;</li>
                <li>Envio de conteúdo informativo e educativo sobre saúde e bem-estar (mediante consentimento);</li>
                <li>Cumprimento de obrigações legais e regulatórias;</li>
                <li>Melhoria dos nossos serviços e experiência do paciente;</li>
                <li>Segurança e prevenção de fraudes.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">4. Base legal para o tratamento</h2>
              <p>O tratamento dos seus dados se baseia nas seguintes hipóteses legais previstas na LGPD:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Consentimento:</strong> para envio de comunicações de marketing e uso de cookies não essenciais;</li>
                <li><strong>Execução de contrato:</strong> para prestação dos serviços de saúde contratados;</li>
                <li><strong>Obrigação legal:</strong> para cumprimento de exigências regulatórias do CFM e demais órgãos de saúde;</li>
                <li><strong>Tutela da saúde:</strong> para prestação de serviços médicos e procedimentos de saúde;</li>
                <li><strong>Legítimo interesse:</strong> para melhoria contínua dos nossos serviços.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">5. Compartilhamento de dados</h2>
              <p>
                Seus dados pessoais <strong>não são vendidos</strong> a terceiros. Podemos compartilhá-los nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Com profissionais de saúde envolvidos no seu atendimento, dentro da equipe da Clínica BELS;</li>
                <li>Com prestadores de serviços tecnológicos (hospedagem, sistemas de agendamento) que atuam como operadores de dados e assinaram compromissos de confidencialidade;</li>
                <li>Com autoridades públicas, quando exigido por lei ou decisão judicial;</li>
                <li>Com parceiros laboratoriais ou de imagem, quando necessário para exames solicitados.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">6. Retenção de dados</h2>
              <p>
                Os dados de saúde (prontuários médicos) são retidos pelo prazo mínimo de <strong>20 anos</strong>, conforme determina o Conselho Federal de Medicina (Resolução CFM nº 1.821/2007). Demais dados pessoais são mantidos pelo período necessário para cumprir as finalidades descritas nesta política ou conforme exigências legais.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">7. Seus direitos como titular</h2>
              <p>Conforme a LGPD, você tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Confirmar</strong> a existência do tratamento de seus dados;</li>
                <li><strong>Acessar</strong> os dados que temos sobre você;</li>
                <li><strong>Corrigir</strong> dados incompletos, inexatos ou desatualizados;</li>
                <li><strong>Solicitar a anonimização, bloqueio ou eliminação</strong> de dados desnecessários;</li>
                <li><strong>Revogar o consentimento</strong> a qualquer momento;</li>
                <li><strong>Solicitar a portabilidade</strong> dos seus dados a outro fornecedor;</li>
                <li><strong>Opor-se</strong> ao tratamento realizado em descumprimento da lei.</li>
              </ul>
              <p className="mt-4">
                Para exercer seus direitos, entre em contato conosco pelo WhatsApp ou e-mail informados na seção de contato abaixo.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">8. Cookies</h2>
              <p>
                Nosso site utiliza cookies para melhorar sua experiência de navegação. Os cookies essenciais são necessários para o funcionamento do site. Cookies analíticos e de marketing são utilizados somente mediante seu consentimento. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">9. Segurança</h2>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia de dados, controles de acesso e treinamento regular da equipe.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">10. Alterações nesta política</h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos mudanças significativas por meio do nosso site ou por outros canais de comunicação. Recomendamos a revisão periódica deste documento.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-medium text-foreground mb-4">11. Contato e Encarregado de Dados (DPO)</h2>
              <div className="bg-secondary/40 rounded-2xl p-6 mt-4 space-y-2">
                <p><strong>Clínica BELS</strong></p>
                <p>Edifício Igarassu – R. Surubim, 577, 1º andar – Cidade Monções, São Paulo – SP</p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+mais+informações+sobre+o+Bels+Family%3F&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    (11) 91521-6891
                  </a>
                </p>
              </div>
            </section>

          </div>
        </motion.div>
      </main>

      {/* Footer simples */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-xs tracking-widest uppercase opacity-60">
          © {new Date().getFullYear()} Clínica BELS • Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};

export default PoliticaPrivacidade;
