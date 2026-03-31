import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-bels.png";

const navLinks = [
  { label: "Protocolos", href: "#protocolos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      {/* AJUSTE DE CONTAINER:
         Aumentei a altura da barra para acomodar a logo maior.
         - Mobile: h-28 (112px)
         - Desktop: h-40 (160px) 
      */}
      <div className="container mx-auto px-6 flex items-center justify-between h-28 md:h-40 transition-all duration-300">
        
        <a href="#" className="flex-shrink-0">
          {/* AJUSTE DE LOGO (+30%):
             - Mobile: h-20 (80px)
             - Desktop: h-32 (128px)
          */}
          <img 
            src={logo} 
            alt="Clínica BELS" 
            className="h-20 md:h-32 w-auto object-contain transition-all duration-300" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide uppercase text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+mais+informações+sobre+o+Bels+Family%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Agendar consulta
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+mais+informações+sobre+o+Bels+Family%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold mt-4 shadow-md"
              >
                Agendar consulta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;