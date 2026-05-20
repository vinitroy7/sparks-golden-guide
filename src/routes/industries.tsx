import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Rocket, Cpu, Building, ShoppingCart, HeartPulse, Factory, Store, UserCheck, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Sparks & Associates CA Firm" },
      { name: "description", content: "Sector-specific CA expertise: Startups, IT, Real Estate, E-commerce, Healthcare, Manufacturing, Retail and Freelancers." },
      { property: "og:title", content: "Industries We Serve | Sparks & Associates" },
      { property: "og:description", content: "Specialised CA services across diverse industries." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Rocket, title: "Startups", desc: "DPIIT recognition, funding-readiness, ESOP advisory and CFO support tailored for fast-moving founders." },
  { icon: Cpu, title: "IT Companies", desc: "Export advisory under SEZ/STPI, transfer pricing, GST on exports and software-revenue compliance." },
  { icon: Building, title: "Real Estate", desc: "RERA compliance, project accounting, GST on under-construction property and developer audits." },
  { icon: ShoppingCart, title: "E-commerce", desc: "Marketplace reconciliation, TCS under GST, multi-state filings and platform-specific advisory." },
  { icon: HeartPulse, title: "Healthcare", desc: "Hospital accounting, doctor income structuring, GST exemptions and trust/Section 8 compliance." },
  { icon: Factory, title: "Manufacturing", desc: "Costing, inventory audits, GST on works contracts, input credits and MSME advisory." },
  { icon: Store, title: "Retail", desc: "Multi-location accounting, POS reconciliation, GST returns and stock audits for retail chains." },
  { icon: UserCheck, title: "Freelancers", desc: "Presumptive taxation, GST on services, foreign remittance advisory and personal tax planning." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries We Serve" title="Specialised expertise. Real-world insight." subtitle="We bring deep, sector-specific knowledge to every engagement — so the advice you receive actually fits your business." />

      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((i, idx) => (
              <div key={i.title} className="group relative overflow-hidden bg-card rounded-2xl p-7 border border-border hover:border-gold transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="absolute top-0 right-0 font-display text-7xl font-bold text-secondary group-hover:text-gold/10 transition">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center text-navy">
                    <i.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">{i.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-5xl container-px text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">Don't see your industry?</h2>
          <p className="mt-4 text-muted-foreground">We work with businesses across every sector. Let's talk about yours.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy/90 transition">
            Talk to a CA <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
