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
              Alexander Xhoja is a Los Angeles–based pianist and composer. He studied at Berklee College of Music on a full scholarship and graduated from the program. He plays jazz and classical — as a soloist, with his trio, and as a composer and arranger.
            </p>

            <p className="mt-10">
              He started at five, around his father and his first piano teacher. Before any formal training, he learned by ear — listening and copying until the music made sense from the inside. The study came later.
            </p>

            <p className="mt-8">
              By eleven he was playing around Boston; at fifteen he held a year-long trio residency at <span className="italic">Central Cafe</span>. He studied with the pianists <span className="italic">Damon Carter</span>, <span className="italic">Max Haymer</span>, <span className="italic">Plamen Karadonev</span>, and <span className="italic">Yoko Miwa</span>.
            </p>

            <p className="mt-8">
              His biggest influence is <span className="italic">Chick Corea</span>. They met once, backstage.
            </p>
          </article>
        </div>
      </section>

      {/* Continued biography */}
      <section className="py-20 md:py-28 bg-ivory-deep">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <article className="font-serif text-charcoal text-[20px] sm:text-[21px] leading-[1.8] space-y-8">
            <p>
              In 2023 the Massachusetts Association of Jazz Education named him its <span className="italic">Most Valuable Player</span>.
            </p>

            <p>
              He plays as a soloist and with his trio, and writes for the stage and screen. Mostly he works in jazz — music made in the moment.
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
            Honors
          </p>
          <ul className="space-y-5 font-serif text-charcoal/85 text-[18px] leading-[1.6]">
            {[
              'Full Scholarship — Berklee College of Music',
              'Most Valuable Player — Massachusetts Association of Jazz Education (2023)',
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
