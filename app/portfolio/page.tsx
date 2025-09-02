"use client";

import React from "react";
import {
  ArrowLeft,
  ExternalLink,
  Eye,
  Code,
  Smartphone,
  Bot,
  Palette,
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
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "all", label: "Todos", icon: Eye },
  { id: "websites", label: "Sites", icon: Code },
  { id: "apps", label: "Apps", icon: Smartphone },
  { id: "ai", label: "IA & Automação", icon: Bot },
  { id: "design", label: "Design", icon: Palette },
];

const projects = [
  {
    id: 1,
    title: "E-commerce TechStore",
    description:
      "Plataforma completa de e-commerce com sistema de pagamento integrado e painel administrativo.",
    category: "websites",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    gradient: "from-pink-500 to-purple-600",
    featured: true,
  },
  {
    id: 2,
    title: "App FitTracker",
    description:
      "Aplicativo móvel para acompanhamento de exercícios e metas de fitness com sincronização em tempo real.",
    category: "apps",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["React Native", "Firebase", "Redux", "Charts"],
    gradient: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    id: 3,
    title: "ChatBot Atendimento",
    description:
      "Assistente virtual inteligente para atendimento ao cliente com integração WhatsApp e IA conversacional.",
    category: "ai",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
    tags: ["OpenAI", "WhatsApp API", "Node.js", "NLP"],
    gradient: "from-purple-500 to-pink-600",
    featured: true,
  },
  {
    id: 4,
    title: "Identidade Visual MedCare",
    description:
      "Branding completo para clínica médica incluindo logo, papelaria e guidelines de marca.",
    category: "design",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    tags: ["Branding", "Logo Design", "UI Kit", "Guidelines"],
    gradient: "from-pink-500 to-cyan-500",
    featured: false,
  },
  {
    id: 5,
    title: "Sistema ERP Empresarial",
    description:
      "Sistema completo de gestão empresarial com módulos financeiro, estoque e relatórios avançados.",
    category: "websites",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    tags: ["React", "Node.js", "MongoDB", "Charts.js"],
    gradient: "from-cyan-500 to-purple-600",
    featured: false,
  },
  {
    id: 6,
    title: "App Delivery Food",
    description:
      "Aplicativo de delivery de comida com rastreamento em tempo real e sistema de avaliações.",
    category: "apps",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
    tags: ["Flutter", "Google Maps", "Firebase", "Payments"],
    gradient: "from-purple-600 to-pink-500",
    featured: false,
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Nosso{" "}
            <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Portfólio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-12">
            Conheça alguns dos projetos que desenvolvemos e como transformamos
            ideias em soluções digitais de sucesso
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white shadow-lg"
                    : "hover:bg-primary/10 hover:border-primary/50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon size={16} />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Projetos em Destaque
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur overflow-hidden ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "aspect-[4/3]" : "aspect-video"
                    }`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <Eye size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${project.gradient} text-white border-0`}
                      >
                        {
                          categories.find((cat) => cat.id === project.category)
                            ?.label
                        }
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {selectedCategory === "all"
              ? "Outros Projetos"
              : `Projetos de ${
                  categories.find((cat) => cat.id === selectedCategory)?.label
                }`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-muted-foreground text-lg mb-4">
                  Nenhum projeto encontrado para a categoria selecionada.
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory("all")}
                  className="hover:bg-primary/10"
                >
                  Ver Todos os Projetos
                </Button>
              </div>
            ) : (
              otherProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur overflow-hidden"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <Eye size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                      >
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${project.gradient} text-white border-0`}
                      >
                        {
                          categories.find((cat) => cat.id === project.category)
                            ?.label
                        }
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gostou do que viu?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos criar algo incrível juntos. Entre em contato e transforme sua
            ideia em realidade digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white px-8 py-3"
            >
              <Link href="/comecar-projeto">Começar Projeto</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-6 sm:px-8 py-3 bg-black border-0 hover:bg-primary/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-white hover:text-white font-semibold relative overflow-hidden before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-lg before:-z-10 after:absolute after:inset-[2px] after:bg-black after:rounded-[calc(0.75rem-2px)] after:-z-10"
            >
              <Link href="/contato">Falar Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
