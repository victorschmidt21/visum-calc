import { Calculator, Mail, MapPin, Phone, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logo from "../../../public/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const [location, navigate] = useLocation();

  function handleNavClick(id: string) {
    if (location === "/") {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
    }
  }
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="" width={200} height={100} />
            <p className="text-gray-300 text-sm leading-relaxed">
              Mais que números: entregamos clareza, proteção e inteligência para
              o seu negócio. Referência nacional em contabilidade especializada
              e perícias.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/visum-calc/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/visumcalc?igsh=eWNhM3BzazE1YzBi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-secondary">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("sobre")}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("servicos")}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Nossos Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("clientes")}
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Quem Atendemos
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-secondary">
              Especialidades
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Reforma Tributária", slug: "reforma-tributaria" },
                { name: "Contabilidade Personalizada", slug: "contabilidade-personalizada" },
                { name: "Gestão Tributária", slug: "gestao-tributaria" },
                { name: "Holding Patrimonial", slug: "holding-patrimonial" },
                { name: "Cálculos Judiciais", slug: "calculos-judiciais" }
              ].map((service) => (
                <li key={service.slug}>
                  <Link href={`/servicos/${service.slug}`}>
                    <a className="hover:text-secondary transition-colors cursor-pointer">
                      {service.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-secondary">
              Contato
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>
                  Atendimento Nacional
                  <br />
                  Escritório Central: Toledo, PR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>(45) 99117-7803</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>contato@visumcalc.com.br</span>
              </li>
              <li>
                <Button className="w-full bg-green-600 hover:bg-green-700 mt-2 gap-2 cursor-pointer" onClick={() => window.open('https://wa.me/5545991177803', '_blank')}>
                  <FaWhatsapp className="w-8 h-8" /> Whatsapp
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Visum Calc. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
