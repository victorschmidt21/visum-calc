import { Calculator, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded text-white font-bold">
                V
              </div>
              <span className="text-xl font-heading font-bold">Visum Calc</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mais que números: entregamos clareza, proteção e inteligência para
              o seu negócio. Referência nacional em contabilidade especializada
              e perícias.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08c2.643 0 2.987.012 4.043.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
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
                <a
                  href="#sobre"
                  className="hover:text-secondary transition-colors"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-secondary transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#clientes"
                  className="hover:text-secondary transition-colors"
                >
                  Quem Atendemos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-secondary">
              Especialidades
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Perícias Bancárias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Cálculos Trabalhistas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Recuperação Judicial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Holding Familiar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Planejamento Tributário
                </a>
              </li>
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
                <span>(45) 99965-7206</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>contato@visumcalc.com.br</span>
              </li>
              <li>
                <Button className="w-full bg-green-600 hover:bg-green-700 mt-2 gap-2">
                  <MessageCircle className="w-4 h-4" /> Whatsapp
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
