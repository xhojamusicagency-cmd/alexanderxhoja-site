import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';
import usePageTitle from '../hooks/usePageTitle';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  usePageTitle(
    'Contact & Booking',
    'Get in touch with Alexander Xhoja — solo, trio, and ensemble bookings; recording sessions; collaborations; and press inquiries.'
  );

  const [status, setStatus] = useState<Status>('idle');
  // Honeypot — bots fill this; real users don't see it
  const [honeypot, setHoneypot] = useState('');
  // Time-trap — if form is submitted within 3 seconds of mount, treat as bot
  const [mountedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return; // bot
    if (Date.now() - mountedAt < 3000) return; // bot
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const payload = {
      from_name: formData.get('name') as string,
      from_email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || 'not provided',
      inquiry_type: formData.get('inquiry_type') as string,
      event_date: (formData.get('event_date') as string) || 'TBD',
      message: formData.get('message') as string,
      to_name: 'Alexander Xhoja',
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        payload,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      setStatus('sent');
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="bg-dark text-cream-light">
      {/* Hero */}
      <section className="bg-dark pt-20 pb-10 md:pt-28 md:pb-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[0.5px] text-cream-light mb-6">
            Contact
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mb-7" />
          <p className="font-serif italic text-cream-light/70 text-base sm:text-lg leading-[1.7]">
            For solo bookings, trio dates, recording sessions, collaborations, and press inquiries.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-dark pb-24 md:pb-32">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          {status === 'sent' ? (
            <div className="text-center py-16 border border-gold/20 bg-gold/[0.04]">
              <p className="text-gold uppercase tracking-[3.5px] text-[11px] mb-5">
                Message Sent
              </p>
              <p className="font-serif italic text-cream-light/80 text-lg leading-relaxed">
                Thanks for reaching out. Alexander will respond within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Honeypot — hidden from real users via styling */}
              <input
                type="text"
                name="company"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
              />

              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (optional)" name="phone" type="tel" />

              <div>
                <label className="block text-gold text-[10px] tracking-[3px] uppercase font-medium mb-2.5">
                  Inquiry type
                </label>
                <select
                  name="inquiry_type"
                  required
                  className="w-full bg-dark border border-cream-light/20 text-cream-light px-4 py-3 text-[15px] focus:outline-none focus:border-gold transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>Select one…</option>
                  <option value="Solo Booking">Solo piano booking</option>
                  <option value="Trio / Ensemble">Trio or ensemble booking</option>
                  <option value="Recording">Recording / studio session</option>
                  <option value="Collaboration">Collaboration / composition</option>
                  <option value="Press">Press / interview</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <Field label="Event date (if applicable)" name="event_date" type="date" />

              <div>
                <label className="block text-gold text-[10px] tracking-[3px] uppercase font-medium mb-2.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-dark border border-cream-light/20 text-cream-light px-4 py-3 text-[15px] font-serif focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell me about the event, project, or idea…"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gold text-dark font-medium tracking-[3px] uppercase text-[11px] hover:bg-cream-light transition-colors duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
              </button>

              {status === 'error' && (
                <p className="text-red-400/80 text-sm text-center mt-2">
                  Something went wrong. Email me directly: <a href="mailto:alexanderxhoja@gmail.com" className="text-gold hover:underline">alexanderxhoja@gmail.com</a>
                </p>
              )}
            </form>
          )}

          {/* Direct contact fallback */}
          <div className="mt-16 pt-10 border-t border-gold/15 text-center space-y-2">
            <p className="text-cream-light/60 text-[12px] tracking-[2px] uppercase">
              Or reach out directly
            </p>
            <p className="font-serif text-cream-light/85 text-[15px]">
              <a href="mailto:alexanderxhoja@gmail.com" className="hover:text-gold transition-colors">
                alexanderxhoja@gmail.com
              </a>
            </p>
            <p className="font-serif text-cream-light/85 text-[15px]">
              <a href="tel:+18574988487" className="hover:text-gold transition-colors">
                (857) 498-8487
              </a>
            </p>
          </div>

          {/* XMA cross-link */}
          <p className="mt-12 text-center text-cream-light/45 font-serif italic text-[13px] leading-relaxed">
            For full-event music bookings (weddings, hotels, corporate, ensembles beyond solo / trio), visit <a href="https://xhojamusicagency.com" className="text-gold hover:underline">Xhoja Music Agency</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-gold text-[10px] tracking-[3px] uppercase font-medium mb-2.5">
        {label}{required && <span className="text-gold/80 ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-dark border border-cream-light/20 text-cream-light px-4 py-3 text-[15px] focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
