import { Link } from "react-router-dom";
import logo from "@/assets/logo-bels.png";
import { MapPin, Instagram, ArrowRight, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511915216891&text=Quero+mais+informações+sobre+o+Bels+Family%3F&type=phone_number&app_absent=0";
  const instagramUrl = "https://www.instagram.com/clinicabels/";
  const developerUrl = "https://lp.eufacoseu.marketing";

  return (
    <footer className="bg-foreground pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* --- COLUNA 1: Marca e Conceito (Ocupa 5 colunas) --- */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <img 
              src={logo} 
              alt="Clínica BELS" 
              className="h-20 w-auto brightness-0 invert mb-8 opacity-90" 
            />
            <p className="text-background/70 text-base leading-relaxed max-w-sm font-light">
              Bem Estar, Longevidade e Saúde. <br/>
              Resgatamos a essência do cuidado contínuo, unindo estrutura moderna, 
              tecnologia e uma equipe que olha para você por inteiro.
            </p>
            
            {/* Botão Social Luxuoso */}
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 text-background/80 hover:text-primary transition-colors duration-300"
            >
              <div className="p-3 border border-white/20 rounded-full group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Instagram size={20} />
              </div>
              <span className="text-sm font-medium tracking-widest uppercase">Siga no Instagram</span>
            </a>
          </div>

          {/* --- COLUNA 2: Contato e Localização (Ocupa 4 colunas) --- */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-serif text-2xl text-background mb-8">
              Visite a Bels
            </h4>
            
            <div className="flex items-start gap-4 mb-8 group cursor-pointer">
              <div className="mt-1 text-primary">
                 <MapPin size={22} strokeWidth={1.5} />
              </div>
              <p className="text-background/60 text-sm md:text-base leading-relaxed group-hover:text-background/90 transition-colors duration-300">
                Edifício Igarassu <br />
                R. Surubim, 577 - 1º andar <br />
                Cidade Monções, São Paulo - SP <br />
                CEP 04571-050
              </p>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-background text-sm hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
            >
              <MessageCircle size={18} />
              <span>Agendar via WhatsApp</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* --- COLUNA 3: Navegação (Ocupa 3 colunas) --- */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-serif text-2xl text-background mb-8">
              Navegação
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Protocolos", href: "#protocolos" },
                { label: "Sobre a Clínica", href: "#sobre" },
                { label: "Especialidades", href: "#especialidades" },
                { label: "Resultados", href: "#depoimentos" }, 
                { label: "Dúvidas Frequentes", href: "#faq" }, 
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-background/50 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm tracking-wide flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"/>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* --- Footer Inferior --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/30 text-xs tracking-wider uppercase text-center md:text-left">
            © {new Date().getFullYear()} Clínica BELS. Todos os direitos reservados.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
             <div className="flex gap-6">
               <Link to="/politica-de-privacidade" className="text-background/30 text-xs cursor-pointer hover:text-primary transition-colors">Política de Privacidade</Link>
               <span className="text-background/30 text-xs cursor-pointer hover:text-background/60 transition-colors">Termos de Uso</span>
             </div>
             
             {/* Créditos do Desenvolvedor */}
             <a 
               href={developerUrl}
               target="_blank" 
               rel="noopener noreferrer"
               className="text-background/30 text-xs hover:text-primary transition-colors tracking-widest uppercase border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 mt-2 md:mt-0"
             >
               Desenvolvido pela EFSM
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;