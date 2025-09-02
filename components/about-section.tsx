"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2000,
}: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(end * easeOutQuart)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isVisible, end, duration])

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  )
}

const AnimatedSupport = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      24/7
    </div>
  )
}

const features = [
  "Mais de 100 projetos entregues",
  "Equipe especializada em tecnologias modernas",
  "Suporte contínuo pós-lançamento",
  "Metodologia ágil de desenvolvimento",
  "Foco em resultados mensuráveis",
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
              Por que escolher a <span className="text-primary">Up Front</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Somos uma agência digital focada em inovação e resultados. Nossa missão é transformar ideias em soluções
              digitais que geram impacto real no seu negócio.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter end={5} suffix="+" />
                  </div>
                  <div className="text-muted-foreground mb-6">Anos de experiência</div>

                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        <AnimatedCounter end={100} suffix="+" />
                      </div>
                      <div className="text-sm text-muted-foreground">Projetos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        <AnimatedCounter end={50} suffix="+" />
                      </div>
                      <div className="text-sm text-muted-foreground">Clientes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        <AnimatedSupport />
                      </div>
                      <div className="text-sm text-muted-foreground">Suporte</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">
                        <AnimatedCounter end={99} suffix="%" />
                      </div>
                      <div className="text-sm text-muted-foreground">Satisfação</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
