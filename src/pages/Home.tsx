import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

// Curated reel of the strongest performances surfaced on the homepage
const REEL = [
  {
    title: 'Caravan',
    context: 'Keys Fest 2024 · Berklee David Friend Recital Hall',
    youtubeId: '7flbo2_Gd64',
  },
  {
    title: 'Black Orpheus',
    context: 'Solo · Live at Berk Recital Hall',
    youtubeId: 'eypWkhHFrqU',
  },
  {
    title: 'Giant Steps',
    context: 'Studio recording',
    youtubeId: 'my3__r9Ur6E',
  },
];

const PRESTIGE_VENUES = [
  'Regattabar · Cambridge',
  'Lee and Alma Berk Recital Hall',
  'David Friend Recital Hall',
  'MIT · Cambridge',
  'The New School · NYC',
  'Berklee Colvin Hall',
  'Allen Center for the Arts',
  'Hunneman Hall · Boston',
];

export default function Home() {
  usePageTitle(
    undefined,
    'Alexander Xhoja — a Los Angeles pianist, composer, and Berklee College of Music full-scholarship graduate. Concert performances and private piano lessons across the Westside.'
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
                A Los Angeles pianist telling stories through the keys — jazz, classical, and the rooms in between.
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
          <Credential label="Berklee" value="Full-Ride Scholar" />
          <Credential label="2023" value="M.A.J.E. M.V.P." />
          <Credential label="Featured" value="Mingus Big Band" />
          <Credential label="Piano Bench" value="MA All-State Jazz" />
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
                  <img
                    src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
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
      {/* THE QUOTE — Chick Corea moment, hero treatment                */}
      {/* ============================================================ */}
      <section className="bg-charcoal text-ivory py-28 md:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-12">
            Said to Alexander, backstage
          </p>
          <blockquote>
            <p className="font-display italic text-3xl sm:text-5xl lg:text-[72px] leading-[1.1] text-ivory mb-12">
              "This world needs<br />more pianists<br />like us."
            </p>
            <footer>
              <span className="block h-px w-12 bg-bronze-light mx-auto mb-5" />
              <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-ivory/65">
                — Chick Corea
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
                A pianist<br />since five.
              </h2>
              <div className="h-px w-16 bg-bronze mb-10" />
              <p className="font-serif text-[19px] sm:text-[21px] text-charcoal/85 leading-[1.75] mb-6">
                Alexander Xhoja began playing at age five. At eleven he was performing across the greater Boston area alongside seasoned musicians. By fifteen he held a one-year trio residency at <em>Central Cafe</em>. Today he is a Berklee College of Music full-scholarship graduate, a Massachusetts Association of Jazz Education Most Valuable Player, and the founder of <a href="https://xhojamusicagency.com" className="text-bronze hover:text-bronze-light underline decoration-rule underline-offset-4">Xhoja Music Agency</a>.
              </p>
              <p className="font-serif italic text-[18px] text-graphite leading-[1.7] mb-10 max-w-md">
                His biggest influence was Chick Corea. The mission stays the same: emotional integrity in every set.
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
      {/* PRESTIGE VENUES — single line of credibility-builders         */}
      {/* ============================================================ */}
      <section className="bg-ivory-deep py-20 md:py-28 border-y border-rule">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-10">
            Selected Venues
          </p>
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-5 max-w-4xl mx-auto">
            {PRESTIGE_VENUES.map((venue) => (
              <li
                key={venue}
                className="font-display italic text-[20px] sm:text-[24px] text-charcoal leading-tight"
              >
                {venue}
              </li>
            ))}
          </ul>
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
      <span className="font-display italic text-[17px] sm:text-[19px] text-charcoal whitespace-nowrap">
        {value}
      </span>
    </div>
  );
}
