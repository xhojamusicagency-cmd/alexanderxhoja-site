import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import YouTubeThumbnail from '../components/YouTubeThumbnail';

// Curated reel of the strongest performances surfaced on the homepage
const REEL = [
  {
    title: 'Beautiful Love',
    context: 'Solo piano',
    youtubeId: 'noISudgBnYA',
  },
  {
    title: 'Million Years Ago',
    context: 'Adele cover · Live duo',
    youtubeId: 'X3erxpEimGI',
  },
  {
    title: 'Mambo Influenciado',
    context: 'Solo arrangement',
    youtubeId: 'K5Tq02Us8iM',
  },
];

export default function Home() {
  usePageTitle(
    undefined,
    'Alexander Xhoja — a Los Angeles pianist, composer, and private piano teacher. Performances and lessons across greater Los Angeles.'
  );

  return (
    <div className="bg-ivory text-charcoal">
      {/* ============================================================ */}
      {/* HERO — cinematic piano video, ivory wash overlay, big display */}
      {/* ============================================================ */}
      <section className="relative h-[88vh] min-h-[640px] max-h-[920px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-piano-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-piano.mp4" type="video/mp4" />
        </video>

        {/* IVORY WASH (not dark like XMA) — keeps the editorial light feel
            while letting the piano video set the mood underneath */}
        <div className="absolute inset-0 bg-ivory/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-transparent to-ivory" />

        {/* Hero content — left-aligned, asymmetric, magazine-feel */}
        <div className="relative z-10 h-full flex items-end pb-16 sm:pb-20 lg:pb-28">
          <div className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto w-full">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">
              Pianist · Composer · Bandleader
            </p>
            <h1 className="font-display text-[76px] sm:text-[112px] lg:text-[164px] leading-[0.9] tracking-[-0.025em] font-light text-charcoal max-w-[16ch]">
              Alexander<br />Xhoja.
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row gap-8 sm:items-end sm:justify-between">
              <p className="font-serif italic text-[20px] sm:text-[22px] text-graphite leading-[1.55] max-w-md">
                A Los Angeles pianist and composer, Berklee-trained on a full scholarship.
              </p>
              <Link
                to="/videos"
                className="font-sans text-[11px] tracking-label uppercase text-charcoal border-b border-bronze pb-1.5 hover:text-bronze transition-colors whitespace-nowrap"
              >
                Watch Performances ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CREDENTIALS RIBBON — single elegant line of accolades         */}
      {/* ============================================================ */}
      <section className="border-y border-rule bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-6 flex flex-col sm:flex-row items-center gap-y-4 sm:gap-x-12 sm:justify-between">
          <Credential label="Full Scholarship" value="Berklee College of Music" />
          <Credential label="MVP" value="Massachusetts Association of Jazz Education" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* PERFORMANCE REEL — 3 videos, gallery treatment                */}
      {/* ============================================================ */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
            <div>
              <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-4">
                Performance Reel
              </p>
              <h2 className="font-display text-[44px] sm:text-[64px] leading-[1.0] tracking-[-0.02em] font-light text-charcoal">
                Listen.
              </h2>
            </div>
            <Link
              to="/videos"
              className="font-sans text-[11px] tracking-label uppercase text-charcoal border-b border-bronze pb-1.5 hover:text-bronze transition-colors mt-6 sm:mt-0"
            >
              All 9 Videos
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {REEL.map((v, i) => (
              <Link key={v.youtubeId} to="/videos" className="group block">
                <div className="relative aspect-video overflow-hidden bg-ivory-deep mb-5">
                  <YouTubeThumbnail
                    youtubeId={v.youtubeId}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
                </div>
                <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-bronze mb-2">
                  {String(i + 1).padStart(2, '0')} / Watch
                </p>
                <h3 className="font-display text-[26px] leading-tight text-charcoal mb-1.5">
                  {v.title}
                </h3>
                <p className="font-serif italic text-graphite text-[14px]">
                  {v.context}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERLUDE — quiet dark band                                   */}
      {/* ============================================================ */}
      <section className="bg-charcoal text-ivory py-28 md:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote>
            <p className="font-display italic text-3xl sm:text-5xl lg:text-[68px] leading-[1.12] text-ivory">
              “This world needs<br />more pianists like us.”
            </p>
            <footer className="mt-12">
              <span className="block h-px w-12 bg-bronze-light mx-auto mb-6" />
              <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-ivory/60">
                Chick Corea, to Alexander
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BIO TEASER — single confident paragraph, portrait alongside   */}
      {/* ============================================================ */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-ivory-deep">
                <img
                  src="/alexander-xhoja-recital.jpg"
                  alt="Alexander Xhoja at the piano"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">
                About
              </p>
              <h2 className="font-display text-[44px] sm:text-[64px] leading-[1.0] tracking-[-0.02em] font-light text-charcoal mb-10">
                A pianist since<br />the age of five.
              </h2>
              <div className="h-px w-16 bg-bronze mb-10" />
              <p className="font-serif text-[19px] sm:text-[21px] text-charcoal/85 leading-[1.75] mb-6">
                Alexander Xhoja fell in love with the piano at five — his father, a music teacher, gave him his first lessons. He learned by ear, went on to Berklee College of Music on a full scholarship, and today performs and teaches across Los Angeles.
              </p>
              <p className="font-serif italic text-[18px] text-graphite leading-[1.7] mb-10 max-w-md">
                His playing moves across classical, jazz, and pop.
              </p>
              <Link
                to="/bio"
                className="font-sans text-[11px] tracking-label uppercase text-charcoal border-b border-bronze pb-1.5 hover:text-bronze transition-colors"
              >
                Read the full story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIVE — one quiet line                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-charcoal py-32 md:py-44">
        <img
          src="/alexander-xhoja-concert.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal/85" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-10">
            Live
          </p>
          <p className="font-display italic text-[28px] sm:text-[40px] text-ivory leading-snug max-w-2xl mx-auto">
            Concert halls, clubs, and private rooms.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BOOKING CTA — quiet but confident                             */}
      {/* ============================================================ */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">
            Bookings
          </p>
          <h2 className="font-display text-3xl sm:text-5xl text-charcoal font-light leading-tight mb-8">
            For recitals, recordings,<br />and collaborations.
          </h2>
          <Link
            to="/contact"
            className="inline-block font-sans text-[11px] tracking-label uppercase text-charcoal border-b border-bronze pb-1.5 hover:text-bronze transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}

function Credential({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1 text-center sm:text-left">
      <span className="font-sans text-[10px] tracking-label uppercase text-bronze whitespace-nowrap">
        {label}
      </span>
      <span className="font-display italic text-[17px] sm:text-[19px] text-charcoal">
        {value}
      </span>
    </div>
  );
}
