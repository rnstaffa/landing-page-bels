import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

// MUDANÇA REALIZADA AQUI: Caminho da imagem atualizado
import faqImage from "@/assets/portrait-woman-trying-facial-yoga-massage-stay-young.jpg";

const objecoes = [
  {
    pergunta: "E se eu não me adaptar ao tratamento?",
    resposta:
      "Nossos protocolos não são rígidos. Acompanhamos sua evolução semana a semana e fazemos ajustes conforme sua resposta biológica e feedback. O conforto e a segurança são pilares do tratamento.",
  },
  {
    pergunta: "E se eu não tiver tempo para seguir tudo?",
    resposta:
      "Entendemos a rotina da mulher moderna. O tratamento é desenhado para ser viável, com passos simples e objetivos. Não criamos rotinas impossíveis, mas sim estratégias eficientes que cabem no seu dia.",
  },
  {
    pergunta: "O resultado vai ficar natural?",
    resposta:
      "Absolutamente. A filosofia da Clínica Bels é o 'Gerenciamento do Envelhecimento'. Não transformamos rostos, apenas realçamos sua beleza e suavizamos marcas, respeitando sua anatomia e características únicas.",
  },
];

const Objecoes = () => {
  // Estado para controlar qual pergunta está aberta (começa com a primeira aberta)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- COLUNA ESQUERDA: A Imagem (Protagonista) --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] lg:h-[700px] w-full"
          >
            {/* Container da Imagem com recorte elegante */}
            <div className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5 relative z-10">
              <img
                src={faqImage}
                alt="Mulher realizando massagem facial e autocuidado"
                className="w-full h-full object-cover object-center transition-transform duration-[2s] hover:scale-105"
              />
              {/* Overlay gradiente para sofisticação */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Elemento Decorativo Atrás (Background Blur) */}
            <div className="absolute -top-10 -left-10 w-2/3 h-2/3 bg-primary/5 rounded-full blur-3xl -z-0" />
            
            {/* Card Flutuante sobre a imagem (Prova Social / Segurança) */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-10 right-6 md:-right-6 z-20 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/40 max-w-[240px]"
            >
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                   <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">Sem riscos</p>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-1">
                    Protocolos seguros e validados clinicamente.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- COLUNA DIREITA: Conteúdo e Accordion --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Cabeçalho */}
            <div className="mb-10">
              <span className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-primary/40"></span>
                Dúvidas Frequentes
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground leading-tight">
                Entendemos suas <br/>
                <span className="text-muted-foreground italic font-serif">preocupações.</span>
              </h2>
            </div>

            {/* Lista Expansível (Accordion) */}
            <div className="space-y-4">
              {objecoes.map((item, i) => {
                const isOpen = openIndex === i;
                
                return (
                  <motion.div
                    key={i}
                    initial={false}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`cursor-pointer border-b border-border/60 pb-4 transition-colors duration-300 ${isOpen ? "border-primary/50" : "hover:border-primary/30"}`}
                  >
                    <div className="flex justify-between items-center py-4 group">
                      <h3 className={`font-heading text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"}`}>
                        {item.pergunta}
                      </h3>
                      <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-primary/10 text-primary" : "text-muted-foreground group-hover:bg-secondary"}`}>
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground text-base leading-relaxed pb-6 pr-6 font-light">
                            {item.resposta}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+falar+com+a+clínica+Bels&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(var(--primary-rgb),0.3)] hover:shadow-lg hover:-translate-y-0.5"
              >
                Conversar com a equipe Bels
                <span className="text-xl">→</span>
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Objecoes;