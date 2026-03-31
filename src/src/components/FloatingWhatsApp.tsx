import { motion, AnimatePresence } from "framer-motion";
// Removi o MessageCircle pois não vamos mais usar
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Link do WhatsApp formatado
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+mais+informações+sobre+o+Bels+Family%3F&type=phone_number&app_absent=0";

  // Só mostra o botão depois que a pessoa rolar um pouco a página
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
          
          {/* Balãozinho de "Ajuda" (Tooltip) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 mb-2 mr-2"
              >
                <p className="text-sm font-medium text-gray-700">
                  Podemos ajudar?
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* O Botão Principal */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            // Usei a cor oficial do WhatsApp no BG: #25D366
            className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-shadow duration-300"
          >
            {/* Efeito de "Pulse" (Ondas saindo) */}
            <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping group-hover:animate-none" />
            
            {/* --- INÍCIO DO LOGO OFICIAL SVG --- */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // Mantive os mesmos tamanhos do ícone anterior para caber perfeito
              className="w-7 h-7 md:w-8 md:h-8 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.463 1.065 2.876 1.213 3.075.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.757-.719 2.005-1.414.247-.695.247-1.29.173-1.414z"/>
            </svg>
            {/* --- FIM DO LOGO OFICIAL SVG --- */}

            {/* Bolinha de notificação (simula mensagem não lida) */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
              <span className="w-full h-full animate-pulse rounded-full bg-red-500 opacity-75 absolute"></span>
            </span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;