import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { format, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { fetchLegisWebNews, fetchLegisWebAgenda } from "@/api/api";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { MetaHead } from "@/components/seo/MetaHead";

interface NewsItem {
  id: string;
  titulo: string;
  resumo: string;
  datacadastro?: string;
  assunto?: string;
  link?: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [agendaPast, setAgendaPast] = useState<Date[]>([]);
  const [agendaCurrent, setAgendaCurrent] = useState<Date[]>([]);
  const [loadingAgenda, setLoadingAgenda] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const today = new Date();
  const pastMonth = subMonths(today, 1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetchLegisWebNews();
        // LegisWeb likely returns an array directly or { result: [] }
        // Assuming array based on prompt description
        if (Array.isArray(data)) {
          setNews(data);
        } else if (Array.isArray(data?.result)) {
           setNews(data.result);
        } else {
           console.warn("Unexpected news format:", data);
           setNews([]); // Fallback
        }
      } catch (error) {
        console.error("Failed to fetch news", error);
      } finally {
        setLoadingNews(false);
      }
    };

    const fetchAgenda = async (date: Date): Promise<Date[]> => {
      try {
        const mes = date.getMonth() + 1;
        const ano = date.getFullYear();
        const data = await fetchLegisWebAgenda(mes, ano);
        // Assuming data is array of day numbers like ["1", "5"]
        // or numbers [1, 5]
        if (Array.isArray(data)) {
          return data.map((d: string | number) => new Date(ano, mes - 1, Number(d)));
        }
      } catch (error) {
        console.error("Failed to fetch agenda", error);
      }
      return [];
    };

    const loadAgendas = async () => {
      const [past, current] = await Promise.all([
        fetchAgenda(pastMonth),
        fetchAgenda(today),
      ]);
      setAgendaPast(past);
      setAgendaCurrent(current);
      setLoadingAgenda(false);
    };

    fetchNews();
    loadAgendas();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const paginatedNews = news.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <MetaHead 
        title="Notícias e Agenda Tributária" 
        description="Fique por dentro das últimas notícias fiscais e da agenda tributária completa."
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Agenda Section */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold font-heading text-primary mb-8 text-center">
              Agenda Tributária
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-12 items-start">
              
              {/* Past Month */}
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-600 capitalize">
                  {format(pastMonth, "MMMM yyyy", { locale: ptBR })}
                </h3>
                {loadingAgenda ? (
                   <Skeleton className="w-[300px] h-[300px] rounded-md" />
                ) : (
                  <Calendar
                    mode="single"
                    month={pastMonth}
                    disableNavigation
                    modifiers={{
                      booked: agendaPast,
                    }}
                    modifiersStyles={{
                      booked: {
                        color: "white",
                        backgroundColor: "var(--primary)", // Use theme color
                        fontWeight: "bold",
                        borderRadius: "100%",
                      },
                    }}
                    className="rounded-md border shadow p-4"
                    locale={ptBR}
                  />
                )}
              </div>

              {/* Current Month */}
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-4 text-primary capitalize">
                  {format(today, "MMMM yyyy", { locale: ptBR })}
                </h3>
                 {loadingAgenda ? (
                   <Skeleton className="w-[300px] h-[300px] rounded-md" />
                ) : (
                  <Calendar
                    mode="single"
                    month={today}
                    disableNavigation
                    modifiers={{
                      booked: agendaCurrent,
                    }}
                     modifiersStyles={{
                      booked: {
                        color: "white",
                        backgroundColor: "#E11D48", // Use secondary/red color
                         fontWeight: "bold",
                        borderRadius: "100%",
                      },
                    }}
                    className="rounded-md border shadow p-4"
                    locale={ptBR}
                  />
                )}
              </div>
            </div>
          </section>

          {/* News Section */}
          <section>
            <h2 className="text-3xl font-bold font-heading text-primary mb-8 border-b pb-4">
              Últimas Notícias
            </h2>

            {loadingNews ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-48 w-full rounded-xl" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {paginatedNews.map((item) => (
                    <Card key={item.id || Math.random()} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                      {/* Image placeholder - LegisWeb news might not have image, or we parse it from content. 
                          Using a standard placeholder or removing image area if no image available. 
                          Existing design used a gray box. */}
                      <div className="h-4 bg-secondary/10" /> 
                      <CardHeader>
                         <div className="flex flex-wrap gap-2 mb-2">
                            {item.datacadastro && (
                                <Badge variant="outline" className="w-fit">
                                  {/* Format date from YYYY-MM-DD to display format if needed, or use as is */}
                                  {/* Using raw or simple format. Ideally parsed. */}
                                  {item.datacadastro.split('-').reverse().join('/')}
                                </Badge>
                            )}
                            {item.assunto && (
                                <Badge variant="secondary" className="w-fit">
                                  {item.assunto}
                                </Badge>
                            )}
                         </div>
                        <CardTitle className="text-lg line-clamp-2" title={item.titulo}>{item.titulo}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        {/* Remove HTML tags from resumo if needed, assuming plain text or simple HTML */}
                        <div 
                            className="text-muted-foreground text-sm line-clamp-4"
                            dangerouslySetInnerHTML={{ __html: item.resumo }} 
                        />
                      </CardContent>
                      <CardFooter>
                         {item.link ? (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline text-sm">
                               Ler mais →
                            </a>
                         ) : (
                            <span className="text-xs text-gray-400">Fonte: LegisWeb</span>
                         )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                         <PaginationPrevious 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handlePageChange(page - 1); }} 
                            className={page === 1 ? "pointer-events-none opacity-50" : ""}
                         />
                      </PaginationItem>
                      
                      {/* Show simplified pagination: 1 ... Current ... Total */}
                      {/* Or just Previous / Next for simplicity as requested "paginação de 10 cada" */}
                      
                       <PaginationItem>
                        <PaginationLink href="#" isActive>{page}</PaginationLink>
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); handlePageChange(page + 1); }} 
                             className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            )}
            {!loadingNews && news.length === 0 && (
                <p className="text-center text-gray-500">Nenhuma notícia encontrada no momento.</p>
            )}
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
