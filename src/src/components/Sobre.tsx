import { motion } from "framer-motion";
import { Heart, Shield, Clock } from "lucide-react";
import aboutImage from "@/assets/woman-practicing-advanced-yoga-summer-park.jpg";

const values = [
  { 
    icon: Heart, 
    title: "Cuidado Contínuo", 
    text: "Sua história é levada a sério. Não tratamos apenas sintomas, cuidamos da pessoa." 
  },
  { 
    icon: Shield, 
    title: "Equipe Especializada", 
    text: "Profissionais dedicados à sua saúde, segurança e bem-estar integral." 
  },
  { 
    icon: Clock, 
    title: "Tempo de Qualidade", 
    text: "Sem pressa. Consultas detalhadas onde você é a única prioridade." 
  },
];

const Sobre = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background overflow-hidden relative">
      
      {/* Elemento Decorativo de Fundo (Círculo suave) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-[120px] -z-10 opacity-60" />

      <div className="container mx-auto px-6">
        
        {/* Header Centralizado antes de dividir */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 md:mb-20"
        >
          <span className="text-primary font-body text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 border border-primary/20 rounded-full inline-block mb-6">
            Sobre a Bels
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            A Bels nasceu de uma{" "}
            <span className="text-primary italic font-serif relative">
              pergunta essencial
            </span>
          </h2>
        </motion.div>

        {/* --- GRID DE 3 COLUNAS --- */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          
          {/* 1. COLUNA ESQUERDA: Texto / Narrativa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:text-right flex flex-col lg:items-end"
          >
             <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                por que o cuidado com a saúde precisa ser{" "}
                <span className="text-primary">
                  fragmentado?
                </span>
              </p>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Resgatamos o conceito de acompanhamento contínuo, unindo estrutura moderna, tecnologia de ponta e uma relação médico-paciente verdadeira.
              </p>

              <div className="bg-secondary/30 p-6 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg border border-primary/5 relative mt-4 max-w-md">
                <p className="font-heading italic text-lg text-foreground/80 text-center">
                  "Aqui, cada paciente é tratado com tempo, atenção e planejamento."
                </p>
              </div>
          </motion.div>

          {/* 2. COLUNA CENTRAL: Imagem (O Pilar Visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }} // Curva luxuosa
            className="relative h-[500px] md:h-[600px] w-full"
          >
            {/* Moldura da Imagem - Estilo 'Arch' ou 'Pill' alongado para elegância */}
            <div className="relative h-full w-full rounded-[100px] overflow-hidden shadow-2xl shadow-primary/10 border-[8px] border-white">
              <img
                src={aboutImage}
                alt="Mulher praticando yoga em parque ensolarado"
                className="w-full h-full object-cover"
              />
              
              {/* Gradiente sutil sobre a imagem para dar profundidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Elemento flutuante decorativo (Círculo giratório) */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-xl animate-[spin_10s_linear_infinite]">
               <svg viewBox="0 0 100 100" width="100%" height="100%" className="w-full h-full p-2">
                  <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
                  <text className="text-[11px] font-bold uppercase tracking-[0.15em] fill-primary">
                    <textPath href="#curve">
                      • Clínica Bels • Saúde • Estética • Wellness
                    </textPath>
                  </text>
               </svg>
               {/* Centro do selo */}
               <div className="absolute inset-0 m-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  B
               </div>
            </div>
          </motion.div>

          {/* 3. COLUNA DIREITA: Valores (Bullets) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid gap-6 lg:justify-start"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="group flex gap-5 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-x-1 border border-transparent hover:border-primary/10"
              >
                <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light group-hover:text-foreground/80">
                    {v.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Sobre;