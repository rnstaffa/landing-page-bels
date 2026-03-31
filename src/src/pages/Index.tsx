import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BelsParaQuem from "@/components/BelsParaQuem";
import Protocolos from "@/components/Protocolos";
import Sobre from "@/components/Sobre";
import Especialidades from "@/components/Especialidades";
import Depoimentos from "@/components/Depoimentos";
import FAQSection from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Protocolos />
      <BelsParaQuem />
      <Sobre />
      <Depoimentos />
      <FAQSection />
      <CTAFinal />
      <Footer />
    </div>
  );
};

export default Index;

