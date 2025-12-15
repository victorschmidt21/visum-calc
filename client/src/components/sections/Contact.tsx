import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">Fale Conosco</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
              Vamos conversar sobre o seu futuro?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Preencha o formulário ou fale diretamente conosco pelo WhatsApp. Nossa equipe de especialistas está pronta para analisar o seu caso com total confidencialidade.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Telefone & WhatsApp</h4>
                  <p className="text-gray-600 mt-1">(45) 99965-7206</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">E-mail</h4>
                  <p className="text-gray-600 mt-1">contato@visumcalc.com.br</p>
                  <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Endereço</h4>
                  <p className="text-gray-600 mt-1">Av. Parigot de Souza, 3302 - Jardim Santa Maria</p>
                  <p className="text-gray-600">Toledo - PR, 85903-170</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-2xl shadow-primary/5">
              <CardContent className="p-8 md:p-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome" className="h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" className="h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail Corporativo</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <select id="subject" className="flex h-12 w-full items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Selecione o serviço de interesse</option>
                      <option value="pericia">Perícias Bancárias</option>
                      <option value="calculos">Cálculos Trabalhistas</option>
                      <option value="recuperacao">Recuperação Judicial</option>
                      <option value="holding">Holding e Sucessão</option>
                      <option value="outros">Outros Assuntos</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Descreva brevemente sua necessidade..." className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary resize-none" />
                  </div>

                  <Button className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg rounded-lg">
                    Solicitar Orçamento <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
