import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE, NAV } from "@/lib/site";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  "GST Registration & Filing",
  "Income Tax Return Filing",
  "Company Registration",
  "Audit & Assurance",
  "Accounting & Bookkeeping",
  "Startup Consultancy",
];

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Please enter a valid email");
    toast.success("Subscribed! Watch your inbox for finance insights.");
    setEmail("");
  };

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl container-px py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-md bg-gradient-gold flex items-center justify-center font-display text-navy text-xl font-bold">S</div>
              <div>
                <div className="font-display font-bold">SPARKS & ASSOCIATES</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-gold">Chartered Accountants</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your trusted partner for taxation, audit, and financial advisory services across India. Building businesses with integrity since day one.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/70 hover:text-gold transition">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/70 hover:text-gold transition">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" /><span>{SITE.address}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" /><a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold">{SITE.phone}</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" /><a href={`mailto:${SITE.email}`} className="hover:text-gold break-all">{SITE.email}</a></li>
            </ul>

            <form onSubmit={subscribe} className="mt-6">
              <label className="text-xs uppercase tracking-wider text-gold mb-2 block">Newsletter</label>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  maxLength={120}
                  className="flex-1 rounded-l-md bg-white/10 border border-white/15 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-gold"
                />
                <button type="submit" className="rounded-r-md bg-gradient-gold px-4 text-navy">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <p>Crafted with precision · Trust · Integrity · Excellence</p>
        </div>
      </div>
    </footer>
  );
}
