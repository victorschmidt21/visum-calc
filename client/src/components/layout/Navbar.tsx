import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Notícias", href: "/noticias" },
    { name: "Contato", href: "/contato" },
  ];

  const services = [
    { name: "Reforma Tributária", href: "/servicos/reforma-tributaria" },
    { name: "Contabilidade Personalizada", href: "/servicos/contabilidade-personalizada" },
    { name: "Gestão Tributária", href: "/servicos/gestao-tributaria" },
    { name: "Holding Patrimonial", href: "/servicos/holding-patrimonial" },
    { name: "Cálculos Judiciais", href: "/servicos/calculos-judiciais" },
  ];

  const isHome = location === "/";

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled || !isHome ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-primary rounded-lg text-white font-bold text-xl group-hover:bg-primary/90 transition-colors">
              V
            </div>
            <div className="flex flex-col">
              <span className={cn("text-xl font-heading font-bold leading-none tracking-tight", scrolled || !isHome ? "text-primary" : "text-white")}>
                Visum Calc
              </span>
              <span className={cn("text-[10px] uppercase tracking-widest font-medium", scrolled || !isHome ? "text-primary/70" : "text-white/80")}>
                Perícia & Cálculos
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className={cn("text-sm font-medium transition-colors hover:text-secondary", scrolled || !isHome ? "text-gray-700" : "text-white/90")}>Home</a>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className={cn("text-sm font-medium transition-colors hover:text-secondary flex items-center gap-1 outline-none", scrolled || !isHome ? "text-gray-700" : "text-white/90")}>
              Serviços <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href}>
                    <a className="w-full cursor-pointer">{service.name}</a>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/noticias">
            <a className={cn("text-sm font-medium transition-colors hover:text-secondary", scrolled || !isHome ? "text-gray-700" : "text-white/90")}>Notícias</a>
          </Link>

          <Link href="/contato">
            <a className={cn("text-sm font-medium transition-colors hover:text-secondary", scrolled || !isHome ? "text-gray-700" : "text-white/90")}>Contato</a>
          </Link>

          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-lg shadow-secondary/20"
            size="sm"
            asChild
          >
            <Link href="/contato">Fale com Especialista</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <X className={scrolled || !isHome ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={scrolled || !isHome ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
          <Link href="/">
            <a className="text-gray-700 font-medium py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Home</a>
          </Link>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Serviços</span>
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <a className="text-gray-700 font-medium py-1 pl-4 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>{service.name}</a>
              </Link>
            ))}
          </div>
          <Link href="/noticias">
            <a className="text-gray-700 font-medium py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Notícias</a>
          </Link>
          <Link href="/contato">
            <a className="text-gray-700 font-medium py-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Contato</a>
          </Link>
          <Button className="w-full bg-secondary hover:bg-secondary/90" asChild>
            <Link href="/contato">Fale com Especialista</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
