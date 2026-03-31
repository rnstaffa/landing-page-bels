import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, Sun, Plus, Minus, ArrowRight } from "lucide-react";

import imgGluteo from "@/assets/AdobeStock_404737207.jpeg";
import imgAbdomen from "@/assets/close-up-well-groomed-tight-stomach-young-woman-grey-background.jpg";
import imgFacial from "@/assets/AdobeStock_257518071.jpeg";

const protocolos = [
  {
    id: "01",
    icon: Sparkles,
    title: "Remodelação Glútea",
    subtitle: "Mais projeção, firmeza e contorno, respeitando proporção e naturalidade.",
    description: "Um protocolo médico desenvolvido para remodelar a região glútea de forma estratégica, associando sustentação profunda, definição e estímulo progressivo de colágeno. Protocolo realizado após avaliação médica personalizada.",
    listTitle: "Inclui:",
    items: ["Liftera para firmeza estrutural", "Preenchimento para projeção e contorno", "Bioestimulador de colágeno"],
    price: "2.333,33",
    cta: "Quero entender se é indicado para mim",
    image: imgGluteo,
  },
  {
    id: "02",
    icon: Target,
    title: "Reestruturação Abdominal",
    subtitle: "Redução de gordura resistente e melhora da tensão da pele abdominal.",
    description: "Indicado para flacidez ou gordura localizada persistente. Trabalhamos definição sem comprometer a naturalidade.",
    listTitle: "Inclui:",
    items: ["Enzimas", "Bioestimulador para tração da pele", "Liftera para ancoragem estrutural"],
    price: "1.000",
    cta: "Agendar avaliação personalizada",
    image: imgAbdomen,
  },
  {
    id: "03",
    icon: Sun,
    title: "Lift Facial Estrutural",
    subtitle: "Sustentação e qualidade dérmica com efeito progressivo e natural.",
    description: "Mais do que mudar traços, o objetivo é manter a estrutura facial ao longo do tempo, promovendo firmeza e rejuvenescimento sem exageros.",
    listTitle: "Inclui:",
    items: ["Bioestimulador em pontos estratégicos", "Liftera Full Face (lifting não cirúrgico)"],
    price: "666,67",
    cta: "Conversar com a equipe médica",
    image: imgFacial,
  },
];

const Protocolos = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const currentImage = activeIndex !== null ? protocolos[activeIndex].image : protocolos[0].image;

  return (
    <section id="protocolos" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- COLUNA ESQUERDA: Accordion --- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-primary font-body text-sm font-semibold tracking-[0.25em] uppercase flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-primary"></span>
                Protocolos Signature
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1]">
                Protocolos estruturados,<br />
                <span className="text-muted-foreground italic font-serif">não procedimentos isolados.</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {protocolos.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <motion.div
                    key={item.id}
                    layout 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, layout: { duration: 0.4 } }}
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className={`group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden relative
                      ${isOpen 
                        ? "bg-white shadow-xl border-primary/20 scale-[1.02]" 
                        : "bg-white/40 hover:bg-white/80 border-transparent hover:border-primary/10"
                      }
                    `}
                  >
                    <motion.div layout className="p-6 md:p-8 flex items-start gap-6 relative z-10">
                      <span className={`text-4xl font-serif font-light transition-colors duration-500 ${isOpen ? "text-primary" : "text-muted-foreground/30"}`}>
                        {item.id}
                      </span>

                      <div className="flex-1 pt-2">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className={`font-heading text-xl md:text-2xl font-medium transition-colors duration-300 ${isOpen ? "text-foreground" : "text-foreground/70"}`}>
                            {item.title}
                          </h3>
                          <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? "bg-primary text-white" : "bg-transparent text-primary"}`}>
                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                          </div>
                        </div>
                        
                        {!isOpen && (
                          <motion.p 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            className="text-muted-foreground text-sm font-light"
                          >
                            {item.subtitle}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-8 pb-8 pl-20 md:pl-24 pr-8">
                            <p className="text-muted-foreground leading-relaxed mb-6 border-l-2 border-primary/20 pl-4">
                              {item.description}
                            </p>
                            
                            <div className="bg-secondary/50 rounded-xl p-6">
                              <span className="text-xs font-bold tracking-widest uppercase text-primary block mb-3">
                                {item.listTitle}
                              </span>
                              <ul className="grid gap-3 mb-6">
                                {item.items.map((subItem) => (
                                  <li key={subItem} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                                    <ArrowRight size={14} className="text-primary" />
                                    {subItem}
                                  </li>
                                ))}
                              </ul>

                              {/* ESTRUTURA DE PREÇO ADICIONADA */}
                              <div className="mb-6 pt-4 border-t border-primary/10">
                                <div className="flex flex-col">
                                  <span className="text-foreground font-heading text-3xl font-bold">
                                    12x <span className="text-primary">R$ {item.price}</span>
                                  </span>
                                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mt-1">
                                    Sem Juros
                                  </span>
                                </div>
                              </div>

                              <a
                                href={`https://wa.me/5511910023310?text=Olá! Gostaria de entender se o protocolo ${item.title} é indicado para mim.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full md:w-auto gap-2 text-sm font-bold uppercase tracking-wider bg-primary text-white rounded-full px-8 py-4 hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-primary/20"
                              >
                                {item.cta}
                                <ArrowRight size={16} />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {isOpen && (
                       <motion.div 
                         layoutId="activeBar"
                         className="absolute left-0 top-0 bottom-0 w-1 bg-primary" 
                       />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* --- COLUNA DIREITA --- */}
          <div className="lg:col-span-5 relative hidden lg:block h-full">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] bg-muted/20"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt="Tratamento estético Bels"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl pointer-events-none z-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-white">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Tecnologia & Cuidado</p>
                      <p className="text-white/70 text-xs">Protocolos exclusivos Bels</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-primary/20 rounded-[2rem]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Protocolos;