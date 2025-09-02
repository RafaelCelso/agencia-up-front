import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Bot,
  Zap,
  Smartphone,
  Palette,
  Share2,
  Code,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description:
      "Sites responsivos e modernos que convertem visitantes em clientes.",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Chatbots inteligentes e assistentes virtuais para automatizar atendimento.",
  },
  {
    icon: Zap,
    title: "Automações",
    description:
      "Processos automatizados que economizam tempo e aumentam eficiência.",
  },
  {
    icon: Code,
    title: "Sistemas Web",
    description: "Desenvolvimento de sistemas web robustos e escaláveis.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos nativos e híbridos para iOS e Android.",
  },
  {
    icon: Lightbulb,
    title: "Desenvolvimento de Produto",
    description: "Da ideia ao lançamento, criamos produtos digitais completos.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Interfaces intuitivas e experiências de usuário memoráveis.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Estratégias digitais que amplificam sua presença online.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-card/30 relative z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções digitais completas para impulsionar seu negócio
            no mundo digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <service.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="text-xl font-playfair text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
