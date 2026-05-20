import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  Receipt, FileText, Building2, ScrollText, ClipboardCheck, BookOpen,
  Wallet, Rocket, Stamp, LineChart, Award, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "CA Services in Noida | GST, ITR, Audit, Company Reg | Sparks & Associates" },
      { name: "description", content: "Full-spectrum CA services: GST, income tax, audit & assurance, company registration, ROC, accounting, payroll, TDS, financial advisory and MSME." },
      { property: "og:title", content: "Our Services | Sparks & Associates" },
      { property: "og:description", content: "Professional CA services tailored for businesses, startups and individuals." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Receipt, title: "GST Registration & Filing", desc: "GST registration, monthly/quarterly returns, refunds, reconciliation and GST audits — handled end-to-end.", points: ["GSTIN registration", "GSTR-1, 3B, 9 filings", "Input credit reconciliation"] },
  { icon: FileText, title: "Income Tax Return Filing", desc: "Accurate ITR filing for salaried individuals, professionals, firms and corporates with tax-saving planning.", points: ["ITR-1 to ITR-7", "Capital gains computation", "Tax planning advisory"] },
  { icon: Building2, title: "Company Registration", desc: "Incorporation of Private Limited, LLP, OPC, Partnership and Section 8 companies — fast and compliant.", points: ["DIN, DSC & name approval", "MOA & AOA drafting", "PAN, TAN & bank setup"] },
  { icon: ScrollText, title: "ROC Compliance", desc: "Annual ROC filings, statutory registers, board resolutions and ongoing corporate compliance.", points: ["AOC-4, MGT-7", "Director KYC", "Statutory record maintenance"] },
  { icon: ClipboardCheck, title: "Audit & Assurance", desc: "Statutory, internal, tax, GST and management audits — rigorous, insightful, and timely.", points: ["Statutory audit", "Internal & tax audit", "Management audit reports"] },
  { icon: BookOpen, title: "Accounting & Bookkeeping", desc: "Cloud-first accounting, monthly closing, MIS reporting and financial statement preparation.", points: ["Tally / Zoho / QuickBooks", "Monthly MIS", "Financial statements"] },
  { icon: Wallet, title: "Payroll Services", desc: "End-to-end payroll processing, PF/ESIC compliance and TDS on salaries — all in one place.", points: ["Salary processing", "PF, ESIC, PT compliance", "Form 16 generation"] },
  { icon: Rocket, title: "Startup Consultancy", desc: "DPIIT recognition, funding readiness, cap-table support and CFO advisory for early-stage ventures.", points: ["DPIIT registration", "Investor-ready financials", "Virtual CFO support"] },
  { icon: Stamp, title: "TDS Filing", desc: "TDS deduction advisory, quarterly returns, certificates and reconciliation.", points: ["TDS computation", "Quarterly TDS returns", "Form 16/16A issuance"] },
  { icon: LineChart, title: "Financial Advisory", desc: "Strategic financial planning, business valuations, M&A support and growth advisory.", points: ["Business valuation", "Financial planning", "M&A advisory"] },
  { icon: Award, title: "MSME Registration", desc: "Udyam registration and MSME compliance to unlock government schemes and benefits.", points: ["Udyam registration", "MSME loan documentation", "Scheme advisory"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What We Do" title="Comprehensive CA services, expertly delivered." subtitle="From day-to-day compliance to strategic advisory — one trusted partner for every financial need." />

      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group relative bg-card rounded-2xl p-7 border border-border hover:border-gold hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="h-14 w-14 rounded-xl bg-navy text-gold flex items-center justify-center group-hover:bg-gradient-gold group-hover:text-navy transition-colors">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="text-xs text-foreground/70 flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-navy text-white">
        <div className="mx-auto max-w-5xl container-px text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold">Not sure which service you need?</h2>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">Book a free 30-minute consultation. We'll listen, assess and recommend exactly what your business needs — nothing more, nothing less.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold hover:scale-105 transition">
            Book Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
