import usePageTitle from '../hooks/usePageTitle';

export default function Bio() {
  usePageTitle(
    'Biography',
    'The story of Alexander Xhoja — Boston-based pianist, composer, Berklee College of Music graduate, and founder of Xhoja Music Agency.'
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
              Berklee-trained. Boston-grown. Founded a music agency, kept the bench warm at jazz festivals, and still has Chick Corea's voice in his head.
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
              Alexander Xhoja is a pianist and composer based between Boston and Los Angeles, and a graduate of Berklee College of Music, where he studied on a full-ride scholarship. With dedication and emotional depth, he enriches the lives of his listeners by weaving feeling into every line he plays.
            </p>

            <p className="mt-10">
              His musical journey began at age five. Through his piano teacher and music-enthusiast father, Alexander was immersed in the music culture early. Rather than start with formal training, he developed his musicianship the old way — by listening, imitating his heroes, and learning what worked by ear. As the years went on, he transitioned from novice to a formidable pianist with mature improvisational instincts and a real talent for composing and arranging.
            </p>

            <p className="mt-8">
              At age 11, Alexander was already performing across the greater Boston area alongside seasoned musicians. At 15, he secured a one-year residence with his trio at <span className="italic">Central Cafe</span>. Along the way he studied with respected pianists including <span className="italic">Damon Carter</span>, <span className="italic">Max Haymer</span>, <span className="italic">Plamen Karadonev</span>, and <span className="italic">Yoko Miwa</span>.
            </p>

            <p className="mt-8">
              His biggest inspiration was <span className="italic">Chick Corea</span>. Through each of Corea's concerts, his admiration grew — and his fondest memory of his hero came backstage, where Corea told him a line that has stayed with him ever since:
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
              In 2023, Alexander received the <span className="italic">Most Valuable Player</span> award from the Massachusetts Association of Jazz Education. He has performed at the Mingus Festival, where he was later invited to sit in with the Mingus Big Band; held the piano bench for the Massachusetts All-State Jazz Ensemble; and won numerous state and regional awards for his musicianship.
            </p>

            <p>
              Today Alexander remains a working, gigging musician — performing solo and with his trio at venues across Boston, New York, Los Angeles, and beyond. His strong creative and composing skills make him a passionate advocate for jazz as a living, breathing genre. As an artist, he strives for emotional integrity in every set, and uses his music to tell stories worth listening to.
            </p>

            <p>
              He is also the founder of <a href="https://xhojamusicagency.com" className="text-bronze hover:text-bronze-light underline decoration-rule underline-offset-4">Xhoja Music Agency</a>, a Boston music-booking agency that places live music — solo pianists, jazz ensembles, classical quartets, and DJs — into hotels, weddings, churches, senior communities, and private events throughout the Greater Boston metro and South Shore.
            </p>

            <p className="text-graphite italic">
              The mission, in both performance and agency work, is the same: to enrich lives through music — meaningful moments with world-class performances.
            </p>
          </article>
        </div>
      </section>

      {/* Honors */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-10 text-center">
            Selected Honors & Recognition
          </p>
          <ul className="space-y-5 font-serif text-charcoal/85 text-[18px] leading-[1.6]">
            {[
              'Full-Ride Scholarship — Berklee College of Music',
              'Most Valuable Player — Massachusetts Association of Jazz Education (2023)',
              'Invited to sit in with the Mingus Big Band — Mingus Festival',
              'Piano Bench — Massachusetts All-State Jazz Ensemble',
              'One-year residency with trio — Central Cafe',
              'Multiple state and regional awards for musicianship',
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
