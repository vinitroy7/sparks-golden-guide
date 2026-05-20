import { Link } from "@tanstack/react-router";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative bg-gradient-hero text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl container-px py-20 lg:py-28">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold mb-4 animate-fade-up">
            <span className="h-px w-8 bg-gold" /> {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight max-w-3xl animate-fade-up">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/75 max-w-2xl animate-fade-up">{subtitle}</p>}
        <nav className="mt-6 text-sm text-white/60 animate-fade-up">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gold">{title}</span>
        </nav>
      </div>
    </section>
  );
}
