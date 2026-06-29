import usePageTitle from '../hooks/usePageTitle';

export default function Bio() {
  usePageTitle(
    'Biography',
    'Alexander Xhoja — a Los Angeles pianist, composer, and improviser. Berklee College of Music, full scholarship. Classical, jazz, and beyond.'
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
              Pianist, composer, and improviser — Berklee-trained, based in Los Angeles.
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
              Alexander Xhoja fell in love with the piano at five years old. His father, a music teacher, gave him his first lessons — and almost from the first note, it felt less like learning an instrument than finding a part of himself.
            </p>

            <p className="mt-10">
              He grew up chasing the sound of his heroes — <span className="italic">Chick Corea</span>, <span className="italic">Keith Jarrett</span> — learning by ear, by feel, until the music was his own: found in the moment rather than on the page. He began gigging young, already dreaming of the beautiful rooms he hoped one day to play.
            </p>

            <p className="mt-8">
              By middle school he was studying with Berklee piano professors — <span className="italic">Damon Carter</span>, <span className="italic">Max Haymer</span>, <span className="italic">Plamen Karadonev</span>, and <span className="italic">Yoko Miwa</span>. By eleven he was performing around Boston alongside seasoned musicians. As a high-school senior he was named Most Valuable Player by the <span className="italic">Massachusetts Association of Jazz Education</span>, and went on to Berklee College of Music on a full scholarship.
            </p>

            <p className="mt-8">
              He has never lived inside a single style. Classical, jazz, pop — he moves between them the way a storyteller changes voice, listening less for a genre than for the truth in a song.
            </p>

            <p className="mt-8">
              Of all of them, Chick Corea looms largest. The two met once, backstage, where Corea left him with a line he has carried ever since.
            </p>
          </article>
        </div>
      </section>

      {/* The quote — Corea, a moment */}
      <section className="bg-charcoal text-ivory py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <blockquote>
            <p className="font-display italic text-3xl sm:text-5xl lg:text-[56px] leading-[1.15] text-ivory">
              &ldquo;This world needs<br />more pianists like us.&rdquo;
            </p>
            <footer className="mt-10">
              <span className="block h-px w-12 bg-bronze-light mx-auto mb-5" />
              <span className="font-sans text-[11px] tracking-[0.22em] uppercase text-ivory/60">
                Chick Corea, to Alexander
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Continued biography */}
      <section className="py-20 md:py-28 bg-ivory-deep">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <article className="font-serif text-charcoal text-[20px] sm:text-[21px] leading-[1.8] space-y-8">
            <p>
              His mission has held steady since he was five: to create, to inspire, and to tell his story through music. Today, based in Los Angeles, he performs as a soloist and writes his own music — and he teaches, privately, across the Westside, handing down what his father handed to him: not only how to play the notes, but how to mean them.
            </p>

            <p>
              On stage, he asks one thing of himself: to be honest — to play what is true in the moment, and let the room feel it. Music is the language he was raised in, and it means everything to him.
            </p>

            <p className="text-graphite italic">
              The rest is just practice.
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
              'Most Valuable Player — Massachusetts Association of Jazz Education',
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
