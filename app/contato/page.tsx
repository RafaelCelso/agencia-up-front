import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Contato | Up Front - Agência Digital",
  description:
    "Entre em contato com a Up Front. Estamos prontos para transformar sua ideia em realidade digital.",
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "contato@agenciaupfront.com.br",
    link: "mailto:contato@agenciaupfront.com.br",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    description: "(11) 95834-4833",
    link: "https://wa.me/qr/AJCPAVOGQFMIC1",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "São Paulo, SP - Brasil",
    link: "#",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Clock,
    title: "Horário",
    description: "Seg - Sex: 9h às 18h",
    link: "#",
    gradient: "from-pink-500 to-cyan-500",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Estamos prontos para transformar sua ideia em realidade digital.
            Vamos conversar sobre seu próximo projeto!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur text-center"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {info.link !== "#" ? (
                      <a
                        href={info.link}
                        className="hover:text-primary transition-colors"
                        target={
                          info.title === "WhatsApp" ? "_blank" : undefined
                        }
                        rel={
                          info.title === "WhatsApp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.description}
                      </a>
                    ) : (
                      info.description
                    )}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Envie sua mensagem
                </CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em até 24
                  horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" placeholder="Nome da sua empresa" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Serviço de Interesse</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem
                          key={index}
                          value={service.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Orçamento Estimado</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma faixa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-10k">
                        R$ 5.000 - R$ 10.000
                      </SelectItem>
                      <SelectItem value="10k-25k">
                        R$ 10.000 - R$ 25.000
                      </SelectItem>
                      <SelectItem value="25k-50k">
                        R$ 25.000 - R$ 50.000
                      </SelectItem>
                      <SelectItem value="50k+">R$ 50.000+</SelectItem>
                      <SelectItem value="not-sure">
                        Não tenho certeza
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-nos mais sobre seu projeto, objetivos e expectativas..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white"
                >
                  <Send className="mr-2" size={20} />
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp & Quick Contact */}
            <div className="space-y-8">
              {/* WhatsApp Card */}
              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                      <WhatsAppIcon className="w-6 h-6 text-white" />
                    </div>
                    WhatsApp
                  </CardTitle>
                  <CardDescription>
                    Fale conosco agora mesmo pelo WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Prefere uma conversa mais rápida? Clique no botão abaixo e
                    fale diretamente com nossa equipe pelo WhatsApp. Respondemos
                    em poucos minutos!
                  </p>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                    asChild
                  >
                    <a
                      href="https://wa.me/qr/AJCPAVOGQFMIC1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="mr-2 w-5 h-5" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ Quick */}
              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Perguntas Frequentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Qual o prazo médio dos projetos?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Varia de 2-4 semanas para sites até 3-6 meses para
                      sistemas complexos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Vocês oferecem suporte pós-entrega?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sim! Oferecemos 3 meses de suporte gratuito e planos de
                      manutenção.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">
                      Como funciona o processo de desenvolvimento?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Briefing → Proposta → Desenvolvimento → Testes → Entrega →
                      Suporte.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Links Úteis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-black border-0 hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-white hover:text-white font-semibold relative overflow-hidden before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-lg before:-z-10 after:absolute after:inset-[2px] after:bg-black after:rounded-[calc(0.75rem-2px)] after:-z-10"
                    asChild
                  >
                    <Link href="/portfolio">Ver Nosso Portfólio</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-black border-0 hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-white hover:text-white font-semibold relative overflow-hidden before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-lg before:-z-10 after:absolute after:inset-[2px] after:bg-black after:rounded-[calc(0.75rem-2px)] after:-z-10"
                    asChild
                  >
                    <Link href="/servicos">Conhecer Nossos Serviços</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-black border-0 hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-white hover:text-white font-semibold relative overflow-hidden before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-lg before:-z-10 after:absolute after:inset-[2px] after:bg-black after:rounded-[calc(0.75rem-2px)] after:-z-10"
                    asChild
                  >
                    <Link href="/comecar-projeto">Começar um Projeto</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  "Criação de Sites",
  "Desenvolvimento de Apps",
  "Agentes de IA",
  "Automações",
  "Sistemas Web",
  "Design & Branding",
  "Social Media",
  "Consultoria Digital",
  "Outro",
];
