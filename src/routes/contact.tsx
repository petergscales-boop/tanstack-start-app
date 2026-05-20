import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Check, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Free Consultation — Piotr Gierczak | Copywriter" },
      {
        name: "description",
        content:
          "Book a free 30-minute consultation. We'll review your offer and funnel and see if Google Ads + a landing page can make you money.",
      },
      { property: "og:title", content: "Book a Free Consultation with Piotr Gierczak" },
      { property: "og:description", content: "30 minutes. No pitch. Just clear answers about your funnel." },
    ],
  }),
});

const perks = [
  "30-minute call, zero cost, zero pitch",
  "Honest assessment of whether ads can be profitable for you",
  "Concrete next steps you can use even if we don't work together",
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free consultation request — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\n\n${form.message}`,
    );
    window.location.href = `mailto:peter@piotrgierczak.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Free Consultation
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Let's see if I can{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                make you money.
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell me a little about your business. I'll get back to you within 24 hours to schedule a 30-minute call.
            </p>

            <ul className="mt-8 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4 border-t border-border pt-8">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:peter@piotrgierczak.com" className="hover:text-primary">
                  peter@piotrgierczak.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>Replies within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span>Polish & English</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8" style={{ boxShadow: "var(--shadow-elegant)" }}>
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">Thanks!</h2>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Your email client should have opened. If not, send your message directly to{" "}
                  <a href="mailto:peter@piotrgierczak.com" className="text-primary hover:underline">
                    peter@piotrgierczak.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jan Kowalski" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@business.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business / Website</Label>
                  <Input id="business" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Your company or URL" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">What do you need help with?</Label>
                  <Textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your offer and what's not working in your funnel right now..." />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" style={{ boxShadow: "var(--shadow-glow)" }}>
                  Request Free Consultation
                </Button>
                <p className="text-center text-xs text-muted-foreground">No pitch. No spam. Just a straight conversation.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
