"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, Mail, MapPin, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sendContactForm } from "@/api/api";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  phone: z.string().min(10, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(1, "Selecione um assunto"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await sendContactForm(data);
      // toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-gray-50">
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center text-center">
            <DialogTitle className="text-2xl font-bold font-heading text-primary">Mensagem Enviada!</DialogTitle>
            <DialogDescription className="text-lg text-gray-600 mt-2 text-center">
              Recebemos sua solicitação com sucesso. Nossa equipe entrará em contato em breve.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
             <p className="text-center text-gray-500 text-sm">
               Deseja agilizar seu atendimento? Chame agora no WhatsApp:
             </p>
             <Button 
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 gap-2 text-lg cursor-pointer"
                onClick={() => window.open("https://wa.me/5545991177803", "_blank")}
             >
                <FaWhatsapp className="w-6 h-6" /> Falar no WhatsApp
             </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-secondary font-bold tracking-wider text-md uppercase mb-2 block">Fale Conosco</span>
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
                  <p className="text-gray-600 mt-1">(45) 99117-7803</p>
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input 
                        id="name" 
                        placeholder="Seu nome" 
                        className={`h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary ${errors.name ? "border-red-500" : ""}`}
                        {...register("name")}
                      />
                      {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input 
                        id="phone" 
                        placeholder="(00) 00000-0000" 
                        className={`h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary ${errors.phone ? "border-red-500" : ""}`}
                        {...register("phone")}
                      />
                       {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail Corporativo</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        placeholder="seu@email.com" 
                        className={`h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary ${errors.email ? "border-red-500" : ""}`}
                        {...register("email")}
                    />
                     {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Controller
                      name="subject"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger id="subject" className={`h-12 bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary ${errors.subject ? "border-red-500" : ""}`}>
                            <SelectValue placeholder="Selecione o serviço de interesse" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pericia">Perícias Bancárias</SelectItem>
                            <SelectItem value="calculos">Cálculos Trabalhistas</SelectItem>
                            <SelectItem value="recuperacao">Recuperação Judicial</SelectItem>
                            <SelectItem value="holding">Holding e Sucessão</SelectItem>
                            <SelectItem value="outros">Outros Assuntos</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                        id="message" 
                        placeholder="Descreva brevemente sua necessidade..." 
                        className={`min-h-[150px] bg-gray-50 border-gray-200 focus:border-secondary focus:ring-secondary resize-none ${errors.message ? "border-red-500" : ""}`}
                        {...register("message")}
                    />
                     {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer h-14 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg rounded-lg disabled:opacity-70">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Orçamento <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
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
