import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Valid email required").max(120),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  service: z.string().max(80).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

const services = [
  "GST Registration & Filing", "Income Tax Return Filing", "Company Registration",
  "ROC Compliance", "Audit & Assurance", "Accounting & Bookkeeping",
  "Payroll Services", "Startup Consultancy", "TDS Filing", "Financial Advisory",
  "MSME Registration", "Other",
];

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Request received! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
    setSubmitting(false);
  };

  const input = "w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
        <input className={input} placeholder="Full name *" value={form.name} maxLength={80}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className={input} placeholder="Email *" type="email" value={form.email} maxLength={120}
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div className={compact ? "space-y-4" : "grid sm:grid-cols-2 gap-4"}>
        <input className={input} placeholder="Phone *" value={form.phone} maxLength={20}
          onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <select className={input} value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <textarea className={input} placeholder="How can we help you? *" rows={5} value={form.message} maxLength={1000}
        onChange={(e) => setForm({ ...form, message: e.target.value })} />
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-navy shadow-gold transition hover:scale-[1.01] disabled:opacity-60"
      >
        {submitting ? "Sending..." : <>Request Consultation <Send className="h-4 w-4" /></>}
      </button>
    </form>
  );
}
