import usePageTitle from '../hooks/usePageTitle';

export default function Bio() {
  usePageTitle(
    'Biography',
    'The story of Alexander Xhoja — Boston-based pianist, composer, Berklee College of Music graduate, and founder of Xhoja Music Agency.'
  );

  return (
    <div className="bg-dark text-cream-light">
      {/* Hero portrait + opener */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Portrait */}
          <div className="relative h-[60vh] lg:h-auto overflow-hidden">
            <img
              src="/alexander-xhoja-recital.jpg"
              alt="Alexander Xhoja performing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/40 lg:to-dark/20" />
          </div>

          {/* Text side */}
          <div className="flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0 bg-dark">
            <div className="max-w-xl">
              <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5">
                Biography
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-[0.5px] text-cream-light mb-8">
                A pianist telling stories.
              </h1>
              <div className="w-12 h-px bg-gold mb-8" />
              <p className="font-serif italic text-cream-light/70 text-lg leading-[1.7]">
                Boston-based. Berklee-trained. Founded a music agency, kept the bench warm at jazz festivals, and still has Chick Corea's voice in his head.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main biography */}
      <section className="bg-dark py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Body paragraphs */}
          <article className="font-serif text-cream-light/85 text-[17px] sm:text-[18px] leading-[1.85] space-y-7">
            <p>
              Alexander Xhoja is a Boston-based pianist, composer, and graduate of Berklee College of Music, where he studied on a full-ride scholarship. With dedication and emotional depth, he enriches the lives of his listeners by weaving feeling into every line he plays.
            </p>

            <p>
              His musical journey began at age five. Through his piano teacher and music-enthusiast father, Alexander was immersed in the music culture early. Rather than start with formal training, he developed his musicianship the old way — by listening, imitating his heroes, and learning what worked by ear. As the years went on, he transitioned from novice to a formidable pianist with mature improvisational instincts and a real talent for composing and arranging.
            </p>

            <p>
              At age 11, Alexander was already performing across the greater Boston area alongside seasoned musicians. At 15, he secured a one-year residence with his trio at Central Cafe. Along the way he studied with respected pianists including <span className="text-cream-light">Damon Carter</span>, <span className="text-cream-light">Max Haymer</span>, <span className="text-cream-light">Plamen Karadonev</span>, and <span className="text-cream-light">Yoko Miwa</span>.
            </p>

            <p>
              His biggest inspiration was <span className="text-cream-light">Chick Corea</span>. Through each of Corea's concerts, his admiration grew — and his fondest memory of his hero came backstage, where Corea told him a line that has stayed with him ever since:
            </p>
          </article>

          {/* Pull quote */}
          <blockquote className="my-16 text-center">
            <p className="font-serif italic text-3xl sm:text-4xl md:text-[42px] text-gold/95 leading-[1.4] tracking-[0.5px] mb-5">
              &ldquo;This world needs more pianists like us.&rdquo;
            </p>
            <p className="text-cream-light/50 text-[11px] tracking-[3px] uppercase">
              — Chick Corea
            </p>
          </blockquote>

          <article className="font-serif text-cream-light/85 text-[17px] sm:text-[18px] leading-[1.85] space-y-7">
            <p>
              In 2023, Alexander received the <span className="text-cream-light">Most Valuable Player</span> award from the Massachusetts Association of Jazz Education. He has performed at the Mingus Festival, where he was later invited to sit in with the Mingus Big Band; held the piano bench for the Massachusetts All-State Jazz Ensemble; and won numerous state and regional awards for his musicianship.
            </p>

            <p>
              Today Alexander remains a working, gigging musician — performing solo and with his trio at venues across Boston, New York, and beyond. His strong creative and composing skills make him a passionate advocate for jazz as a living, breathing genre. As an artist, he strives for emotional integrity in every set, and uses his music to tell stories worth listening to.
            </p>

            <p>
              He is also the founder of <a href="https://xhojamusicagency.com" className="text-gold hover:underline">Xhoja Music Agency</a>, a Boston music-booking agency that places live music — solo pianists, jazz ensembles, classical quartets, and DJs — into hotels, weddings, churches, senior communities, and private events throughout the Greater Boston metro and South Shore.
            </p>

            <p className="text-cream-light/70 italic">
              The mission, in both performance and agency work, is the same: to enrich lives through music — meaningful moments with world-class performances.
            </p>
          </article>

          {/* Awards / Accolades */}
          <div className="mt-20 pt-12 border-t border-gold/15">
            <p className="text-gold uppercase tracking-[3.5px] text-[11px] mb-8 text-center">
              Selected Honors & Recognition
            </p>
            <ul className="space-y-4 text-cream-light/70 text-[15px] leading-[1.7]">
              <li><span className="text-gold mr-3">·</span>Full-Ride Scholarship — Berklee College of Music</li>
              <li><span className="text-gold mr-3">·</span>Most Valuable Player — Massachusetts Association of Jazz Education (2023)</li>
              <li><span className="text-gold mr-3">·</span>Invited to sit in with the Mingus Big Band — Mingus Festival</li>
              <li><span className="text-gold mr-3">·</span>Piano Bench — Massachusetts All-State Jazz Ensemble</li>
              <li><span className="text-gold mr-3">·</span>One-year residency with trio — Central Cafe (age 15)</li>
              <li><span className="text-gold mr-3">·</span>Multiple state and regional awards for musicianship</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
