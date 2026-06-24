import { useState, type FormEvent } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import { submitToWeb3Forms } from '../utils/web3forms';

const SMS = 'sms:+18574988487';
const TEL = 'tel:+18574988487';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const transformations = [
  {
    who: 'For your child',
    d: 'The kid who plays at the party — not the one who quit after a year. Lessons built around music they actually love, so practice stops being a fight.',
  },
  {
    who: 'For you',
    d: 'Finally sit down and play the piece you have always wanted to. Adult beginners and returners welcome — no judgment, real progress, on your schedule.',
  },
  {
    who: 'For the serious student',
    d: 'Recital, competition, audition, and conservatory preparation — with a teacher who has walked through the doors you are aiming at.',
  },
];

const credentials = [
  { t: 'Bachelor of Music, Piano Performance', d: 'Berklee College of Music — full scholarship' },
  { t: '"Most Valuable Player," 2023', d: 'Massachusetts Association of Jazz Education' },
];

const HEAR = [
  { title: 'Black Orpheus', context: 'Solo piano, live', youtubeId: 'eypWkhHFrqU' },
  { title: 'Million Years Ago', context: 'Adele cover · live duo', youtubeId: 'X3erxpEimGI' },
  { title: 'Caravan', context: 'Live at Keys Fest', youtubeId: '7flbo2_Gd64' },
  { title: 'Mambo Influenciado', context: 'Solo arrangement', youtubeId: 'K5Tq02Us8iM' },
];

const areas = ['Beverly Hills', 'Brentwood', 'Bel-Air', 'Santa Monica', 'Pacific Palisades', 'Westwood', 'Studio City', 'Encino'];

export default function Lessons() {
  usePageTitle(
    'Private Piano Lessons in Los Angeles',
    'Study privately with Alexander Xhoja — a working concert pianist and Berklee full-scholarship graduate offering in-home piano lessons across LA’s Westside. A small studio, a few seats each season.'
  );

  const [status, setStatus] = useState<Status>('idle');
  const [sentVia, setSentVia] = useState<'form' | 'mailto'>('form');
  const [honeypot, setHoneypot] = useState('');
  const [mountedAt] = useState(() => Date.now());
  const [activeVideo, setActiveVideo] = useState(HEAR[0]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return;
    if (Date.now() - mountedAt < 2000) return;
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    const name = (fd.get('name') as string) || '';
    const phone = (fd.get('phone') as string) || '';
    const email = (fd.get('email') as string) || '';
    const about = (fd.get('about') as string) || '';

    const subject = `Piano lesson inquiry — ${name}`;
    const body =
      `Hi Alexander,\n\n` +
      `I'd like to set up a welcome lesson.\n\n` +
      `Name:  ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || 'not provided'}\n\n` +
      `Who it's for & level:\n${about}\n\n` +
      `— sent from pianowithalexander.com`;

    // Primary: deliver straight to the inbox (no "hit send" step for the visitor).
    const fields: Record<string, string> = { subject, from_name: name, phone, message: body };
    if (email) fields.email = email;
    const delivered = await submitToWeb3Forms(fields);
    if (delivered) {
      setSentVia('form');
      setStatus('sent');
      return;
    }

    // Fallback: open a pre-filled draft so a lead is never silently lost.
    setSentVia('mailto');
    setStatus('sent');
    window.location.href =
      `mailto:pianowithalexander@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="bg-ivory text-charcoal">
      {/* ===================== HERO ===================== */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-8 sm:pt-14 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-7">
              Private Piano Studio · Westside Los Angeles
            </p>
            <h1 className="font-display text-[56px] sm:text-[82px] leading-[0.93] tracking-[-0.02em] font-light text-charcoal mb-8">
              Piano lessons<br />with Alexander.
            </h1>
            <div className="h-px w-20 bg-bronze mb-8" />
            <p className="font-serif text-[19px] sm:text-[21px] leading-[1.6] text-graphite max-w-xl mb-10">
              A working concert pianist — Berklee-trained on a full scholarship. Now <span className="text-charcoal">Alexander Xhoja</span> brings it to your piano, one-on-one — real musicianship, all ages and levels, across the Westside. A few new students each season.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a href="#book" className="inline-block text-center bg-bronze text-ivory font-sans text-[12px] tracking-label uppercase px-9 py-4 hover:bg-bronze-light transition-colors">
                Request your welcome lesson
              </a>
              <a href="#listen" className="inline-block text-center font-sans text-[12px] tracking-label uppercase px-9 py-4 border border-charcoal/25 text-charcoal hover:border-bronze hover:text-bronze transition-colors">
                Hear him play
              </a>
            </div>
            <p className="font-sans text-[12px] tracking-[0.06em] text-graphite/80 mt-6">
              All ages &amp; levels · in your home across the Westside
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-ivory-deep">
              <img src="/alexander-xhoja-concert.jpg" alt="Alexander Xhoja performing at a Steinway grand under concert lighting" className="w-full h-full object-cover object-[32%_center]" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROOF — video ===================== */}
      <section id="listen" className="bg-charcoal py-16 md:py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-7 text-center">Hear him play</p>
          <div className="relative aspect-video overflow-hidden bg-black/40 ring-1 ring-bronze/30">
            <iframe
              key={activeVideo.youtubeId}
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
              title={`Alexander Xhoja — ${activeVideo.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="font-serif italic text-ivory/60 text-[15px] mt-5 text-center">
            {activeVideo.title} — {activeVideo.context}
          </p>
          <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-2xl mx-auto">
            {HEAR.map((v) => (
              <button
                key={v.youtubeId}
                onClick={() => setActiveVideo(v)}
                aria-label={`Play ${v.title}`}
                className={`group relative aspect-video overflow-hidden bg-black/40 transition ${
                  activeVideo.youtubeId === v.youtubeId ? 'ring-2 ring-bronze-light' : 'ring-1 ring-ivory/15 hover:ring-bronze-light/60'
                }`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
                  alt={v.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity ${activeVideo.youtubeId === v.youtubeId ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE STORY — why him ===================== */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">Why study with Alexander</p>
          <p className="font-serif text-charcoal text-[20px] sm:text-[21px] leading-[1.8]">
            Alexander started at five and learned the way his heroes did — by ear, by feel, chasing the sound until it was his own. By eleven he was performing across Boston alongside seasoned musicians; at Berklee College of Music he studied on a full scholarship. He has performed from Paris to Los Angeles, and has spent years teaching students from their very first notes to conservatory auditions.
          </p>
          <p className="font-serif text-charcoal text-[20px] sm:text-[21px] leading-[1.8] mt-7">
            He does not treat piano as a chore to get through. He teaches you to <span className="italic">make music</span> — so you actually want to sit down and play.
          </p>
        </div>
      </section>

      {/* ===================== CREDENTIALS ===================== */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-12 text-center">Credentials</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-9">
            {credentials.map((c) => (
              <li key={c.t} className="border-l-2 border-bronze/30 pl-5">
                <p className="font-display text-[21px] text-charcoal leading-snug">{c.t}</p>
                <p className="font-serif italic text-graphite text-[15px] mt-1.5">{c.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== TRANSFORMATION ===================== */}
      <section className="bg-ivory-deep py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-12 text-center">What changes</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            {transformations.map((t) => (
              <div key={t.who}>
                <h3 className="font-display text-[26px] sm:text-[28px] font-light text-charcoal mb-4 leading-tight">{t.who}</h3>
                <div className="h-px w-12 bg-bronze mb-5" />
                <p className="font-serif text-graphite text-[17px] leading-[1.65]">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE OFFER ===================== */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-7">Begin</p>
          <h2 className="font-display text-[40px] sm:text-[52px] leading-[1.05] font-light text-charcoal mb-6">
            Start with a<br />$60 welcome lesson.
          </h2>
          <p className="font-serif text-[19px] sm:text-[20px] leading-[1.7] text-graphite mb-10">
            We play, we talk, and I build your plan — no commitment. Weekly lessons follow at <span className="text-charcoal">$100</span>, or <span className="text-charcoal">$130</span> fully in-home. A standing weekly seat is how real progress happens — and there are only so many.
          </p>
          <a href="#book" className="inline-block bg-bronze text-ivory font-sans text-[12px] tracking-label uppercase px-9 py-4 hover:bg-bronze-light transition-colors">
            Request your welcome lesson →
          </a>
        </div>
      </section>

      {/* ===================== AREAS ===================== */}
      <section className="bg-ivory-deep py-16 md:py-20">
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

      {/* ===================== BOOK ===================== */}
      <section id="book" className="bg-charcoal text-ivory py-24 md:py-32 scroll-mt-20">
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-7">Request your seat</p>
            <h2 className="font-display text-[40px] sm:text-[52px] leading-[1.05] font-light text-ivory mb-6">Let's begin.</h2>
            <p className="font-serif text-ivory/65 text-[18px] leading-[1.7]">
              Send this and I'll text you back — usually within the hour — to set up your welcome lesson.
            </p>
          </div>

          {status === 'sent' ? (
            <div className="text-center py-16 border-t border-b border-ivory/15">
              {sentVia === 'form' ? (
                <>
                  <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-4">Got it — talk soon</p>
                  <p className="font-serif italic text-ivory text-[20px] leading-relaxed">
                    Thank you — I have your request and I'll text you back, usually within the hour, to set up your welcome lesson. In a hurry? Text me at <a href={SMS} className="underline decoration-bronze-light underline-offset-4">(857) 498-8487</a>.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-4">One last tap — hit send</p>
                  <p className="font-serif italic text-ivory text-[20px] leading-relaxed">
                    Your welcome-lesson note just opened in your email — give it a quick send and I'll text you back, usually within the hour. Rather skip it? Text me directly at <a href={SMS} className="underline decoration-bronze-light underline-offset-4">(857) 498-8487</a>.
                  </p>
                </>
              )}
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
                {status === 'sending' ? 'Sending…' : 'Request my welcome lesson'}
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
