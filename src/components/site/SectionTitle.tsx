export function SectionTitle({
  eyebrow, title, subtitle, center = false,
}: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold mb-3 ${center ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-gold" /> {eyebrow} <span className="h-px w-8 bg-gold" />
        </div>
      )}
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
