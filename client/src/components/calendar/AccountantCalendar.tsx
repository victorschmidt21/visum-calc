import { useEffect, useMemo, useState } from "react";
import { fetchLegisWebAgenda } from "@/api/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface AgendaDia {
  dia: number;
  mes: number | string;
  ano: number | string;
  obrigacao: boolean;
  link: string;
}

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month - 1, 1).getDay(); // 0 = Domingo
}

interface AccountantCalendarProps {
  month: number; // 1-12
  year: number;
}

export function AccountantCalendar({ month, year }: AccountantCalendarProps) {
  const [agenda, setAgenda] = useState<AgendaDia[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadAgenda() {
      setLoading(true);
      try {
        const data = await fetchLegisWebAgenda(month, year);
        setAgenda(data);
      } catch (error) {
        console.error("Erro ao carregar agenda LegisWeb", error);
      } finally {
        setLoading(false);
      }
    }

    loadAgenda();
  }, [month, year]);

  const agendaMap = useMemo(() => {
    const map = new Map<number, AgendaDia>();
    if (Array.isArray(agenda)) {
      agenda.forEach((item) => map.set(item.dia, item));
    }
    return map;
  }, [agenda]);

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const monthName = new Date(year, month - 1).toLocaleString("pt-BR", {
    month: "long",
  });

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="capitalize">
          {monthName}{" "}
          <span className="text-muted-foreground font-normal ml-1">{year}</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-7 gap-2 mb-2 text-center text-sm font-medium text-muted-foreground">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDay }).map((_, index) => (
              <div key={`skeleton-empty-${index}`} className="h-15 w-15" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => (
              <Skeleton
                key={`skeleton-day-${index}`}
                className="h-15 w-15 rounded-md"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDay }).map((_, index) => (
              <div key={`empty-${index}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, index) => {
              const dayNumber = index + 1;
              const agendaDia = agendaMap.get(dayNumber);
              const hasObrigacao = agendaDia?.obrigacao;

              return (
                <div
                  key={dayNumber}
                  className={cn(
                    "relative flex items-center justify-center h-15 w-15 rounded-md text-sm transition-colors",
                    hasObrigacao
                      ? "cursor-pointer bg-red-50/50 hover:bg-red-50 border border-red-200"
                      : "border border-border text-muted-foreground bg-card",
                  )}
                  aria-label={
                    hasObrigacao
                      ? "Dia com obrigação tributária"
                      : "Dia sem obrigação tributária"
                  }
                  onClick={() => {
                    if (hasObrigacao && agendaDia?.link) {
                      window.open(
                        agendaDia.link,
                        "_blank",
                        "noopener,noreferrer",
                      );
                    }
                  }}
                >
                  <span
                    className={cn(
                      "font-medium",
                      hasObrigacao ? "text-red-700" : "",
                    )}
                  >
                    {dayNumber}
                  </span>

                  {hasObrigacao && (
                    <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        )}

        <p className="mt-4 text-xs text-muted-foreground text-center">
          * Dias destacados indicam obrigações fiscais.
        </p>
      </CardContent>
    </Card>
  );
}
