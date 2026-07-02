import { useState, type FormEvent } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { submitToWeb3Forms } from '../utils/web3forms';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  usePageTitle('Contact & Booking', 'Get in touch with Alexander Xhoja — solo, trio, and ensemble bookings; recording sessions; collaborations; and press inquiries.');

  const [status, setStatus] = useState<Status>('idle');
  const [sentVia, setSentVia] = useState<'form' | 'mailto'>('form');
  const [honeypot, setHoneypot] = useState('');
  const [mountedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return;
    if (Date.now() - mountedAt < 3000) return;
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || 'not provided';
    const inquiryType = (formData.get('inquiry_type') as string) || 'Inquiry';
    const eventDate = (formData.get('event_date') as string) || 'TBD';
    const message = (formData.get('message') as string) || '';

    const recipient = 'pianowithalexander@gmail.com';
    const subject = `${inquiryType} — ${name}`;
    const body =
      `Name:  ${name}\n` +
      `Email: ${email || 'not provided'}\n` +
      `Phone: ${phone}\n` +
      `Inquiry: ${inquiryType}\n` +
      `Event date: ${eventDate}\n\n` +
      `${message}\n\n` +
      `— sent from pianowithalexander.com`;

    // Primary: deliver straight to the inbox — no "open your mail app" step.
    const fields: Record<string, string> = { subject, from_name: name, phone, message: body };
    if (email) fields.email = email;
    const delivered = await submitToWeb3Forms(fields);
    if (delivered) {
      setSentVia('form');
      setStatus('sent');
      return;
    }

    // Fallback: pre-filled mailto draft so an inquiry is never silently lost.
    setSentVia('mailto');
    setStatus('sent');
    window.location.href =
      `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-12 sm:pt-20 pb-12">
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">
          Get in touch
        </p>
        <h1 className="font-display text-[56px] sm:text-[80px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal mb-6">
          Contact.
        </h1>
        <div className="h-px w-20 bg-bronze mb-8" />
        <p className="font-serif italic text-graphite text-[19px] leading-relaxed max-w-md">
          Solo and ensemble bookings, recording sessions, collaborations, press inquiries.
        </p>
      </section>

      {/* Form */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-2xl mx-auto pb-32">
        {status === 'sent' ? (
          <div className="text-center py-20 border-t border-b border-rule">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-4">
              {sentVia === 'form' ? 'Message sent' : 'One last tap — hit send'}
            </p>
            <p className="font-serif italic text-charcoal text-[20px] leading-relaxed">
              {sentVia === 'form'
                ? 'Thank you — your message is on its way. Alexander will respond within 2 business days.'
                : 'Your message just opened in your email app — give it a quick send and Alexander will respond within 2 business days.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
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
              <label className="block font-sans text-[10px] tracking-label uppercase text-bronze mb-3">
                Inquiry type
              </label>
              <select
                name="inquiry_type"
                required
                defaultValue=""
                className="w-full bg-transparent border-0 border-b border-rule pb-3 text-charcoal font-serif text-[18px] focus:outline-none focus:border-bronze transition-colors"
              >
                <option value="" disabled>Select one…</option>
                <option value="Solo Booking">Solo piano booking</option>
                <option value="Trio / Ensemble">Trio or ensemble booking</option>
                <option value="Private Lessons">Private piano lessons</option>
                <option value="Recording">Recording / studio session</option>
                <option value="Collaboration">Collaboration / composition</option>
                <option value="Press">Press / interview</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <Field label="Event date (if applicable)" name="event_date" type="date" />

            <div>
              <label className="block font-sans text-[10px] tracking-label uppercase text-bronze mb-3">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the event, project, or idea…"
                className="w-full bg-transparent border-0 border-b border-rule pb-3 text-charcoal font-serif text-[18px] focus:outline-none focus:border-bronze transition-colors resize-none placeholder:text-graphite/50 placeholder:italic"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-sans text-[11px] tracking-label uppercase text-charcoal border-b border-bronze pb-1.5 hover:text-bronze transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
            </button>

            {status === 'error' && (
              <p className="text-red-700/80 font-serif italic text-sm mt-2">
                Something went wrong. Email me directly: <a href="mailto:pianowithalexander@gmail.com" className="text-bronze hover:text-bronze-light underline">pianowithalexander@gmail.com</a>
              </p>
            )}
          </form>
        )}

        {/* Direct contact */}
        <div className="mt-20 pt-10 border-t border-rule">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">
            Or reach out directly
          </p>
          <p className="font-serif text-charcoal text-[20px]">
            <a href="mailto:pianowithalexander@gmail.com" className="hover:text-bronze transition-colors">
              pianowithalexander@gmail.com
            </a>
          </p>
          <p className="font-serif text-charcoal text-[20px] mt-2">
            <a href="tel:+18574988487" className="hover:text-bronze transition-colors">
              (857) 498-8487
            </a>
          </p>
        </div>

        {/* XMA cross-link */}
        <p className="mt-16 font-serif italic text-graphite text-[15px] leading-relaxed">
          For full-event bookings (weddings, hotels, corporate, ensembles beyond solo / trio), visit <a href="https://xhojamusicagency.com" className="text-bronze hover:text-bronze-light underline decoration-rule underline-offset-4">Xhoja Music Agency</a>.
        </p>
      </section>
    </div>
  );
}

function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-sans text-[10px] tracking-label uppercase text-bronze mb-3">
        {label}{required && <span className="text-bronze/70 ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-0 border-b border-rule pb-3 text-charcoal font-serif text-[18px] focus:outline-none focus:border-bronze transition-colors"
      />
    </div>
  );
}
