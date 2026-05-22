import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle(
    undefined,
    'Alexander Xhoja — Boston-based pianist, composer, and Berklee College of Music graduate. Solo and ensemble performances rooted in jazz, classical, and the modern American songbook.'
  );

  return (
    <div className="bg-dark text-cream-light">
      {/* Hero — full-bleed cinematic video */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
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

        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/55 to-dark/95" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-gold uppercase tracking-[5px] text-[11px] mb-7 opacity-90">
            Pianist · Composer · Bandleader
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-[92px] font-light leading-[1.0] tracking-[1px] mb-6 text-cream-light">
            Alexander<br />Xhoja
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-7" />
          <p className="font-serif italic text-cream-light/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Boston-based. Berklee-trained. Telling stories through the piano since age five.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/videos"
              className="px-9 py-4 bg-gold text-dark font-medium tracking-[2.5px] uppercase text-[11px] hover:bg-cream-light transition-colors duration-300"
            >
              Watch Performances
            </Link>
            <Link
              to="/contact"
              className="px-9 py-4 border border-cream-light/40 text-cream-light font-normal tracking-[2.5px] uppercase text-[11px] hover:bg-cream-light/10 hover:border-cream-light transition-colors duration-300"
            >
              Booking Inquiry
            </Link>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-light/40">
          <span className="text-[10px] uppercase tracking-[3px]">Scroll</span>
          <div className="w-px h-8 bg-cream-light/30" />
        </div>
      </section>

      {/* Bio teaser section */}
      <section className="bg-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[3.5px] text-[11px] mb-6">
            Artist Statement
          </p>
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-[34px] text-cream-light/90 leading-[1.4] tracking-[0.5px] mb-12">
            &ldquo;This world needs more pianists like us.&rdquo;
          </blockquote>
          <p className="text-cream-light/50 text-xs tracking-[3px] uppercase mb-16">
            — Chick Corea, to Alexander, backstage
          </p>

          <p className="font-serif text-base sm:text-lg text-cream-light/70 leading-[1.85] max-w-3xl mx-auto mb-8">
            Alexander Xhoja is a Boston-based pianist, composer, and graduate of Berklee College of Music. His playing weaves jazz tradition with contemporary feel — equal parts emotional depth and improvisational fire. He has performed at the Lee and Alma Berk Recital Hall, the Mingus Festival, and venues throughout the greater Boston area, and is the founder of <a href="https://xhojamusicagency.com" className="text-gold hover:underline">Xhoja Music Agency</a>.
          </p>

          <Link
            to="/bio"
            className="inline-block text-gold text-[11px] tracking-[3.5px] uppercase font-medium border-b border-gold pb-1.5 hover:opacity-80 transition-opacity"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      {/* Featured video */}
      <section className="bg-dark pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[3.5px] text-[11px] mb-4">
              Recent Performance
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-cream-light font-light tracking-[0.5px] mb-6">
              Caravan — Live at Keys Fest 2024
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
          <div className="relative aspect-video bg-black/40 overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
            <iframe
              src="https://www.youtube.com/embed/X3erxpEimGI"
              title="Alexander Xhoja — Caravan, Live at Keys Fest 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="text-center mt-10">
            <Link
              to="/videos"
              className="inline-block text-cream-light/80 text-[11px] tracking-[3.5px] uppercase font-medium border-b border-gold/40 pb-1.5 hover:text-gold hover:border-gold transition-all"
            >
              More performances →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
