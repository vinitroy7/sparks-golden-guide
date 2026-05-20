import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Award, Users, TrendingUp, FileText, Calculator,
  Building2, ScrollText, ClipboardCheck, BookOpen, Wallet, Rocket, Receipt,
  LineChart, Stamp, Star, ChevronDown, CheckCircle2, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Counter } from "@/components/site/Counter";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { useState } from "react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparks & Associates – Chartered Accountants in Noida | Tax, GST, Audit" },
      { name: "description", content: "Trusted Chartered Accountants in Noida. GST, ITR, audit, company registration & financial advisory for businesses, startups and individuals across India." },
      { property: "og:title", content: "Sparks & Associates – Chartered Accountants" },
      { property: "og:description", content: "Your Trusted Financial & Taxation Partner across India." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Receipt, title: "GST Registration & Filing", desc: "End-to-end GST registration, returns, refunds and audits." },
  { icon: FileText, title: "Income Tax Return Filing", desc: "Accurate ITR filing for individuals, firms and corporates." },
  { icon: Building2, title: "Company Registration", desc: "Private Ltd., LLP, OPC and partnership incorporation." },
  { icon: ScrollText, title: "ROC Compliance", desc: "Annual filings, board resolutions and statutory records." },
  { icon: ClipboardCheck, title: "Audit & Assurance", desc: "Statutory, internal, tax and management audits." },
  { icon: BookOpen, title: "Accounting & Bookkeeping", desc: "Cloud-based accounting, MIS and financial reporting." },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Trusted Expertise", desc: "Decades of combined CA experience across diverse sectors." },
  { icon: Award, title: "ICAI Certified", desc: "Practising Chartered Accountants with proven credentials." },
  { icon: TrendingUp, title: "Growth-Focused", desc: "Strategic advisory that scales with your business." },
  { icon: Users, title: "Client-First Approach", desc: "Dedicated relationship managers and proactive support." },
];

const industries = [
  "Startups", "IT Companies", "Real Estate", "E-commerce",
  "Healthcare", "Manufacturing", "Retail", "Freelancers",
];

const testimonials = [
  { name: "Rohan Mehta", role: "Founder, TechSprint Pvt Ltd", quote: "Sparks & Associates transformed our finance function. Their startup advisory helped us close our seed round with confidence." },
  { name: "Anjali Sharma", role: "CFO, Greenwave Retail", quote: "Meticulous, responsive, and genuinely strategic. Our GST and audit work has never been smoother." },
  { name: "Vikram Singh", role: "Director, Lumen Infrastructure", quote: "The most professional CA firm we've worked with. Clear communication and zero compliance worries." },
];

const faqs = [
  { q: "What services does Sparks & Associates offer?", a: "We provide GST, income tax, audit, company registration, ROC compliance, accounting, payroll, financial advisory and startup consultancy across India." },
  { q: "Do you serve clients outside Noida?", a: "Yes. We service businesses and individuals across India through a fully digital, secure document workflow." },
  { q: "How quickly can I get a consultation?", a: "Submit the form on this page or call us — we respond within 24 hours, usually same day." },
  { q: "Are your Chartered Accountants ICAI certified?", a: "Yes. Our practising team is fully credentialed by the Institute of Chartered Accountants of India." },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" width={1600} height={1100} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        </div>
        <div className="relative mx-auto max-w-7xl container-px py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold mb-5 animate-fade-up">
              <span className="h-px w-10 bg-gold" /> ICAI Certified · Since Years
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] animate-fade-up">
              Your Trusted <span className="text-gold">Financial &amp; Taxation</span> Partner
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-2xl animate-fade-up">
              Professional Chartered Accountant Services for Businesses, Startups &amp; Individuals Across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition hover:scale-105">
                Get Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">
                Contact Us
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg animate-fade-up">
              {[
                { v: 500, s: "+", l: "Clients Served" },
                { v: 15, s: "+", l: "Years Combined" },
                { v: 100, s: "%", l: "Compliance" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-gold">
                    <Counter end={s.v} suffix={s.s} />
                  </div>
                  <div className="text-xs text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT OVERVIEW */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionTitle eyebrow="About the Firm" title="A modern CA firm built on trust, precision & insight." />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sparks &amp; Associates is a Noida-based chartered accountancy practice serving ambitious businesses, growing startups and individuals across India. We combine deep technical expertise with a genuinely consultative approach — so you get more than compliance, you get clarity.
            </p>
            <ul className="mt-6 space-y-3">
              {["Personalised attention from senior CAs", "Cloud-first, secure document workflows", "Transparent pricing with no surprises", "Pan-India service delivery"].map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl bg-gradient-navy p-8 lg:p-10 text-navy-foreground shadow-elegant">
              <Quote className="h-10 w-10 text-gold mb-4" />
              <p className="font-display text-xl lg:text-2xl leading-relaxed">
                "Integrity, accuracy and proactive advisory — the pillars on which we build every client relationship."
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-gold font-semibold">Founding Partner</div>
                <div className="text-sm text-white/60">Sparks &amp; Associates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl container-px">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionTitle eyebrow="What We Do" title="Comprehensive CA services, tailored to you." />
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group relative bg-card rounded-xl p-7 border border-border hover:border-gold transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="h-12 w-12 rounded-lg bg-navy text-gold flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:text-navy transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US + counters */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl container-px">
          <SectionTitle center eyebrow="Why Choose Us" title="The clarity, care and competence your business deserves." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="text-center p-6 rounded-xl bg-secondary hover:bg-navy hover:text-white transition-all group">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-navy">
                  <w.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-white/70">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-navy rounded-2xl p-8 lg:p-12 text-white">
            {[
              { v: 500, s: "+", l: "Happy Clients" },
              { v: 1200, s: "+", l: "Filings Completed" },
              { v: 50, s: "+", l: "Industries Served" },
              { v: 15, s: "+", l: "Years of Expertise" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl lg:text-5xl font-bold text-gold">
                  <Counter end={s.v} suffix={s.s} />
                </div>
                <div className="text-sm text-white/70 mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl container-px">
          <SectionTitle center eyebrow="Industries We Serve" title="Specialised expertise across diverse sectors." />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 text-center border border-border hover:border-gold hover:shadow-gold transition-all hover:-translate-y-1">
                <div className="font-display font-semibold text-navy">{i}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
              Explore all industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl container-px">
          <SectionTitle center eyebrow="Client Stories" title="Trusted by founders, finance teams and individuals." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-xl p-7 border border-border shadow-sm hover:shadow-elegant transition">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Contact Form */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-14">
          <div>
            <SectionTitle eyebrow="FAQ" title="Answers to common questions." />
            <div className="mt-8 space-y-3">
              {faqs.map((f, i) => (
                <button
                  key={f.q}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left bg-card rounded-lg border border-border hover:border-gold transition overflow-hidden"
                >
                  <div className="flex items-center justify-between p-5">
                    <span className="font-semibold text-navy text-sm pr-4">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 text-gold flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </div>
                  {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-in">{f.a}</div>}
                </button>
              ))}
            </div>
          </div>

          <div id="consultation" className="bg-card rounded-2xl p-7 lg:p-10 shadow-elegant border border-border">
            <h3 className="font-display text-2xl font-bold text-navy">Book a Free Consultation</h3>
            <p className="text-sm text-muted-foreground mt-2">Tell us about your needs and we'll get back within 24 hours.</p>
            <div className="mt-6"><ConsultationForm /></div>
          </div>
        </div>
      </section>

      {/* MAP STRIP */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl container-px py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle eyebrow="Visit Us" title="Located in the heart of Noida." />
            <p className="mt-4 text-muted-foreground">{SITE.address}</p>
            <div className="mt-5 space-y-2 text-sm">
              <div><span className="text-gold font-semibold">Phone:</span> <a href={`tel:${SITE.phoneRaw}`} className="text-navy">{SITE.phone}</a></div>
              <div><span className="text-gold font-semibold">Email:</span> <a href={`mailto:${SITE.email}`} className="text-navy">{SITE.email}</a></div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border shadow-elegant aspect-video">
            <iframe
              title="Office location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
              className="w-full h-full" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
