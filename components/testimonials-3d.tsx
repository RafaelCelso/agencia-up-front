import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "./ui/marquee";

// Up Front agency testimonials
const testimonials = [
  {
    name: "Carlos Silva",
    username: "@carlos_tech",
    body: "A Up Front transformou nossa presença digital completamente!",
    img: "/professional-man-carlos.png",
    country: "🇧🇷 Brasil",
  },
  {
    name: "Ana Rodrigues",
    username: "@ana_startup",
    body: "O app que desenvolveram superou todas as expectativas.",
    img: "/professional-woman-ana.png",
    country: "🇧🇷 Brasil",
  },
  {
    name: "Pedro Santos",
    username: "@pedro_ceo",
    body: "Automações que realmente fazem a diferença no negócio.",
    img: "/professional-man-pedro.png",
    country: "🇧🇷 Brasil",
  },
  {
    name: "Mariana Costa",
    username: "@mari_design",
    body: "Design impecável e funcionalidade perfeita!",
    img: "/professional-woman-mariana.png",
    country: "🇧🇷 Brasil",
  },
  {
    name: "Rafael Lima",
    username: "@rafa_ecom",
    body: "Nosso e-commerce nunca vendeu tanto!",
    img: "/professional-man-rafael.png",
    country: "🇧🇷 Brasil",
  },
  {
    name: "Juliana Ferreira",
    username: "@ju_marketing",
    body: "A estratégia digital deles é simplesmente genial.",
    img: "/professional-woman-juliana.png",
    country: "🇧🇷 Brasil",
  },
  {
    name: "Lucas Oliveira",
    username: "@lucas_tech",
    body: "Suporte 24/7 que realmente funciona!",
    img: "/professional-man-lucas.png",
    country: "🇧🇷 Brasil",
  },
  {
    name: "Camila Souza",
    username: "@cami_founder",
    body: "ROI incrível em todos os projetos desenvolvidos.",
    img: "/professional-woman-camila.png",
    country: "🇧🇷 Brasil",
  },
  {
    name: "Bruno Alves",
    username: "@bruno_startup",
    body: "A melhor agência digital que já trabalhamos!",
    img: "/professional-man-bruno.png",
    country: "🇧🇷 Brasil",
  },
];

function TestimonialCard({
  img,
  name,
  username,
  body,
  country,
}: (typeof testimonials)[number]) {
  return (
    <Card className="w-64 mx-2">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5 mb-3">
          <Avatar className="size-9">
            <AvatarImage src={img || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="text-sm text-foreground">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function Testimonials3D() {
  return (
    <div className="flex justify-center py-12">
      <div className="border border-border rounded-lg relative flex h-96 w-full max-w-[800px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
        <div
          className="flex flex-row items-center gap-4"
          style={{
            transform:
              "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
          }}
        >
          {/* Vertical Marquee (downwards) */}
          <Marquee
            vertical
            pauseOnHover
            repeat={3}
            className="[--duration:40s]"
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* Vertical Marquee (upwards) */}
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={3}
            className="[--duration:40s]"
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* Vertical Marquee (downwards) */}
          <Marquee
            vertical
            pauseOnHover
            repeat={3}
            className="[--duration:40s]"
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* Vertical Marquee (upwards) */}
          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={3}
            className="[--duration:40s]"
          >
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
