import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const depoimentos = [
  {
    name: "Mariana S.",
    text: "Nunca fui tão bem atendida em uma clínica. O cuidado é real, o acompanhamento é de verdade. Me sinto acolhida e segura em cada consulta.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "A equipe inteira é incrível. Fiz meu check-up cardiometabólico e fui encaminhado para nutrologia. Tudo no mesmo lugar, com atenção total.",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    text: "O protocolo de rejuvenescimento facial superou todas as minhas expectativas. Resultado natural e pele visivelmente mais jovem.",
    rating: 5,
  },
];

const Depoimentos = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-muted-foreground text-base">
            Relatos reais de pacientes que encontraram na Bels acompanhamento, escuta e segurança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((dep, i) => (
            <motion.div
              key={dep.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-secondary p-8 rounded-2xl relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: dep.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{dep.text}"
              </p>
              <p className="text-sm font-semibold text-foreground">{dep.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
