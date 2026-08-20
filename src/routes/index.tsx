import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf,
  Users,
  Coins,
  Zap,
  RotateCcw,
  Trophy,
  AlertTriangle,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Metrópolis: El Desafío de Movilidad" },
      {
        name: "description",
        content:
          "Juego de decisiones urbanas: gobierna Metrópolis 10 años y equilibra ambiente, aprobación, presupuesto y fluidez.",
      },
      { property: "og:title", content: "Metrópolis: El Desafío de Movilidad" },
      {
        property: "og:description",
        content:
          "Asumí como Secretario/a de Movilidad y sobreviví un mandato de 10 años tomando decisiones de transporte.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Game,
});

type Metrics = { eco: number; people: number; money: number; flow: number };
type Effects = Partial<Metrics>;
type Option = { label: string; detail: string; effects: Effects };
type EventCard = { title: string; emoji: string; description: string; options: [Option, Option] };

const METRIC_META = [
  { key: "eco", name: "Medio Ambiente", icon: Leaf, color: "bg-eco", text: "text-eco", emoji: "💚" },
  { key: "people", name: "Aprobación", icon: Users, color: "bg-people", text: "text-people", emoji: "👥" },
  { key: "money", name: "Presupuesto", icon: Coins, color: "bg-money", text: "text-money", emoji: "💰" },
  { key: "flow", name: "Fluidez", icon: Zap, color: "bg-flow", text: "text-flow", emoji: "⚡" },
] as const;

const EVENTS: EventCard[] = [
  {
    title: "El Centro Peatonal",
    emoji: "🚶",
    description:
      "Los comerciantes del centro dicen que sin autos venderán menos. Los vecinos piden veredas anchas y ciclovías.",
    options: [
      {
        label: "Peatonalizar y sumar ciclovías",
        detail: "Calles solo para personas y bicis en el casco histórico.",
        effects: { eco: 15, people: -10, money: -10, flow: 10 },
      },
      {
        label: "Dejar todo como está",
        detail: "Los autos siguen entrando al centro sin cambios.",
        effects: { eco: -10, people: 10, money: 5, flow: -10 },
      },
    ],
  },
  {
    title: "Electrificación del Transporte",
    emoji: "🚌",
    description: "Hay que renovar la flota de colectivos. ¿Eléctricos silenciosos o diésel moderno más barato?",
    options: [
      {
        label: "Comprar buses eléctricos",
        detail: "Cero humo, pero carísimos y hay que instalar cargadores.",
        effects: { eco: 20, people: 10, money: -25, flow: 5 },
      },
      {
        label: "Comprar diésel moderno",
        detail: "Más unidades por el mismo dinero, pero contaminan.",
        effects: { eco: -15, people: 5, money: 10, flow: 10 },
      },
    ],
  },
  {
    title: "Micro-movilidad",
    emoji: "🛴",
    description: "Los monopatines eléctricos invadieron las veredas y hubo varios choques con peatones.",
    options: [
      {
        label: "Prohibirlos en toda la ciudad",
        detail: "Se acabó el problema… y también una opción de viaje.",
        effects: { eco: -10, people: -5, money: 5, flow: -10 },
      },
      {
        label: "Regular y hacer carriles",
        detail: "Casco, velocidad máxima y espacios propios para andar.",
        effects: { eco: 12, people: 8, money: -12, flow: 10 },
      },
    ],
  },
  {
    title: "Tarifa de Pasajes",
    emoji: "🎫",
    description: "El boleto quedó atrasado. Mantenerlo barato cuesta plata; subirlo enoja a la gente.",
    options: [
      {
        label: "Subsidiar el boleto",
        detail: "Viajar sigue siendo baratísimo para todos.",
        effects: { eco: 10, people: 20, money: -25, flow: 5 },
      },
      {
        label: "Aumentar la tarifa",
        detail: "Más fondos para obras, pero bronca en las paradas.",
        effects: { eco: -8, people: -20, money: 25, flow: -5 },
      },
    ],
  },
  {
    title: "Carriles Exclusivos BRT",
    emoji: "🚏",
    description: "Se puede sacar un carril de autos en la avenida principal para un metrobús rápido.",
    options: [
      {
        label: "Construir el metrobús",
        detail: "Los buses vuelan, los autos se quejan al principio.",
        effects: { eco: 15, people: -8, money: -18, flow: 20 },
      },
      {
        label: "Dejar el tránsito libre",
        detail: "Todos los carriles siguen siendo para autos.",
        effects: { eco: -12, people: 8, money: 0, flow: -12 },
      },
    ],
  },
  {
    title: "Estacionamiento Medido",
    emoji: "🅿️",
    description: "Buscar lugar en el centro puede tardar 15 minutos dando vueltas.",
    options: [
      {
        label: "Cobrar por estacionar",
        detail: "Menos autos dando vueltas y más ingresos municipales.",
        effects: { eco: 10, people: -15, money: 20, flow: 12 },
      },
      {
        label: "Mantenerlo gratis",
        detail: "Nadie paga, pero todos siguen buscando lugar.",
        effects: { eco: -8, people: 12, money: -10, flow: -10 },
      },
    ],
  },
  {
    title: "Escuelas Seguras",
    emoji: "🏫",
    description: "A la salida del colegio hay caos de autos y los chicos cruzan entre bocinas.",
    options: [
      {
        label: "Zonas calmas de 20 km/h",
        detail: "Senderos escolares, veredas anchas y menos velocidad.",
        effects: { eco: 12, people: 15, money: -12, flow: -5 },
      },
      {
        label: "Ascenso y descenso libre",
        detail: "Cada familia frena donde puede frente a la escuela.",
        effects: { eco: -10, people: -5, money: 5, flow: -12 },
      },
    ],
  },
  {
    title: "Teleférico o Subte Urbano",
    emoji: "🚡",
    description: "El barrio alto queda lejos de todo. ¿Megaobra de transporte o arreglar los baches de siempre?",
    options: [
      {
        label: "Construir la megaobra",
        detail: "Diez minutos de viaje en vez de una hora, pero cuesta una fortuna.",
        effects: { eco: 15, people: 15, money: -30, flow: 20 },
      },
      {
        label: "Tapar baches y repavimentar",
        detail: "Obra chica, resultado rápido y visible.",
        effects: { eco: -5, people: 10, money: -8, flow: 8 },
      },
    ],
  },
  {
    title: "Día Sin Auto Municipal",
    emoji: "🚲",
    description: "Se propone un domingo al mes sin autos: calles llenas de bicis, ferias y juegos.",
    options: [
      {
        label: "Hacer la jornada",
        detail: "Fiesta ciudadana, aire limpio y mucha bici.",
        effects: { eco: 18, people: 10, money: -8, flow: -5 },
      },
      {
        label: "Cancelar por las protestas",
        detail: "El sector automotor presiona y se suspende todo.",
        effects: { eco: -12, people: -8, money: 8, flow: 5 },
      },
    ],
  },
  {
    title: "Semáforos Inteligentes con IA",
    emoji: "🚦",
    description: "Una empresa ofrece sensores que ajustan los semáforos según el tránsito en tiempo real.",
    options: [
      {
        label: "Invertir en la tecnología",
        detail: "Menos frenadas, menos humo, más fluidez.",
        effects: { eco: 12, people: 10, money: -20, flow: 22 },
      },
      {
        label: "Seguir con control manual",
        detail: "Los tiempos fijos de siempre y agentes en las esquinas.",
        effects: { eco: -8, people: -5, money: 5, flow: -12 },
      },
    ],
  },
];

const INITIAL: Metrics = { eco: 50, people: 50, money: 50, flow: 50 };

const DEFEAT: Record<keyof Metrics, { title: string; text: string; emoji: string }> = {
  eco: {
    title: "Crisis ambiental por esmog masivo",
    text: "El aire de Metrópolis se volvió irrespirable y las escuelas cerraron por alerta ambiental.",
    emoji: "🌫️",
  },
  people: {
    title: "Protestas masivas y destitución",
    text: "Miles de vecinos marcharon al municipio. El Concejo pidió tu renuncia.",
    emoji: "📣",
  },
  money: {
    title: "Bancarrota municipal",
    text: "Las arcas quedaron vacías: no hay plata ni para cargar los colectivos.",
    emoji: "🏦",
  },
  flow: {
    title: "Colapso total del tránsito",
    text: "La ciudad quedó trabada. Un viaje de 10 cuadras tarda dos horas.",
    emoji: "🚗",
  },
};

const clamp = (n: number) => Math.max(0, Math.min(100, n));

function barColor(v: number) {
  if (v > 60) return "bg-good";
  if (v >= 30) return "bg-warn";
  return "bg-bad";
}

function Game() {
  const [metrics, setMetrics] = useState<Metrics>(INITIAL);
  const [turn, setTurn] = useState(0);
  const [feedback, setFeedback] = useState<Effects | null>(null);
  const [dead, setDead] = useState<keyof Metrics | null>(null);
  const [finished, setFinished] = useState(false);

  const card = EVENTS[Math.min(turn, EVENTS.length - 1)];

  function choose(opt: Option) {
    if (feedback) return;
    const next: Metrics = {
      eco: clamp(metrics.eco + (opt.effects.eco ?? 0)),
      people: clamp(metrics.people + (opt.effects.people ?? 0)),
      money: clamp(metrics.money + (opt.effects.money ?? 0)),
      flow: clamp(metrics.flow + (opt.effects.flow ?? 0)),
    };
    setMetrics(next);
    setFeedback(opt.effects);
    setTimeout(() => {
      setFeedback(null);
      const collapsed = (Object.keys(next) as (keyof Metrics)[]).find((k) => next[k] <= 0);
      if (collapsed) {
        setDead(collapsed);
        return;
      }
      if (turn + 1 >= EVENTS.length) setFinished(true);
      else setTurn(turn + 1);
    }, 1400);
  }

  function restart() {
    setMetrics(INITIAL);
    setTurn(0);
    setFeedback(null);
    setDead(null);
    setFinished(false);
  }

  function ending() {
    const { eco, money, flow, people } = metrics;
    if (money > 60 && flow > 60 && eco < 30)
      return {
        emoji: "🏗️",
        title: "La Ciudad de Cemento",
        text: "Las calles funcionan y hay fondos, pero el gris se comió los árboles y el aire limpio.",
      };
    if (eco > 60 && (money < 30 || flow < 30))
      return {
        emoji: "🌳",
        title: "La Ciudad Paralizada",
        text: "Metrópolis respira mejor que nunca, pero moverse (o pagar las cuentas) es una odisea.",
      };
    if (eco > 50 && money > 50 && people > 50 && flow > 50)
      return {
        emoji: "🌆",
        title: "La Ciudad del Futuro",
        text: "¡Lo lograste! Aire limpio, vecinos felices, cuentas sanas y viajes rápidos para todos.",
      };
    return {
      emoji: "📋",
      title: "Gestión Promedio",
      text: "Metrópolis sobrevivió tu mandato sin grandes crisis… ni grandes hazañas. Se puede mejorar.",
    };
  }

  if (dead) {
    const d = DEFEAT[dead];
    return (
      <EndScreen
        emoji={d.emoji}
        title={d.title}
        text={d.text}
        year={turn + 1}
        metrics={metrics}
        onRestart={restart}
        tone="bad"
      />
    );
  }

  if (finished) {
    const e = ending();
    return (
      <EndScreen
        emoji={e.emoji}
        title={e.title}
        text={e.text}
        year={10}
        metrics={metrics}
        onRestart={restart}
        tone="good"
      />
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-6 font-sans text-foreground">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-5 text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            🏙️ Metrópolis: El Desafío de Movilidad
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">
            Sos Secretario/a de Movilidad e Innovación. Goberná 10 años sin que nada llegue a cero.
          </p>
        </header>

        <section className="rounded-3xl border border-border bg-card p-4 shadow-lg sm:p-5">
          <div className="mb-3 flex items-center justify-between text-sm font-bold">
            <span className="flex items-center gap-1.5">
              <Building2 className="size-4 text-primary" /> Año {turn + 1} de 10
            </span>
            <span className="text-muted-foreground">Mandato</span>
          </div>
          <div className="mb-5 flex gap-1.5">
            {EVENTS.map((_, i) => (
              <div
                key={i}
                className={`h-2.5 flex-1 rounded-full transition-colors ${
                  i < turn ? "bg-primary" : i === turn ? "bg-primary/50" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {METRIC_META.map((m) => {
              const value = metrics[m.key];
              const delta = feedback?.[m.key] ?? 0;
              const Icon = m.icon;
              return (
                <div key={m.key} className="relative rounded-2xl bg-muted/60 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold sm:text-sm">
                    <Icon className={`size-4 ${m.text}`} />
                    <span className="truncate">{m.name}</span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-background">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${barColor(value)}`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <div className="mt-1 text-right text-xs font-bold tabular-nums">{value}</div>
                  {delta !== 0 && (
                    <span
                      className={`animate-bounce absolute -top-3 right-2 rounded-full px-2 py-0.5 text-xs font-extrabold shadow ${
                        delta > 0 ? "bg-good text-background" : "bg-bad text-background"
                      }`}
                    >
                      {delta > 0 ? `+${delta}` : delta} {m.emoji}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-border bg-card p-5 shadow-xl sm:p-7">
          <div className="text-center">
            <div className="text-5xl">{card.emoji}</div>
            <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">{card.title}</h2>
            <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {card.description}
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {card.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => choose(opt)}
                disabled={!!feedback}
                className="group rounded-2xl border-2 border-border bg-background p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
              >
                <div className="font-display text-lg font-bold group-hover:text-primary">{opt.label}</div>
                <p className="mt-1 text-sm text-muted-foreground">{opt.detail}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function EndScreen({
  emoji,
  title,
  text,
  year,
  metrics,
  onRestart,
  tone,
}: {
  emoji: string;
  title: string;
  text: string;
  year: number;
  metrics: Metrics;
  onRestart: () => void;
  tone: "good" | "bad";
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10 font-sans text-foreground">
      <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-7 text-center shadow-xl">
        <div className="text-6xl">{emoji}</div>
        <div
          className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
            tone === "good" ? "bg-good/15 text-good" : "bg-bad/15 text-bad"
          }`}
        >
          {tone === "good" ? <Trophy className="size-4" /> : <AlertTriangle className="size-4" />}
          {tone === "good" ? "Fin del mandato" : `Mandato interrumpido en el año ${year}`}
        </div>
        <h1 className="mt-3 font-display text-3xl font-extrabold">{title}</h1>
        <p className="mt-2 text-base text-muted-foreground">{text}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 text-left sm:grid-cols-4">
          {METRIC_META.map((m) => (
            <div key={m.key} className="rounded-2xl bg-muted/60 p-3">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <m.icon className={`size-4 ${m.text}`} />
                <span className="truncate">{m.name}</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-background">
                <div className={`h-full ${barColor(metrics[m.key])}`} style={{ width: `${metrics[m.key]}%` }} />
              </div>
              <div className="mt-1 text-right text-xs font-bold tabular-nums">{metrics[m.key]}</div>
            </div>
          ))}
        </div>

        <button
          onClick={onRestart}
          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-display text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <RotateCcw className="size-5" /> Volver a Jugar
        </button>
      </div>
    </main>
  );
}
