import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, FileText, Megaphone, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/piotr-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Piotr Gierczak — Google Ads & Landing Page Copywriter" },
      {
        name: "description",
        content:
          "Freelance copywriter specializing in Google Ads and high-converting landing pages. Real campaigns, real ROI — 8–10x return for clients.",
      },
      { property: "og:title", content: "Piotr Gierczak — Copy that converts" },
      {
        property: "og:description",
        content: "Google Ads + landing pages that turn ad spend into paying customers.",
      },
    ],
  }),
});

const services = [
  {
    icon: Target,
    title: "Google Ads Campaigns",
    desc: "High-intent keyword strategy, tight ad groups, and ad copy built to filter tire-kickers and pull in buyers.",
  },
  {
    icon: FileText,
    title: "Landing Pages That Convert",
    desc: "Conversion-first pages built around your offer, your buyer's pain, and a single decisive action.",
  },
  {
    icon: Megaphone,
    title: "Ads, Headlines & Hooks",
    desc: "Headlines and angles tested against real market language — not clever wordplay, but words that sell.",
  },
  {
    icon: TrendingUp,
    title: "Market & Audience Research",
    desc: "Deep research into what your buyers actually want, fear, and search for — the foundation of every win.",
  },
];

const advantages = [
  "Direct-response trained — every word fights for the click or the conversion",
  "Full funnel ownership: ad → landing page → booked call",
  "Profitable on small budgets (proven at <$300/month ad spend → ~11x ROAS)",
  "Transparent reporting tied to revenue, not vanity metrics",
  "Fast turnaround — campaigns live in days, not weeks",
  "No long contracts. Results speak first.",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:py-32">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Freelance Copywriter — Google Ads & Landing Pages
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Copy that turns ad spend into{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                paying customers.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              I'm Piotr — I build Google Ads campaigns and landing pages for service businesses that need predictable, profitable lead flow. No fluff. Just words and funnels that move money.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" style={{ boxShadow: "var(--shadow-glow)" }}>
                <a href="https://calendly.com/piotrgierczaksc/30min" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/case-study">See a Real Case Study</Link>
              </Button>
            </div>
            <div className="flex gap-8 pt-6">
              <div>
                <div className="text-2xl font-bold text-primary md:text-3xl">10–12x</div>
                <div className="text-xs text-muted-foreground">ROAS for clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary md:text-3xl">4.6%</div>
                <div className="text-xs text-muted-foreground">Avg. ad CTR</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary md:text-3xl">&lt;$300</div>
                <div className="text-xs text-muted-foreground">Profitable spend</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl"
              aria-hidden
            />
            <img
              src={portrait}
              alt="Piotr Gierczak, freelance copywriter"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Built to bring you clients — not awards
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything I do is tied to one number: how much revenue your campaigns produce.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="border-y border-border/40 bg-card/30 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why business owners hire me
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most copywriters write words. I build profit machines — research-backed, conversion-tested, and tied to revenue.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://calendly.com/piotrgierczaksc/30min" target="_blank" rel="noopener noreferrer">
                Get Your Free Consultation
              </a>
            </Button>
          </div>
          <ul className="space-y-4">
            {advantages.map((a) => (
              <li key={a} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CASE STUDY TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 md:p-12" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Case Study — Ventico HVAC
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                $253 in ad spend → ~$2,800 in revenue
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Warsaw HVAC business with no predictable lead flow. In 30 days: 175 clicks, 4.6% CTR, 8 paying customers, ~11x return.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Stat label="Ad Spend" value="$253" />
                <Stat label="Clicks" value="175" />
                <Stat label="CTR" value="4.6%" />
                <Stat label="ROAS" value="~11x" />
              </div>
            </div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/case-study">
                Read full case <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Want results like this for your business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Book a free 30-minute consultation. We'll look at your offer, your funnel, and what it would take to make Google Ads profitable for you.
        </p>
        <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90" style={{ boxShadow: "var(--shadow-glow)" }}>
          <a href="https://calendly.com/piotrgierczaksc/30min" target="_blank" rel="noopener noreferrer">
            Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
