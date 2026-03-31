import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

// Variáveis de animação
const textVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" as const } 
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroBanner}
            alt="Bem-estar e saúde"
            className="w-full h-full object-cover object-[80%_center] md:object-right"
          />
        </motion.div>
        
        {/* Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent lg:via-background/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl md:pl-12 lg:pl-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={textVariants}
            className="font-heading text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-foreground mb-6"
          >
            Estética médica e Wellness,
            <br />
            <span className="text-primary italic font-serif relative">
              com acompanhamento de verdade.
            </span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-lg font-light"
          >
            Na Clínica BELS, unimos ciência, tecnologia e escuta médica para desenvolver protocolos personalizados, com foco em resultados naturais, segurança e uma visão de longo prazo sobre saúde, corpo e longevidade.
          </motion.p>

          <motion.div variants={textVariants}>
            <a
              href="https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+mais+informações+sobre+o+Bels+Family%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-10 py-5 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.6)] hover:-translate-y-1"
            >
              Agendar avaliação personalizada
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;