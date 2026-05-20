import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Target, MousePointerClick, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import gAdsImg from "@/assets/ventico-google-ads.png";

export const Route = createFileRoute("/case-study")({
  component: CaseStudy,
  head: () => ({
    meta: [
      { title: "Case Study: $253 → 8 Customers & ~11x ROAS for Warsaw HVAC | Piotr Gierczak" },
      {
        name: "description",
        content:
          "How a Google Ads campaign + landing page turned $253 ad spend into 8 paying customers and ~11x ROAS for an HVAC business in Warsaw.",
      },
      { property: "og:title", content: "Case Study: HVAC Google Ads — ~11x ROAS" },
      {
        property: "og:description",
        content: "Real campaign, real numbers: 175 clicks, 4.6% CTR, 8 paying customers from $253 ad spend.",
      },
    ],
  }),
});

const stats = [
  { icon: Wallet, label: "Ad Spend", value: "$253", sub: "~934 PLN" },
  { icon: MousePointerClick, label: "Clicks", value: "175", sub: "3.8k impressions" },
  { icon: Target, label: "CTR", value: "4.6%", sub: "2x industry avg." },
  { icon: TrendingUp, label: "ROAS", value: "~11x", sub: "10–12x return" },
];

function CaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <article className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Case Study · HVAC · Warsaw, Poland
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            How $253 in ad spend produced{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              8 paying customers
            </span>{" "}
            and ~11x ROAS
          </h1>
          <p className="text-lg text-muted-foreground">
            A Warsaw HVAC business with no predictable lead flow. 30 days later: a profitable Google Ads campaign producing booked installations and service jobs on autopilot.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-2xl font-bold text-primary md:text-3xl">{s.value}</div>
              <div className="text-sm font-medium">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Real screenshot */}
        <figure className="mt-12 overflow-hidden rounded-2xl border border-border bg-card" style={{ boxShadow: "var(--shadow-elegant)" }}>
          <img src={gAdsImg} alt="Google Ads dashboard showing 175 clicks, 3.8k impressions, 4.6% CTR, $253 spend" className="w-full" />
          <figcaption className="border-t border-border bg-card/50 px-5 py-3 text-xs text-muted-foreground">
            Live Google Ads dashboard — Ventico HVAC, Warsaw. 11 Feb – 11 Mar 2026.
          </figcaption>
        </figure>

        {/* Sections */}
        <Section title="The Client" eyebrow="Background">
          <p>
            Ventico — an HVAC services company in Warsaw, Poland, focused on air conditioning installation and maintenance. A solid local operation, skilled team, but stuck on one problem: <strong className="text-foreground">no predictable flow of new customers from online channels.</strong>
          </p>
        </Section>

        <Section title="The Challenge" eyebrow="Problem">
          <p>
            They had tried ads before. Money went out, very little came back. The pipeline depended on referrals and luck — not a system. They needed inbound leads that actually picked up the phone and booked jobs, on a budget a small business could justify.
          </p>
          <ul className="mt-4 space-y-2">
            <Bullet>No reliable inbound lead source</Bullet>
            <Bullet>Past ad spend produced clicks but not customers</Bullet>
            <Bullet>Small budget — every dollar had to work</Bullet>
          </ul>
        </Section>

        <Section title="The Approach" eyebrow="What I did">
          <p>
            Instead of just "running ads," I rebuilt the entire funnel from intent to booked call.
          </p>
          <ul className="mt-4 space-y-2">
            <Bullet><strong className="text-foreground">Market & target audience research</strong> — who actually buys AC installation in Warsaw, when, and why</Bullet>
            <Bullet><strong className="text-foreground">Built and optimized the Google Ads campaign</strong> from scratch with a clean account structure</Bullet>
            <Bullet><strong className="text-foreground">Refined keyword targeting</strong> to focus only on high-intent buyer searches — cut the tire-kickers</Bullet>
            <Bullet><strong className="text-foreground">Improved campaign structure</strong> for higher quality scores and better lead quality</Bullet>
            <Bullet><strong className="text-foreground">Built a high-converting landing page</strong> matched to ad intent — one offer, one action</Bullet>
            <Bullet><strong className="text-foreground">Focused every step on converting traffic into paying customers</strong> — not vanity clicks</Bullet>
          </ul>
        </Section>

        {/* Results highlight */}
        <div className="mt-16 rounded-3xl border border-primary/30 p-8 md:p-12" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">The Results</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            8 paying customers from $253 in ad spend.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ResultBlock label="Customers Acquired" value="8" sub="4 installations + 4 service jobs" />
            <ResultBlock label="Avg. Customer Value" value="$320–$380" sub="Blended ACV per job" />
            <ResultBlock label="Estimated Revenue" value="$2,560–$3,040" sub="~10k–12k PLN" />
          </div>
          <div className="mt-8 rounded-2xl border border-primary/30 bg-background/40 p-6">
            <div className="text-sm uppercase tracking-wider text-muted-foreground">ROAS</div>
            <div className="mt-1 text-4xl font-bold text-primary md:text-5xl">~10–12x return</div>
            <p className="mt-2 text-muted-foreground">For every $1 spent on ads, ~$10–$12 came back as revenue.</p>
          </div>
        </div>

        <Section title="Key Insight" eyebrow="Takeaway">
          <p className="text-lg">
            <strong className="text-foreground">High-intent search traffic combined with proper campaign structure can generate profitable results — even with a small budget.</strong> You don't need $3,000/month to make Google Ads work. You need the right keywords, the right copy, and a landing page that does its job.
          </p>
        </Section>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Want a campaign like this for your business?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Book a free consultation. I'll review your offer and tell you honestly whether Google Ads can be profitable for you — and how.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90" style={{ boxShadow: "var(--shadow-glow)" }}>
            <a href="https://calendly.com/piotrgierczaksc/30min" target="_blank" rel="noopener noreferrer">
              Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

function Section({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      <span>{children}</span>
    </li>
  );
}

function ResultBlock({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background/40 p-5">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-bold text-primary md:text-3xl">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{sub}</div>
    </div>
  );
}
