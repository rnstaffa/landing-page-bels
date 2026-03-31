import { motion } from "framer-motion";
import {
  Sparkles,
  Dumbbell,
  Baby,
  HeartPulse,
  Syringe,
  FileSearch,
  ArrowRight, // Adicionei o ícone da seta
} from "lucide-react";

const especialidades = [
  {
    icon: Sparkles,
    title: "Estética e Dermatologia",
    items: [
      "Liftera e bioestimuladores faciais",
      "Programa de Skin Care personalizado",
      "Depilação a laser e rejuvenescimento",
    ],
  },
  {
    icon: Dumbbell,
    title: "Wellness e Emagrecimento",
    items: [
      "Nutrologia clínica e esportiva",
      "Emagrecimento com suporte médico",
      "Acompanhamento pré e pós bariátrica",
    ],
  },
  {
    icon: Baby,
    title: "Pediatria Integrativa",
    items: [
      "SOS Pediatra (Atendimento emergencial)",
      "Programa Meu Primeiro Ano BELS",
      "Vacinas e puericultura completa",
    ],
  },
  {
    icon: HeartPulse,
    title: "Cardiologia e Geriatria",
    items: [
      "Check-ups cardiometabólicos completos",
      "Longevidade com olhar preventivo",
    ],
  },
  {
    icon: Syringe,
    title: "Terapias Injetáveis",
    items: [
      "Reposição de vitaminas e minerais (Soro)",
      "Protocolos de alta performance e imunidade",
    ],
  },
  {
    icon: FileSearch,
    title: "Diagnóstico Avançado",
    items: [
      "Ultrassonografia e exames laboratoriais",
      "Bioimpedância e calorimetria indireta",
    ],
  },
];

const EspecialidadesCarousel = () => {
  // Duplicamos a lista 2 vezes para garantir que o loop seja suave e preencha telas grandes
  const infiniteEspecialidades = [...especialidades, ...especialidades];

  return (
    <section id="especialidades" className="py-24 md:py-32 bg-secondary/30 overflow-hidden relative">
      
      {/* --- ESTILOS INJETADOS (Para garantir a animação sem config extra) --- */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-luxury {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll-luxury:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase">
            Nossas Especialidades
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground mt-4 leading-tight">
            Cuidado 360º: Estética, saúde <br className="hidden md:block" /> e bem-estar integrados.
          </h2>
        </motion.div>
      </div>

      {/* MÁSCARA DE GRADIENTE:
         Cria o efeito visual de desaparecimento nas laterais.
      */}
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* CONTAINER DA ANIMAÇÃO */}
        <div className="flex w-max gap-8 animate-scroll-luxury py-4 pl-4">
          
          {infiniteEspecialidades.map((esp, i) => (
            <div
              key={`${esp.title}-${i}`} // Chave única combinada
              // Card com design luxuoso
              className="w-[350px] md:w-[400px] bg-background p-8 md:p-10 rounded-[2rem] border border-border/50 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-primary/30 group/card flex flex-col justify-between h-auto select-none"
            >
              <div>
                {/* Ícone */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-light/50 flex items-center justify-center mb-8 group-hover/card:bg-primary/10 transition-colors duration-500">
                  <esp.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                
                {/* Título */}
                <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-6 group-hover/card:text-primary transition-colors duration-300">
                  {esp.title}
                </h3>
                
                {/* Lista */}
                <ul className="space-y-4">
                  {esp.items.map((item, idx) => (
                    <li key={`${item}-${idx}`} className="flex items-start gap-3 text-muted-foreground group-hover/card:text-foreground/80 transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0 group-hover/card:bg-primary transition-colors duration-300" />
                      <span className="text-sm md:text-base font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Detalhe rodapé */}
              <div className="w-12 h-1 bg-primary/10 mt-8 rounded-full group-hover/card:w-full group-hover/card:bg-primary/20 transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>

      {/* --- CTA ABAIXO DO CARROSSEL --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-center mt-16 md:mt-24 px-6"
      >
        <a
          href="https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+mais+informações+sobre+o+Bels+Family%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(var(--primary-rgb),0.3)] hover:shadow-xl hover:-translate-y-0.5"
        >
          Agendar avaliação com especialista
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>

    </section>
  );
};

export default EspecialidadesCarousel;