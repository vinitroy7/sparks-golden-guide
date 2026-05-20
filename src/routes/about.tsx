import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import aboutImg from "@/assets/about.jpg";
import founderImg from "@/assets/founder.jpg";
import { Eye, Target, Award, ShieldCheck, Heart, Zap, Users, Briefcase } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sparks & Associates – Chartered Accountants" },
      { name: "description", content: "Meet Sparks & Associates — a Noida-based CA firm built on integrity, expertise and proactive advisory for businesses across India." },
      { property: "og:title", content: "About Sparks & Associates" },
      { property: "og:description", content: "Our vision, mission, team and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honest, transparent advice — always." },
  { icon: Award, title: "Excellence", desc: "Precision and quality in every engagement." },
  { icon: Heart, title: "Client-First", desc: "Your success is the measure of ours." },
  { icon: Zap, title: "Innovation", desc: "Modern tools, smarter processes." },
];

const team = [
  { name: "CA Partner", role: "Founding Partner", initial: "S" },
  { name: "CA Associate", role: "Audit & Assurance Head", initial: "A" },
  { name: "CA Associate", role: "Tax & GST Lead", initial: "T" },
  { name: "Senior Advisor", role: "Startup Consulting", initial: "C" },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Building trust through expertise." subtitle="A Noida-based chartered accountancy firm serving ambitious businesses, growing startups and individuals across India." />

      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-2xl blur-2xl" />
            <img src={aboutImg} alt="Our office" loading="lazy" width={1400} height={1000} className="relative rounded-2xl shadow-elegant" />
          </div>
          <div>
            <SectionTitle eyebrow="Firm Introduction" title="A partnership built on precision and purpose." />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sparks &amp; Associates is a modern chartered accountancy practice based in Sector 76, Noida. We combine deep technical expertise across taxation, audit and advisory with a genuinely consultative approach. Every engagement begins with listening — to your goals, your constraints and your ambitions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From day-one startups to established enterprises, we help our clients achieve compliance, clarity and confident growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl container-px grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, title: "Our Vision", desc: "To be India's most trusted modern CA firm — known for integrity, insight and unwavering client focus." },
            { icon: Target, title: "Our Mission", desc: "To deliver world-class financial, taxation and advisory services that empower every client — from solo professionals to growing enterprises — to thrive with confidence." },
          ].map((b) => (
            <div key={b.title} className="bg-card rounded-2xl p-8 border border-border hover:border-gold hover:shadow-elegant transition">
              <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center text-navy">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy">{b.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <img src={founderImg} alt="Founder portrait" loading="lazy" width={900} height={1100} className="rounded-2xl shadow-elegant" />
          </div>
          <div className="lg:col-span-3">
            <SectionTitle eyebrow="Founder's Message" title="A note from our founding partner." />
            <p className="mt-5 text-muted-foreground leading-relaxed italic">
              "When we founded Sparks &amp; Associates, we set out to build something different — a CA firm that treats every client like a long-term partner. We believe great accounting isn't just about numbers; it's about giving entrepreneurs and businesses the financial clarity to make bold decisions. That belief still guides every engagement we take on."
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="font-display text-lg font-bold text-navy">Founding Partner</div>
              <div className="text-sm text-gold">Sparks &amp; Associates – Chartered Accountants</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl container-px">
          <SectionTitle center eyebrow="Our Team" title="Meet the professionals behind your numbers." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.role} className="bg-card rounded-2xl p-6 text-center border border-border hover:border-gold transition group">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-navy flex items-center justify-center text-gold font-display text-3xl font-bold group-hover:scale-105 transition">
                  {m.initial}
                </div>
                <h3 className="mt-5 font-display font-bold text-navy">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl container-px">
          <SectionTitle center eyebrow="Core Values" title="What guides everything we do." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6">
                <div className="mx-auto h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-gold">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display font-bold text-navy">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-navy text-white">
        <div className="mx-auto max-w-7xl container-px grid md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "ICAI Membership", desc: "Practising members of the Institute of Chartered Accountants of India." },
            { icon: Briefcase, title: "GST Practitioner", desc: "Registered GST practitioners authorised to file across India." },
            { icon: Users, title: "Industry Affiliations", desc: "Active members of leading professional bodies and business councils." },
          ].map((c) => (
            <div key={c.title} className="flex gap-4">
              <div className="h-12 w-12 rounded-lg bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                <c.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-gold">{c.title}</h3>
                <p className="text-sm text-white/70 mt-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
