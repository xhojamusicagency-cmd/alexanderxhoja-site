import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';
import usePageTitle from '../hooks/usePageTitle';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  usePageTitle('Contact & Booking', 'Get in touch with Alexander Xhoja — solo, trio, and ensemble bookings; recording sessions; collaborations; and press inquiries.');

  const [status, setStatus] = useState<Status>('idle');
  const [honeypot, setHoneypot] = useState('');
  const [mountedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return;
    if (Date.now() - mountedAt < 3000) return;
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
      to_email: 'alexanderxhoja@gmail.com',
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE,
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
              Message sent
            </p>
            <p className="font-serif italic text-charcoal text-[20px] leading-relaxed">
              Thank you for reaching out. Alexander will respond within 2 business days.
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
                Something went wrong. Email me directly: <a href="mailto:alexanderxhoja@gmail.com" className="text-bronze hover:text-bronze-light underline">alexanderxhoja@gmail.com</a>
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
            <a href="mailto:alexanderxhoja@gmail.com" className="hover:text-bronze transition-colors">
              alexanderxhoja@gmail.com
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
