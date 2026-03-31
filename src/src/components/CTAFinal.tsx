import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
// Usando a imagem que transmite leveza e felicidade para o encerramento
import ctaImage from "@/assets/lovely-girl-white-top-silk-scarf-enjoys-summer-day-balcony-profile-photo-beautiful-woman-stylish-outfit-terrace.jpg";

const CTAFinal = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        
        {/* O Card Monumental */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-primary rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            
            {/* --- LADO ESQUERDO: Conteúdo --- */}
            <div className="relative z-10 flex flex-col justify-center p-10 md:p-16 lg:p-20 text-left">
              
              {/* Círculos decorativos de fundo sutis */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6 leading-[1.15]"
              >
                Se você busca resultado <br />
                <span className="italic font-serif opacity-90">com responsabilidade,</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-md font-light"
              >
                o próximo passo é entender seu caso com profundidade. Cada protocolo começa com uma avaliação médica detalhada.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+mais+informações+sobre+o+Bels+Family%3F&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full text-base font-semibold hover:bg-gray-50 transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:shadow-xl hover:-translate-y-0.5"
                >
                  Agendar avaliação personalizada
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>

            {/* --- LADO DIREITO: Imagem --- */}
            <div className="relative h-full min-h-[300px] lg:min-h-full overflow-hidden">
              {/* Overlay gradiente para suavizar a transição entre imagem e cor sólida no mobile */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/90 via-primary/20 to-transparent z-10 lg:w-1/2" />
              
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={ctaImage}
                alt="Paciente feliz Bels"
                className="absolute inset-0 w-full h-full object-cover object-top lg:object-center"
              />
            </div>

          </div>
        </motion.div>

        {/* Footer Minimalista de Copyright (Opcional, mas fica bonito aqui) */}
        <div className="text-center mt-12 text-muted-foreground text-xs tracking-widest uppercase opacity-60">
          © {new Date().getFullYear()} Clínica Bels • Medicina e Estética
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;