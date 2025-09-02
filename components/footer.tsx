import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/up-front-logo.png"
              alt="Up Front Logo"
              width={150}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-6 max-w-md">
              Agência digital especializada em transformar ideias em soluções
              digitais inovadoras que geram resultados reais para seu negócio.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/agenciaupfront/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              ></Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              ></Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Serviços
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Criação de Sites
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Agentes de IA
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Automações
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Apps Mobile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2" />
                contato@agenciaupfront.com.br
              </li>
              <li className="flex items-center text-muted-foreground tabular-nums">
                <a
                  href="https://wa.me/qr/AJCPAVOGQFMIC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <WhatsAppIcon size={16} className="mr-2" />
                  (11) 95834-4833
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin size={16} className="mr-2" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Agência Up Front. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
