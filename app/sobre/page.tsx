import type { Metadata } from "next";
import { Users, Target, Lightbulb, Heart, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedCounter } from "@/components/hero-section";

export const metadata: Metadata = {
  title: "Sobre | Up Front - Agência Digital",
  description:
    "Conheça a Up Front, agência digital especializada em transformar ideias em soluções digitais inovadoras que geram resultados reais.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Sempre buscamos as tecnologias mais avançadas para criar soluções únicas e eficientes.",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Paixão",
    description:
      "Amamos o que fazemos e isso se reflete na qualidade e dedicação em cada projeto.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Cada solução é pensada para gerar impacto real e mensurável no seu negócio.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Trabalhamos lado a lado com nossos clientes, construindo parcerias duradouras.",
    gradient: "from-pink-500 to-cyan-500",
  },
];

const stats = [
  { number: "50+", label: "Projetos Entregues" },
  { number: "30+", label: "Clientes Satisfeitos" },
  { number: "3+", label: "Anos de Experiência" },
  { number: "24/7", label: "Suporte Disponível" },
];

const team = [
  {
    name: "Ana Silva",
    role: "CEO & Fundadora",
    description:
      "Especialista em estratégia digital com mais de 8 anos de experiência em transformação digital.",
    image: "/professional-woman-ceo-tech.png",
  },
  {
    name: "Carlos Santos",
    role: "CTO",
    description:
      "Desenvolvedor full-stack apaixonado por IA e automação, liderando nossa equipe técnica.",
    image: "/professional-man-cto-developer.png",
  },
  {
    name: "Marina Costa",
    role: "Head of Design",
    description:
      "Designer UX/UI com foco em criar experiências digitais memoráveis e funcionais.",
    image: "/professional-woman-designer-creative.png",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
                Sobre a{" "}
                <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  Up Front
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Somos uma agência digital especializada em transformar ideias em
                soluções digitais inovadoras que geram resultados reais para seu
                negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white"
                >
                  <Link href="/contato">Falar Conosco</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="px-6 sm:px-8 py-3 bg-black border-0 hover:bg-primary/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-white hover:text-white font-semibold relative overflow-hidden before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-lg before:-z-10 after:absolute after:inset-[2px] after:bg-black after:rounded-[calc(0.75rem-2px)] after:-z-10"
                >
                  <Link href="/portfolio">Ver Nosso Trabalho</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/modern-digital-agency-team-working.png"
                alt="Equipe Up Front"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-pink-500 to-cyan-500 p-6 rounded-xl text-white">
                <Zap className="w-8 h-8 mb-2" />
                <p className="font-bold text-lg">Inovação Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Democratizar o acesso à tecnologia de ponta, ajudando empresas de
              todos os tamanhos a se destacarem no mundo digital através de
              soluções personalizadas, inovadoras e que realmente fazem a
              diferença.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e projeto que desenvolvemos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur text-center"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça os profissionais apaixonados por tecnologia que fazem a Up
              Front acontecer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
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
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos prontos para transformar sua visão em realidade digital.
            Entre em contato e vamos conversar sobre seu próximo projeto.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white px-8 py-3"
          >
            <Link href="/contato">Iniciar Conversa</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
