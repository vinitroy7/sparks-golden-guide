import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Calendar, ArrowRight, User } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog – Tax, GST & Finance Updates | Sparks & Associates" },
      { name: "description", content: "Latest GST updates, tax notifications, ITR tips, compliance news and financial insights from Sparks & Associates Chartered Accountants." },
      { property: "og:title", content: "Blog | Sparks & Associates" },
      { property: "og:description", content: "Tax, GST and finance insights from practising CAs." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { category: "GST", title: "GST Rate Changes 2026: What Businesses Need to Know", excerpt: "A practical breakdown of the latest GST rate revisions, how they impact pricing strategy, and the input credit adjustments to make immediately.", date: "May 12, 2026", author: "Sparks Editorial", color: "from-blue-900 to-blue-700" },
  { category: "Income Tax", title: "ITR Filing Season: Avoiding the 7 Most Common Mistakes", excerpt: "From mismatched 26AS data to wrong ITR forms — here's a checklist to ensure a clean, defect-free return this year.", date: "May 5, 2026", author: "Sparks Editorial", color: "from-emerald-900 to-emerald-700" },
  { category: "Startups", title: "DPIIT Recognition: A Step-by-Step Guide for Founders", excerpt: "Tax holidays, angel-tax exemption, faster IP processing — everything you unlock with DPIIT recognition and how to apply.", date: "Apr 28, 2026", author: "Sparks Editorial", color: "from-amber-900 to-amber-700" },
  { category: "Finance Tips", title: "Cash Flow Management for Growing SMEs", excerpt: "Five proven frameworks to forecast, monitor and protect cash flow — the most common cause of SME distress.", date: "Apr 20, 2026", author: "Sparks Editorial", color: "from-purple-900 to-purple-700" },
  { category: "Audit", title: "Internal Audit vs Statutory Audit: Why You Need Both", excerpt: "Beyond compliance — how internal audits surface operational risk before it becomes a financial problem.", date: "Apr 15, 2026", author: "Sparks Editorial", color: "from-rose-900 to-rose-700" },
  { category: "Compliance", title: "ROC Annual Filing Deadlines: 2026 Calendar", excerpt: "Bookmark this — every key ROC, AOC-4, MGT-7 and director-KYC deadline you can't afford to miss this year.", date: "Apr 8, 2026", author: "Sparks Editorial", color: "from-teal-900 to-teal-700" },
];

function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Insights & Updates" title="Tax, GST & finance insights from practising CAs." subtitle="Plain-English explainers, regulatory updates and practical advice — published regularly by our team." />

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl container-px">
          {/* Featured */}
          <article className="group grid lg:grid-cols-2 gap-8 mb-16 bg-card rounded-2xl overflow-hidden border border-border hover:border-gold hover:shadow-elegant transition">
            <div className={`relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br ${featured.color} flex items-center justify-center p-10`}>
              <span className="absolute top-5 left-5 text-xs uppercase tracking-[0.2em] text-gold bg-navy/60 px-3 py-1 rounded">Featured</span>
              <span className="font-display text-7xl lg:text-9xl font-bold text-white/10">{featured.category[0]}</span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="bg-secondary text-navy px-2.5 py-1 rounded font-semibold">{featured.category}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {featured.date}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl lg:text-3xl font-bold text-navy group-hover:text-gold transition">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
              <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <article key={p.title} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className={`aspect-[16/10] bg-gradient-to-br ${p.color} flex items-center justify-center relative`}>
                  <span className="font-display text-7xl font-bold text-white/15">{p.category[0]}</span>
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-gold bg-navy/60 px-2.5 py-1 rounded">{p.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {p.author}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy group-hover:text-gold transition leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.excerpt}</p>
                  <Link to="/blog" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold">
                    Read more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
