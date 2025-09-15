"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/up-front-logo.webp"
              alt="Up Front Logo"
              width={200}
              height={64}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/servicos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/sobre"
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/portfolio"
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="/contato"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/comecar-projeto">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Começar Projeto
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link
                href="/servicos"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/sobre"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </Link>
              <Link
                href="/contato"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="/comecar-projeto"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Começar Projeto
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
