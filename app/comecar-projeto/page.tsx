import type { Metadata } from "next";
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  Zap,
  Target,
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
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const projectTypes = [
  {
    id: "website",
    title: "Site/Landing Page",
    description: "Site institucional, landing page ou e-commerce",
    icon: "🌐",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    id: "app",
    title: "Aplicativo",
    description: "App móvel nativo ou web app progressivo",
    icon: "📱",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "system",
    title: "Sistema Web",
    description: "ERP, CRM ou sistema personalizado",
    icon: "⚙️",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "ai",
    title: "IA & Automação",
    description: "Chatbots, automações e soluções com IA",
    icon: "🤖",
    gradient: "from-pink-500 to-cyan-500",
  },
];

const timeline = [
  {
    step: 1,
    title: "Briefing",
    description: "Você preenche o formulário com detalhes do projeto",
    icon: Target,
  },
  {
    step: 2,
    title: "Análise",
    description: "Nossa equipe analisa e prepara a proposta",
    icon: Users,
  },
  {
    step: 3,
    title: "Proposta",
    description: "Enviamos proposta detalhada em até 24h",
    icon: Calendar,
  },
  {
    step: 4,
    title: "Desenvolvimento",
    description: "Iniciamos o desenvolvimento do seu projeto",
    icon: Zap,
  },
];

const services = [
  "Design UI/UX",
  "Desenvolvimento Frontend",
  "Desenvolvimento Backend",
  "Banco de Dados",
  "Integração de APIs",
  "Sistema de Pagamento",
  "Autenticação de Usuários",
  "Painel Administrativo",
  "SEO e Performance",
  "Hospedagem e Deploy",
  "Suporte e Manutenção",
  "Treinamento da Equipe",
];

export const metadata: Metadata = {
  title: "Começar Projeto | Up Front - Agência Digital",
  description:
    "Inicie seu projeto digital conosco. Preencha o briefing e receba uma proposta personalizada em 24 horas.",
};

export default function StartProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Vamos{" "}
            <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Começar
            </span>{" "}
            seu Projeto
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
            Preencha o briefing abaixo e receba uma proposta personalizada em
            até 24 horas. Vamos transformar sua ideia em realidade digital!
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Proposta gratuita</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Resposta em 24h</span>
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Sem compromisso</span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {index < timeline.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-6 h-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">
                  Briefing do Projeto
                </CardTitle>
                <CardDescription className="text-lg">
                  Quanto mais detalhes você fornecer, melhor será nossa proposta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Project Type */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    Tipo de Projeto *
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <Card
                        key={type.id}
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
                      >
                        <CardHeader className="text-center pb-4">
                          <div className="text-3xl mb-2">{type.icon}</div>
                          <CardTitle className="text-lg">
                            {type.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {type.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="project-name">Nome do Projeto *</Label>
                    <Input
                      id="project-name"
                      placeholder="Ex: Site da minha empresa"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa/Organização</Label>
                    <Input id="company" placeholder="Nome da sua empresa" />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Seu Nome *</Label>
                    <Input
                      id="contact-name"
                      placeholder="Nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Telefone</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição do Projeto *</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva seu projeto: objetivos, funcionalidades desejadas, público-alvo, referências..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                {/* Budget */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    Orçamento Estimado *
                  </Label>
                  <RadioGroup
                    defaultValue=""
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                      <RadioGroupItem
                        value="5k-15k"
                        id="budget-1"
                        className="border-2 border-muted-foreground/50 data-[state=checked]:border-primary"
                      />
                      <Label
                        htmlFor="budget-1"
                        className="cursor-pointer flex-1"
                      >
                        R$ 5.000 - R$ 15.000
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                      <RadioGroupItem
                        value="15k-30k"
                        id="budget-2"
                        className="border-2 border-muted-foreground/50 data-[state=checked]:border-primary"
                      />
                      <Label
                        htmlFor="budget-2"
                        className="cursor-pointer flex-1"
                      >
                        R$ 15.000 - R$ 30.000
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                      <RadioGroupItem
                        value="30k-50k"
                        id="budget-3"
                        className="border-2 border-muted-foreground/50 data-[state=checked]:border-primary"
                      />
                      <Label
                        htmlFor="budget-3"
                        className="cursor-pointer flex-1"
                      >
                        R$ 30.000 - R$ 50.000
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                      <RadioGroupItem
                        value="50k+"
                        id="budget-4"
                        className="border-2 border-muted-foreground/50 data-[state=checked]:border-primary"
                      />
                      <Label
                        htmlFor="budget-4"
                        className="cursor-pointer flex-1"
                      >
                        R$ 50.000+
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                      <RadioGroupItem
                        value="not-sure"
                        id="budget-5"
                        className="border-2 border-muted-foreground/50 data-[state=checked]:border-primary"
                      />
                      <Label
                        htmlFor="budget-5"
                        className="cursor-pointer flex-1"
                      >
                        Não tenho certeza
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <Label htmlFor="timeline">Prazo Desejado</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Quando você gostaria de lançar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">
                        O mais rápido possível
                      </SelectItem>
                      <SelectItem value="1-month">Em 1 mês</SelectItem>
                      <SelectItem value="2-3-months">Em 2-3 meses</SelectItem>
                      <SelectItem value="3-6-months">Em 3-6 meses</SelectItem>
                      <SelectItem value="flexible">Flexível</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Services Needed */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">
                    Serviços Necessários
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        <Checkbox
                          id={`service-${index}`}
                          className="border-2 border-muted-foreground/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                        />
                        <Label
                          htmlFor={`service-${index}`}
                          className="text-sm cursor-pointer flex-1"
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <Label htmlFor="additional">Informações Adicionais</Label>
                  <Textarea
                    id="additional"
                    placeholder="Referências, inspirações, requisitos específicos, integrações necessárias..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Submit */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white px-12 py-4 text-lg"
                  >
                    Enviar Briefing
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Ao enviar, você concorda com nossos termos de privacidade.
                    Entraremos em contato em até 24 horas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prefere falar diretamente?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Se preferir, você pode entrar em contato conosco diretamente pelo
            WhatsApp ou agendar uma videochamada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3"
            >
              <a
                href="https://wa.me/qr/AJCPAVOGQFMIC1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="mr-2 w-5 h-5" />
                WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-8 py-3 bg-transparent"
            >
              <Link href="/contato">Outros Contatos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
