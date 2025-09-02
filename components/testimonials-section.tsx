import Testimonials3D from "./testimonials-3d";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de empresas que transformaram sua presença digital
            conosco
          </p>
        </div>

        <Testimonials3D />
      </div>
    </section>
  );
}
