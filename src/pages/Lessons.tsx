import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailjs';
import usePageTitle from '../hooks/usePageTitle';

const SMS = 'sms:+18574988487';
const TEL = 'tel:+18574988487';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const curriculum = [
  { t: 'Technique & tone', d: 'Posture, hand position, and a sound you actually like — the foundation everything else stands on.' },
  { t: 'Reading & theory', d: 'Notation and harmony, so you understand what you play, not just where your fingers land.' },
  { t: 'The music you love', d: 'Classical, jazz, pop, R&B, gospel — we work on the songs you actually want to play.' },
  { t: 'Ear & improvisation', d: 'Training your ear and playing by feel, so you can sit down and just make music.' },
  { t: 'Audition & conservatory prep', d: 'Targeted preparation for school auditions, competitions, and applications.' },
  { t: 'Real, weekly progress', d: 'A standing weekly lesson and a clear plan — the surest path to actually getting good.' },
];

const areas = ['Beverly Hills', 'Brentwood', 'Bel-Air', 'Santa Monica', 'Pacific Palisades', 'Westwood', 'Studio City', 'Encino'];

export default function Lessons() {
  usePageTitle(
    'Private Piano Lessons in Los Angeles',
    "Private, in-home piano lessons across LA's Westside with Berklee-trained pianist Alexander Xhoja. All ages and levels. Start with a $50 intro lesson."
  );

  const [status, setStatus] = useState<Status>('idle');
  const [honeypot, setHoneypot] = useState('');
  const [mountedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return;
    if (Date.now() - mountedAt < 2000) return;
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    const payload = {
      from_name: fd.get('name') as string,
      from_email: (fd.get('email') as string) || 'not provided',
      phone: (fd.get('phone') as string) || 'not provided',
      inquiry_type: 'Private Lessons',
      event_date: 'N/A',
      message: `[LESSONS PAGE — intro lesson request] Student / level: ${fd.get('about') as string}`,
      to_name: 'Alexander Xhoja',
    };
    try {
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.CONTACT_TEMPLATE, payload, EMAILJS_CONFIG.PUBLIC_KEY);
      setStatus('sent');
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="bg-ivory text-charcoal">
      {/* ===================== HERO — one job: book the intro ===================== */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-8 sm:pt-14 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-7">
              Private Piano Lessons · Westside Los Angeles
            </p>
            <h1 className="font-display text-[52px] sm:text-[76px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal mb-8">
              Learn piano,<br />in your home.
            </h1>
            <div className="h-px w-20 bg-bronze mb-8" />
            <p className="font-serif text-[19px] sm:text-[21px] leading-[1.6] text-graphite max-w-xl mb-10">
              One-on-one lessons with a working concert pianist — all ages and levels, taught at your own piano across the Westside. Start with a relaxed <span className="text-charcoal italic">$50 intro lesson</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="#book"
                className="inline-block text-center bg-bronze text-ivory font-sans text-[12px] tracking-label uppercase px-9 py-4 hover:bg-bronze-light transition-colors"
              >
                Book your $50 intro lesson
              </a>
              <a
                href={SMS}
                className="inline-block text-center font-sans text-[12px] tracking-label uppercase px-9 py-4 border border-charcoal/25 text-charcoal hover:border-bronze hover:text-bronze transition-colors"
              >
                Text to book
              </a>
            </div>
            <p className="font-sans text-[12px] tracking-[0.06em] text-graphite/80 mt-6">
              In your home · all ages &amp; levels · a few Westside spots open this season
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-ivory-deep">
              <img src="/alexander-xhoja.jpg" alt="Alexander Xhoja, pianist and teacher in Los Angeles" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROOF — hear him play ===================== */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-7">Hear him play</p>
          <div className="relative aspect-video overflow-hidden bg-black/40 ring-1 ring-bronze/30">
            <iframe
              src="https://www.youtube.com/embed/eypWkhHFrqU"
              title="Alexander Xhoja — Black Orpheus, solo piano"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="font-serif italic text-ivory/60 text-[15px] mt-6">
            "Black Orpheus," solo piano — the musicianship behind every lesson.
          </p>
        </div>
      </section>

      {/* ===================== THE OFFER — simple, low-friction ===================== */}
      <section className="bg-ivory-deep py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-7">Start here</p>
          <h2 className="font-display text-[40px] sm:text-[52px] leading-[1.05] font-light text-charcoal mb-6">
            Your first lesson<br />is just $50.
          </h2>
          <p className="font-serif text-[19px] sm:text-[20px] leading-[1.7] text-graphite mb-10">
            We meet, you play, and we map out a plan — no commitment. After that, weekly lessons are <span className="text-charcoal">$100</span>, or <span className="text-charcoal">$130</span> fully in-home.
          </p>
          <a
            href="#book"
            className="inline-block bg-bronze text-ivory font-sans text-[12px] tracking-label uppercase px-9 py-4 hover:bg-bronze-light transition-colors"
          >
            Book the $50 intro lesson →
          </a>
        </div>
      </section>

      {/* ===================== WHY — brief, verified ===================== */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-10">
            <Why n="01" t="A working performer" d="You learn from an active concert pianist and Berklee College of Music graduate — not a hobbyist." />
            <Why n="02" t="At your piano, your schedule" d="Lessons come to your home anywhere on the Westside. No commute, no studio rental." />
            <Why n="03" t="Every age & every level" d="From a child's first lesson to adult returners and serious audition prep — tailored to the student." />
          </div>
        </div>
      </section>

      {/* ===================== WHAT WE COVER (SEO + reassurance) ===================== */}
      <section className="bg-ivory-deep py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-12 text-center">What we cover</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
            {curriculum.map((item) => (
              <div key={item.t} className="bg-ivory-deep p-8 lg:p-9">
                <h3 className="font-display text-[24px] sm:text-[26px] font-light text-charcoal mb-3 leading-tight">{item.t}</h3>
                <p className="font-serif text-graphite text-[16px] leading-[1.6]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== AREAS ===================== */}
      <section className="bg-ivory py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">Where I teach</p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-3xl mx-auto">
            {areas.map((a) => (
              <li key={a} className="font-display italic text-[20px] sm:text-[23px] text-charcoal">{a}</li>
            ))}
          </ul>
          <p className="font-serif italic text-graphite text-[15px] mt-6">…and nearby — just ask.</p>
        </div>
      </section>

      {/* ===================== BOOK — the conversion target ===================== */}
      <section id="book" className="bg-charcoal text-ivory py-24 md:py-32 scroll-mt-20">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-7">Book your intro lesson</p>
            <h2 className="font-display text-[40px] sm:text-[52px] leading-[1.05] font-light text-ivory mb-6">Let's get started.</h2>
            <p className="font-serif text-ivory/65 text-[18px] leading-[1.7]">
              Send this and I'll text you back — usually within the hour — to set up your $50 intro lesson.
            </p>
          </div>

          {status === 'sent' ? (
            <div className="text-center py-16 border-t border-b border-ivory/15">
              <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-4">Got it — talk soon</p>
              <p className="font-serif italic text-ivory text-[20px] leading-relaxed">
                Thanks! I'll be in touch shortly to set up your intro lesson. In a hurry? Text me at <a href={TEL} className="underline decoration-bronze-light underline-offset-4">(857) 498-8487</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
              />
              <DarkField label="Your name" name="name" required />
              <DarkField label="Phone (so I can text you back)" name="phone" type="tel" required />
              <DarkField label="Email (optional)" name="email" type="email" />
              <div>
                <label className="block font-sans text-[10px] tracking-label uppercase text-bronze-light mb-3">
                  Who's it for &amp; level<span className="text-bronze-light/70 ml-1">*</span>
                </label>
                <textarea
                  name="about"
                  required
                  rows={3}
                  placeholder="e.g. my 8-year-old, total beginner — Brentwood. Or: me, played years ago, want to get back into it."
                  className="w-full bg-transparent border-0 border-b border-ivory/25 pb-3 text-ivory font-serif text-[18px] focus:outline-none focus:border-bronze-light transition-colors resize-none placeholder:text-ivory/35 placeholder:italic"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-bronze text-ivory font-sans text-[12px] tracking-label uppercase px-9 py-4 hover:bg-bronze-light transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Request my $50 intro lesson'}
              </button>
              {status === 'error' && (
                <p className="font-serif italic text-[15px] text-bronze-light text-center">
                  Something glitched — just text me directly at <a href={TEL} className="underline">(857) 498-8487</a>.
                </p>
              )}
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-ivory/15 text-center">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-5">Or reach me directly</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href={SMS} className="font-sans text-[12px] tracking-label uppercase px-8 py-3.5 border border-ivory/25 text-ivory hover:border-bronze-light hover:text-bronze-light transition-colors">Text (857) 498-8487</a>
              <a href={TEL} className="font-sans text-[12px] tracking-label uppercase px-8 py-3.5 border border-ivory/25 text-ivory hover:border-bronze-light hover:text-bronze-light transition-colors">Call</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Why({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <div>
      <p className="font-display text-[22px] text-bronze mb-3">{n}</p>
      <h3 className="font-display text-[24px] sm:text-[26px] font-light text-charcoal mb-3 leading-tight">{t}</h3>
      <p className="font-serif text-graphite text-[16px] leading-[1.6]">{d}</p>
    </div>
  );
}

function DarkField({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-sans text-[10px] tracking-label uppercase text-bronze-light mb-3">
        {label}{required && <span className="text-bronze-light/70 ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-0 border-b border-ivory/25 pb-3 text-ivory font-serif text-[18px] focus:outline-none focus:border-bronze-light transition-colors"
      />
    </div>
  );
}
