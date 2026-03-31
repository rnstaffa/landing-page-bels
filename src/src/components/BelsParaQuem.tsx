import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

// IMPORTAÇÃO DAS IMAGENS
// Dica: Converta os arquivos .heic para .jpg para garantir que abram em todos os celulares e computadores.
import foto1 from "@/assets/ foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg"; 
import foto4 from "@/assets/foto4.jpg";

const itens = [
  "Busca resultados naturais, sem exageros",
  "Quer tratar flacidez, contorno ou qualidade da pele com segurança",
  "Deseja emagrecer com suporte médico",
  "Valoriza acompanhamento contínuo",
  "Prefere resolver tudo em um só lugar, com equipe integrada",
];

const galeriaFotos = [foto1, foto2, foto3, foto4];

const BelsParaQuem = () => {
  // Estado para controlar qual foto está aberta no Lightbox
  const [fotoAberta, setFotoAberta] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-secondary/30 via-background to-secondary/30 relative overflow-hidden">
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none opacity-70" />
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none opacity-70" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* --- CABEÇALHO --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-primary/40"></span>
              <span className="text-primary font-body text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                Perfil ideal
              </span>
              <span className="w-8 h-[1px] bg-primary/40"></span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] max-w-3xl mx-auto">
              A Bels é para quem <br className="hidden md:block" />
              <span className="text-muted-foreground italic font-serif font-light">
                quer resultado com responsabilidade.
              </span>
            </h2>
          </motion.div>

          {/* --- GRID DE CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mb-32">
            {itens.map((item, i) => {
              let colSpanClass = "col-span-1 md:col-span-1 lg:col-span-2"; 
              if (i >= 3) colSpanClass = "col-span-1 md:col-span-1 lg:col-span-3";
              if (i === 4) colSpanClass = "col-span-1 md:col-span-2 lg:col-span-3";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`
                    relative group overflow-hidden
                    flex flex-col md:flex-row items-start md:items-center gap-6 p-8 md:p-10 
                    rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] hover:bg-white/10
                    hover:border-primary/30 transition-all duration-500
                    ${colSpanClass}
                  `}
                >
                  <div className="absolute -right-2 -bottom-4 text-8xl md:text-9xl font-serif font-light text-white/5 group-hover:text-primary/5 transition-colors duration-500 pointer-events-none select-none z-0">
                    0{i + 1}
                  </div>
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-500">
                    <CheckCircle2 className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed font-light text-base relative z-10">
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* --- GALERIA DE FOTOS --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-primary/10"
          >
            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">
                {/* --- Titulo se a Carol achar necessario --- */}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {galeriaFotos.map((foto, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                  onClick={() => setFotoAberta(foto)}
                >
                  <img 
                    src={foto} 
                    alt={`Galeria Bels ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay escuro no hover para indicar que é clicável */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wider text-sm">
                      AMPLIAR
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* --- LIGHTBOX (Modal para abrir a foto) --- */}
      <AnimatePresence>
        {fotoAberta && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setFotoAberta(null)} // Clicar no fundo fecha a foto
          >
            {/* Botão de Fechar */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-50"
              onClick={() => setFotoAberta(null)}
            >
              <X size={28} />
            </button>

            {/* Imagem Ampliada */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={fotoAberta}
              alt="Foto Ampliada"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Impede que clicar na foto feche o lightbox
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default BelsParaQuem;