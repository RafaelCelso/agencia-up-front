import type { Metadata } from "next";
import {
  ArrowLeft,
  Code,
  Bot,
  Zap,
  Smartphone,
  Palette,
  Share2,
  Cog,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Serviços | Up Front - Agência Digital",
  description:
    "Conheça todos os serviços da Up Front: criação de sites, agentes de IA, automações, desenvolvimento de apps e muito mais.",
};

const services = [
  {
    icon: Code,
    title: "Criação de Sites",
    description: "Sites responsivos, modernos e otimizados para conversão",
    features: [
      "Design responsivo",
      "SEO otimizado",
      "Performance alta",
      "CMS integrado",
    ],
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description: "Chatbots inteligentes e assistentes virtuais personalizados",
    features: [
      "IA conversacional",
      "Integração WhatsApp",
      "Aprendizado contínuo",
      "Suporte 24/7",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Automações",
    description: "Automatize processos e aumente a eficiência do seu negócio",
    features: [
      "Fluxos automatizados",
      "Integração de sistemas",
      "Relatórios automáticos",
      "Economia de tempo",
    ],
    gradient: "from-pink-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Apps",
    description: "Aplicativos móveis nativos e web apps progressivos",
    features: [
      "iOS e Android",
      "PWA",
      "Interface intuitiva",
      "Sincronização cloud",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Cog,
    title: "Sistemas Web",
    description: "Sistemas personalizados para gestão e controle empresarial",
    features: [
      "Dashboard personalizado",
      "Gestão de dados",
      "Relatórios avançados",
      "Segurança robusta",
    ],
    gradient: "from-cyan-500 to-purple-600",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Identidade visual e design de interfaces modernas",
    features: [
      "Branding completo",
      "UI/UX Design",
      "Prototipagem",
      "Design system",
    ],
    gradient: "from-pink-600 to-cyan-500",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Gestão completa das suas redes sociais e marketing digital",
    features: [
      "Gestão de conteúdo",
      "Campanhas pagas",
      "Analytics",
      "Engajamento",
    ],
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Produto",
    description: "Do conceito ao lançamento, desenvolvemos seu produto digital",
    features: [
      "MVP development",
      "Validação de mercado",
      "Escalabilidade",
      "Suporte contínuo",
    ],
    gradient: "from-cyan-600 to-purple-500",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Nossos{" "}
            <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Serviços
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Soluções digitais completas para transformar sua presença online e
            automatizar seus processos de negócio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua
            ideia em realidade digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white px-8 py-3"
            >
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-6 sm:px-8 py-3 bg-black border-0 hover:bg-primary/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-white hover:text-white font-semibold relative overflow-hidden before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-lg before:-z-10 after:absolute after:inset-[2px] after:bg-black after:rounded-[calc(0.75rem-2px)] after:-z-10"
            >
              <Link href="/portfolio">Ver Portfólio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
