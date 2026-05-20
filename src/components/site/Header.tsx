import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-navy text-navy-foreground"
      )}
    >
      <div className={cn("hidden lg:block border-b transition-colors", scrolled ? "border-border" : "border-white/10")}>
        <div className="mx-auto max-w-7xl container-px flex h-9 items-center justify-between text-xs">
          <span className={cn(scrolled ? "text-muted-foreground" : "text-white/70")}>
            {SITE.address}
          </span>
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.phoneRaw}`} className={cn("flex items-center gap-1.5 hover:text-gold transition", scrolled ? "text-foreground" : "text-white/90")}>
              <Phone className="h-3 w-3" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className={cn("hover:text-gold transition", scrolled ? "text-foreground" : "text-white/90")}>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl container-px flex h-16 lg:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-md bg-gradient-gold flex items-center justify-center font-display text-navy text-xl font-bold shadow-gold">
            S
          </div>
          <div className="leading-tight">
            <div className={cn("font-display text-base lg:text-lg font-bold tracking-tight", scrolled ? "text-navy" : "text-white")}>
              SPARKS & ASSOCIATES
            </div>
            <div className={cn("text-[10px] lg:text-[11px] tracking-[0.2em] uppercase", scrolled ? "text-muted-foreground" : "text-gold")}>
              Chartered Accountants
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  active
                    ? scrolled ? "text-navy" : "text-gold"
                    : scrolled ? "text-foreground/80 hover:text-navy" : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-105"
          >
            Get Consultation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn("lg:hidden p-2 rounded-md", scrolled ? "text-navy" : "text-white")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-slide-down">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "px-3 py-3 rounded-md text-sm font-medium",
                  path === item.to ? "bg-secondary text-navy" : "text-foreground hover:bg-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2 inline-flex justify-center rounded-md bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy">
              Get Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
