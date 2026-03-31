import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImage from "@/assets/female-patient-receiving-injection-her-face.jpg";

const faqs = [
  { q: "Em quantas sessões o protocolo é realizado?", a: "xxx" },
  { q: "Quando os primeiros resultados costumam aparecer?", a: "xxx" },
  { q: "Existe tempo de recuperação após as sessões?", a: "xxx" },
  { q: "É possível combinar mais de um protocolo?", a: "xxx" },
  { q: "Como é feita a avaliação antes de iniciar o tratamento?", a: "xxx" },
  { q: "O que diferencia um protocolo estruturado de um procedimento isolado?", a: "xxx" },
  { q: "Os resultados são progressivos ou imediatos?", a: "xxx" },
  { q: "Existe manutenção após a conclusão do plano inicial?", a: "xxx" },
  { q: "Quem já realizou outros procedimentos pode iniciar um protocolo na Bels?", a: "xxx" },
  { q: "Os protocolos tratam apenas estética ou também saúde metabólica?", a: "xxx" },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background relative overflow-hidden">
      
      {/* Luz de fundo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* --- COLUNA ESQUERDA: IMAGEM ALONGADA --- */}
          {/* O sticky mantém ela grudada acompanhando o scroll */}
          <div className="lg:col-span-5 hidden lg:block sticky top-24 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              // MUDANÇA AQUI: aspect-[3/4] deixa ela bem mais vertical. 
              // max-h-[85vh] impede que ela fique maior que a tela do computador do usuário.
              className="relative w-full aspect-[3/4] max-h-[85vh] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border border-primary/5"
            >
              <img
                src={faqImage}
                alt="Paciente Bels"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Selo/Detalhe na foto */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                 <p className="text-white text-sm font-medium">Atendimento Personalizado</p>
                 <p className="text-white/70 text-xs font-light mt-1">Tire todas as suas dúvidas com nossa equipe.</p>
              </div>
            </motion.div>
          </div>

          {/* --- COLUNA DIREITA: FAQ --- */}
          <div className="lg:col-span-7">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="text-primary font-body text-xs md:text-sm font-semibold tracking-[0.25em] uppercase flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-primary/40"></span>
                Transparência
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1]">
                Dúvidas <span className="italic font-serif font-light text-muted-foreground">Frequentes.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-secondary/30 rounded-2xl border border-primary/5 px-6 hover:bg-secondary/50 hover:border-primary/10 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-heading text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5 font-light">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;