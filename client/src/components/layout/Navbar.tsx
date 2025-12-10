import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Quem Atendemos", href: "#clientes" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-lg text-white font-bold text-xl group-hover:bg-primary/90 transition-colors">
              V
            </div>
            <div className="flex flex-col">
              <span className={cn("text-xl font-heading font-bold leading-none tracking-tight", scrolled ? "text-primary" : "text-white")}>
                Visum Calc
              </span>
              <span className={cn("text-[10px] uppercase tracking-widest font-medium", scrolled ? "text-primary/70" : "text-white/80")}>
                Perícia & Cálculos
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-gray-700" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-lg shadow-secondary/20"
            size="sm"
            onClick={() => window.location.href = "#contato"}
          >
            Fale com Especialista
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <X className={scrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-secondary hover:bg-secondary/90">
            Fale com Especialista
          </Button>
        </div>
      )}
    </nav>
  );
}
