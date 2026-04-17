import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/turnos")({
  head: () => ({
    meta: [
      { title: "Reservar turno — Mayra Jabdor" },
      { name: "description", content: "Reservá tu turno online. Abril 2026." },
      { property: "og:title", content: "Reservar turno con Mayra Jabdor" },
      { property: "og:description", content: "Elegí día y horario disponible." },
    ],
  }),
  component: Turnos,
});

const HOURS = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

function Turnos() {
  // Abril 2026 = month 3 (0-indexed)
  const [view, setView] = useState({ year: 2026, month: 3 });
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const firstDay = new Date(view.year, view.month, 1);
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  // getDay: 0=Sun..6=Sat, convert to Mon=0
  const startWeekday = (firstDay.getDay() + 6) % 7;

  const cells: (number | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const changeMonth = (delta: number) => {
    let m = view.month + delta;
    let y = view.year;
    if (m < 0) { m = 11; y--; }
    if (m > 11) { m = 0; y++; }
    setView({ year: y, month: m });
    setSelectedDay(null);
    setSelectedHour(null);
    setConfirmed(false);
  };

  const handleConfirm = () => {
    setConfirmed(true);
    toast.success("¡Turno confirmado!", {
      description: `${selectedDay} de ${MONTHS[view.month]} a las ${selectedHour} hs`,
    });
  };

  const today = new Date();
  const isPast = (day: number) => {
    const d = new Date(view.year, view.month, day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Agenda</span>
          <h1 className="font-serif text-5xl text-primary mt-3">Reservá tu turno</h1>
          <p className="text-muted-foreground mt-4">
            Elegí el día y horario que mejor se adapte a vos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CALENDAR */}
          <div className="bg-cream rounded-2xl border border-border p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => changeMonth(-1)}
                className="p-2 rounded-full hover:bg-sand text-primary"
                aria-label="Mes anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <h2 className="font-serif text-2xl text-primary">
                {MONTHS[view.month]} {view.year}
              </h2>
              <button
                onClick={() => changeMonth(1)}
                className="p-2 rounded-full hover:bg-sand text-primary"
                aria-label="Mes siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2 text-xs uppercase tracking-wider text-muted-foreground text-center">
              {DAYS.map((d) => (
                <div key={d} className="py-2">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {cells.map((day, idx) => {
                if (day === null) return <div key={`e-${idx}`} />;
                const past = isPast(day);
                const weekend = ((idx % 7) >= 5);
                const disabled = past || weekend;
                const isSelected = selectedDay === day;
                return (
                  <button
                    key={day}
                    onClick={() => {
                      if (disabled) return;
                      setSelectedDay(day);
                      setSelectedHour(null);
                      setConfirmed(false);
                    }}
                    disabled={disabled}
                    className={`aspect-square rounded-lg text-sm font-medium transition-all
                      ${isSelected
                        ? "bg-accent text-accent-foreground shadow-md"
                        : disabled
                          ? "text-muted-foreground/30 cursor-not-allowed"
                          : "text-foreground hover:bg-sage/30"}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* HOURS */}
          <div className="bg-cream rounded-2xl border border-border p-6 md:p-8">
            <h2 className="font-serif text-2xl text-primary mb-2">
              {selectedDay
                ? `${selectedDay} de ${MONTHS[view.month]}`
                : "Horarios disponibles"}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {selectedDay
                ? "Seleccioná el horario que prefieras."
                : "Primero elegí un día en el calendario."}
            </p>

            {selectedDay && (
              <div className="grid grid-cols-3 gap-3 mb-8">
                {HOURS.map((h) => (
                  <button
                    key={h}
                    onClick={() => { setSelectedHour(h); setConfirmed(false); }}
                    className={`py-3 rounded-lg border text-sm font-medium transition-all
                      ${selectedHour === h
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-cream border-border text-foreground hover:border-accent hover:text-accent"}`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            )}

            {selectedDay && selectedHour && (
              <div className="border-t border-border pt-6 space-y-4">
                <div className="text-sm text-muted-foreground">
                  Tu turno: <span className="text-foreground font-medium">
                    {selectedDay} de {MONTHS[view.month]} · {selectedHour} hs
                  </span>
                </div>
                <Button
                  onClick={handleConfirm}
                  disabled={confirmed}
                  className="w-full rounded-full bg-accent hover:bg-clay text-accent-foreground"
                  size="lg"
                >
                  {confirmed ? (
                    <><Check size={16} className="mr-1" /> Turno confirmado</>
                  ) : (
                    "Confirmar turno"
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
