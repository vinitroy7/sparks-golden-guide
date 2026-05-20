import { SITE } from "@/lib/site";

export function WhatsAppButton() {
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Sparks & Associates, I'd like a consultation.")}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A10 10 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02zM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.53-3.7 8.23-8.23 8.23zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.37-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.16 1.73 2.64 4.2 3.7.59.25 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.31z"/>
      </svg>
    </a>
  );
}
