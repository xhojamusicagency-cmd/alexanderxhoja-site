import usePageTitle from '../hooks/usePageTitle';

export default function Bio() {
  usePageTitle(
    'Biography',
    'Alexander Xhoja — pianist and composer based between Boston and Los Angeles, a Berklee College of Music graduate and founder of Xhoja Music Agency.'
  );

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero — single big portrait, page-wide */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-8 sm:pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">
              Biography
            </p>
            <h1 className="font-display text-[56px] sm:text-[80px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal mb-10">
              A pianist<br />telling stories.
            </h1>
            <div className="h-px w-20 bg-bronze mb-10" />
            <p className="font-serif italic text-[19px] leading-[1.65] text-graphite max-w-md">
              Pianist, composer, and bandleader — Berklee-trained, based in Los Angeles.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-ivory-deep">
              <img
                src="/alexander-xhoja-recital.jpg"
                alt="Alexander Xhoja performing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main biography — magazine column, drop cap, generous spacing */}
      <section className="py-20 md:py-28 bg-ivory-deep">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <article className="font-serif text-charcoal text-[20px] sm:text-[21px] leading-[1.8]">
            <p className="first-letter:font-display first-letter:text-[88px] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-bronze">
              Alexander Xhoja is a Los Angeles–based pianist and composer, and a graduate of Berklee College of Music, where he studied on a full scholarship. He works across jazz and classical music — as a soloist, with his trio, and as a composer and arranger.
            </p>

            <p className="mt-10">
              He began playing at the age of five, immersed early through his father and his first piano teacher. Rather than start with formal training, he learned the way many of his heroes did — by ear, listening and imitating until the music made sense from the inside. Formal study came later, and with it the technique to carry the instinct.
            </p>

            <p className="mt-8">
              By eleven he was performing around greater Boston alongside seasoned musicians; at fifteen he held a year-long trio residency at <span className="italic">Central Cafe</span>. He went on to study with pianists <span className="italic">Damon Carter</span>, <span className="italic">Max Haymer</span>, <span className="italic">Plamen Karadonev</span>, and <span className="italic">Yoko Miwa</span>.
            </p>

            <p className="mt-8">
              Among his influences, none looms larger than <span className="italic">Chick Corea</span>. The two met backstage after one of Corea's concerts, where Corea offered him a line he has carried ever since:
            </p>
          </article>
        </div>
      </section>

      {/* Pull quote — set apart, hero treatment */}
      <section className="bg-charcoal text-ivory py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <blockquote>
            <p className="font-display italic text-3xl sm:text-5xl lg:text-[58px] leading-[1.15] text-ivory mb-8">
              "This world needs<br />more pianists like us."
            </p>
            <footer className="text-bronze-light text-[11px] tracking-[0.22em] uppercase">
              — Chick Corea
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Continued biography */}
      <section className="py-20 md:py-28 bg-ivory-deep">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <article className="font-serif text-charcoal text-[20px] sm:text-[21px] leading-[1.8] space-y-8">
            <p>
              He opened the Berklee commencement concert with a solo piano introduction at Agganis Arena. In 2023 he received the Massachusetts Association of Jazz Education's <span className="italic">Most Valuable Player</span> award; he has played jazz rooms including <span className="italic">Regattabar</span>, performed at the Mingus Festival and been invited to sit in with the Mingus Big Band, held the piano bench for the Massachusetts All-State Jazz Ensemble, and performed internationally, from Paris to Lagos.
            </p>

            <p>
              Today he performs as a soloist and with his trio across Boston, New York, Los Angeles, and beyond, and writes for the stage and screen. He remains, at heart, an advocate for jazz as a living tradition — music made in the moment.
            </p>

            <p>
              He is also the founder of <a href="https://xhojamusicagency.com" className="text-bronze hover:text-bronze-light underline decoration-rule underline-offset-4">Xhoja Music Agency</a>, a Boston music-booking agency that places live music — solo pianists, jazz ensembles, classical quartets, and DJs — into hotels, weddings, churches, senior communities, and private events across the Greater Boston metro and South Shore.
            </p>

            <p className="text-graphite italic">
              The thread through all of it stays the same: music that means something.
            </p>
          </article>
        </div>
      </section>

      {/* Honors */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-10 text-center">
            Selected Honors &amp; Recognition
          </p>
          <ul className="space-y-5 font-serif text-charcoal/85 text-[18px] leading-[1.6]">
            {[
              'Opened the Berklee commencement concert — solo piano intro, Agganis Arena',
              'Full Scholarship — Berklee College of Music',
              'Most Valuable Player — Massachusetts Association of Jazz Education (2023)',
              'Invited to sit in with the Mingus Big Band — Mingus Festival',
              'Performed at Regattabar — Cambridge',
              'Piano Bench — Massachusetts All-State Jazz Ensemble',
              'One-year trio residency — Central Cafe',
              'International performances — Paris · Lagos · Spain',
            ].map((honor) => (
              <li key={honor} className="grid grid-cols-[auto_1fr] gap-4 items-baseline">
                <span className="text-bronze">·</span>
                <span>{honor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
