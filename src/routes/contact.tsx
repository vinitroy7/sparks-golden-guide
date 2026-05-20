import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sparks & Associates | CA Firm in Noida" },
      { name: "description", content: "Visit, call or message Sparks & Associates Chartered Accountants in Sector 76, Noida. Free 30-minute consultation available." },
      { property: "og:title", content: "Contact | Sparks & Associates" },
      { property: "og:description", content: "Get in touch for a free consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: MapPin, title: "Office Address", lines: [SITE.address] },
    { icon: Phone, title: "Phone", lines: [SITE.phone], href: `tel:${SITE.phoneRaw}` },
    { icon: Mail, title: "Email", lines: [SITE.email], href: `mailto:${SITE.email}` },
    { icon: Clock, title: "Business Hours", lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: Closed"] },
  ];

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Sparks & Associates, I'd like a consultation.")}`;

  return (
    <>
      <PageHero eyebrow="Get In Touch" title="Let's talk about your financial goals." subtitle="Send a message, call, or visit our Noida office — we typically respond within a few hours." />

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {cards.map((c) => (
              <div key={c.title} className="bg-card rounded-2xl p-6 border border-border hover:border-gold transition group">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center text-navy group-hover:scale-110 transition">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-navy">{c.title}</h3>
                {c.lines.map((l, i) => (
                  c.href && i === 0 ? (
                    <a key={i} href={c.href} className="block mt-2 text-sm text-muted-foreground hover:text-gold transition">{l}</a>
                  ) : (
                    <p key={i} className="mt-2 text-sm text-muted-foreground">{l}</p>
                  )
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-card rounded-2xl p-7 lg:p-10 shadow-elegant border border-border">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">Complete the form and a senior CA will get back to you within 24 hours.</p>
              <div className="mt-6"><ConsultationForm /></div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md border border-[#25D366] text-[#25D366] px-6 py-3 text-sm font-semibold hover:bg-[#25D366] hover:text-white transition">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-border shadow-elegant aspect-square lg:aspect-auto lg:h-[460px]">
                <iframe
                  title="Sparks & Associates office on Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
                  className="w-full h-full" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-gradient-navy text-white rounded-2xl p-7">
                <h3 className="font-display text-xl font-bold text-gold">Prefer to drop by?</h3>
                <p className="mt-2 text-sm text-white/75">{SITE.address}</p>
                <a
                  href={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-white transition"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
