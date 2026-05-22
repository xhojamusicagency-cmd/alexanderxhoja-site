import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle(
    undefined,
    'Alexander Xhoja — Boston-based pianist, composer, and Berklee College of Music graduate. Solo and ensemble performances rooted in jazz, classical, and the modern American songbook.'
  );

  return (
    <div className="bg-ivory text-charcoal">
      {/* HERO — asymmetric editorial split, NOT a centered overlay hero like XMA */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-8 sm:pt-12 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT — typography column */}
          <div className="lg:col-span-7 lg:order-1 order-2">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">
              Pianist · Composer · Bandleader
            </p>
            <h1 className="font-display text-[64px] sm:text-[88px] lg:text-[124px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal mb-10">
              Alexander<br />Xhoja.
            </h1>
            <div className="h-px w-20 bg-bronze mb-10" />
            <p className="font-serif italic text-[19px] sm:text-[22px] leading-[1.55] text-graphite max-w-md mb-12">
              Boston-based pianist telling stories through the keys — jazz, classical, and the rooms in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <Link
                to="/videos"
                className="font-sans text-[11px] tracking-label uppercase text-charcoal border-b border-bronze pb-1.5 hover:text-bronze transition-colors"
              >
                Watch Performances
              </Link>
              <Link
                to="/contact"
                className="font-sans text-[11px] tracking-label uppercase text-graphite border-b border-rule pb-1.5 hover:text-bronze hover:border-bronze transition-colors"
              >
                Booking Inquiry
              </Link>
            </div>
          </div>

          {/* RIGHT — portrait, full-bleed within column, no shadow */}
          <div className="lg:col-span-5 lg:order-2 order-1">
            <div className="aspect-[3/4] overflow-hidden bg-ivory-deep">
              <img
                src="/alexander-xhoja-recital.jpg"
                alt="Alexander Xhoja at the piano"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-bronze mt-4">
              Photographed at recital
            </p>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — Chick Corea, the most powerful piece of social proof on this site */}
      <section className="bg-ivory-deep py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">
            From the source
          </p>
          <blockquote>
            <p className="font-serif italic text-3xl sm:text-5xl lg:text-[58px] leading-[1.15] text-charcoal mb-10">
              "This world needs<br />more pianists like us."
            </p>
            <footer className="text-graphite text-[12px] tracking-[0.2em] uppercase">
              — Chick Corea, backstage to Alexander
            </footer>
          </blockquote>
        </div>
      </section>

      {/* BIO TEASE — editorial paragraph, no card, no border */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8 text-center">
            About
          </p>
          <article className="font-serif text-charcoal/85 text-[19px] sm:text-[21px] leading-[1.75] space-y-7">
            <p>
              Alexander Xhoja is a Boston-based pianist, composer, and graduate of Berklee College of Music, where he studied on a full-ride scholarship. His playing weaves jazz tradition with contemporary feel — equal parts emotional depth and improvisational fire.
            </p>
            <p>
              He has performed at the Lee and Alma Berk Recital Hall, the Mingus Festival, and venues throughout the greater Boston area. In 2023 he received the <em>Most Valuable Player</em> award from the Massachusetts Association of Jazz Education. He is also the founder of <a href="https://xhojamusicagency.com" className="text-bronze hover:text-bronze-light underline decoration-rule underline-offset-4 transition-colors">Xhoja Music Agency</a>.
            </p>
          </article>
          <div className="text-center mt-12">
            <Link
              to="/bio"
              className="font-sans text-[11px] tracking-label uppercase text-bronze border-b border-bronze pb-1.5 hover:text-bronze-light hover:border-bronze-light transition-colors"
            >
              Read the full story
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO — full-bleed, presented like a film still */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-4">
              Featured Performance
            </p>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-light leading-tight">
              Caravan
            </h2>
            <p className="font-serif italic text-ivory/60 text-sm mt-3">
              Live at Keys Fest 2024 · Berklee David Friend Recital Hall
            </p>
          </div>
          <div className="relative aspect-video bg-black/40 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/7flbo2_Gd64"
              title="Alexander Xhoja — Caravan, Live at Keys Fest 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              to="/videos"
              className="font-sans text-[11px] tracking-label uppercase text-ivory/85 border-b border-bronze pb-1.5 hover:text-bronze transition-colors"
            >
              All performances
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
