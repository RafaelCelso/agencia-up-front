"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Rocket } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatedAIChat } from "@/components/ui/animated-ai-chat";

export function AnimatedCounter({
  value,
  end,
  suffix = "",
  duration = 2000,
  className = "",
}: {
  value?: string;
  end?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [displayValue, setDisplayValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Parse the value to extract number and suffix
  const parseValue = (val: string) => {
    if (val === "24/7") {
      return { number: 24, suffix: "/7" };
    }
    const match = val.match(/(\d+)(.*)/);
    if (match) {
      return { number: Number.parseInt(match[1]), suffix: match[2] };
    }
    return { number: 0, suffix: "" };
  };

  const targetEnd = value ? parseValue(value).number : end || 0;
  const targetSuffix = value ? parseValue(value).suffix : suffix;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetEnd);
      setCount(currentCount);

      // Handle special case for 24/7
      if (value === "24/7") {
        setDisplayValue(`${currentCount}/7`);
      } else {
        setDisplayValue(`${currentCount}${targetSuffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetEnd, targetSuffix, duration, value]);

  return (
    <div ref={counterRef} className={className}>
      {displayValue}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 z-30">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient" />

      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div
        className="absolute top-32 sm:top-40 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full blur-lg animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 w-20 h-20 sm:w-24 sm:h-24 bg-primary/15 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 py-8 sm:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-200">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 text-balance leading-tight">
              Transformamos suas{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                ideias digitais
              </span>{" "}
              em realidade
            </h1>

            <div className="flex justify-center mb-4"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-400 px-2 sm:px-0">
            Especialistas em{" "}
            <span className="text-primary font-semibold">criação de sites</span>
            ,<span className="text-accent font-semibold"> agentes de IA</span>,
            automações e desenvolvimento de sistemas web que impulsionam o
            crescimento do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 delay-600 px-4 sm:px-0">
            <Link href="/comecar-projeto" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="gradient-primary hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-3 animate-pulse-glow w-full sm:w-auto"
              >
                <Rocket className="mr-2" size={18} />
                Começar Projeto
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-3 bg-black border-0 hover:bg-primary/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-white hover:text-white font-semibold relative overflow-hidden before:absolute before:inset-0 before:p-[2px] before:bg-gradient-to-r before:from-primary before:to-accent before:rounded-lg before:-z-10 after:absolute after:inset-[2px] after:bg-black after:rounded-[calc(0.75rem-2px)] after:-z-10"
              >
                Ver Portfólio
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>

          {/* AI Chat Section */}
          <div className="mt-12 sm:mt-16 animate-in fade-in-0 slide-in-from-bottom-12 duration-1000 delay-800">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Experimente nossa{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    IA conversacional
                  </span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                  Teste como nossa inteligência artificial pode ajudar no seu
                  projeto digital
                </p>
              </div>

              <div className="relative">
                <AnimatedAIChat />
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in-0 slide-in-from-bottom-12 duration-1000 delay-800 px-4 sm:px-0 relative z-20">
            <div className="text-center">
              <AnimatedCounter
                end={50}
                suffix="+"
                className="text-2xl sm:text-3xl font-bold text-primary mb-2"
              />
              <div className="text-muted-foreground text-sm sm:text-base">
                Projetos Entregues
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">
                <AnimatedCounter value="24/7" className="inline" />
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                Suporte Técnico
              </div>
            </div>
            <div className="text-center">
              <AnimatedCounter
                end={100}
                suffix="%"
                className="text-2xl sm:text-3xl font-bold text-primary mb-2"
              />
              <div className="text-muted-foreground text-sm sm:text-base">
                Satisfação
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
