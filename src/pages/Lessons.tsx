import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function Lessons() {
  usePageTitle(
    'Private Piano Lessons in Los Angeles',
    'Berklee-trained pianist Alexander Xhoja offers private piano lessons in Los Angeles — beginners to conservatory audition prep, ages 5 to adult, in-home, in-studio, and online.'
  );

  const honors = [
    "Full-scholarship graduate — Berklee College of Music, B.M. Piano Performance (3.9 GPA, Dean's List)",
    'Seven-plus years teaching privately — ages five to adult, every level',
    '"Most Valuable Player," Massachusetts Association of Jazz Education',
    'Performed internationally — Paris, Lagos, and Spain',
  ];

  const curriculum = [
    { t: 'Technique & tone', d: 'Posture, hand position, and a sound you actually like — the physical foundation that makes everything else possible.' },
    { t: 'Reading & theory', d: 'Notation, harmony, and how music is built, so you understand what you play, not just where your fingers land.' },
    { t: 'Ear & improvisation', d: 'Training your ear, playing by feel, and beginning to find your own voice at the instrument.' },
    { t: 'Repertoire', d: 'Classical, jazz, pop, R&B, and gospel — we work on the music you actually want to play.' },
    { t: 'Audition & conservatory prep', d: 'Targeted preparation for school auditions, competitions, and conservatory applications.' },
    { t: 'Composition & arranging', d: 'For students who want to write, arrange, and shape music of their own.' },
  ];

  const tuition = [
    { name: 'Trial lesson', detail: 'First lesson, 60 minutes', price: '$50' },
    { name: 'Single lesson', detail: '60 minutes', price: '$100' },
    { name: 'In-home & advanced', detail: '60 minutes — at your home, or advanced study', price: '$130' },
    { name: 'Audition & conservatory prep', detail: '60 minutes, focused preparation', price: '$150' },
    { name: 'Four-lesson package', detail: 'Prepaid, 60 minutes each', price: '$360' },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-8 sm:pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">
              Private Study · Los Angeles
            </p>
            <h1 className="font-display text-[56px] sm:text-[80px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal mb-10">
              Private piano<br />lessons.
            </h1>
            <div className="h-px w-20 bg-bronze mb-10" />
            <p className="font-serif italic text-[19px] sm:text-[21px] leading-[1.65] text-graphite max-w-lg">
              Berklee-trained instruction for Los Angeles — beginners to conservatory hopefuls, ages five to adult. Every lesson is built around the player in the room.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-ivory-deep">
              <img
                src="/alexander-xhoja.jpg"
                alt="Alexander Xhoja, pianist and teacher"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why study here */}
      <section className="py-20 md:py-28 bg-ivory-deep">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">
            Why study here
          </p>
          <p className="font-serif text-charcoal text-[20px] sm:text-[21px] leading-[1.8]">
            I'm Alexander Xhoja — a full-scholarship graduate of Berklee College of Music and a working pianist with more than seven years of teaching behind me. I've guided students from their very first notes to conservatory auditions, across classical, jazz, pop, R&B, and gospel. Lessons are rigorous where it counts and patient everywhere else — and always shaped to the person sitting at the keys.
          </p>
          <ul className="mt-10 space-y-5 font-serif text-charcoal/85 text-[18px] leading-[1.6]">
            {honors.map((honor) => (
              <li key={honor} className="grid grid-cols-[auto_1fr] gap-4 items-baseline">
                <span className="text-bronze">·</span>
                <span>{honor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hear him play */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-8">
            Hear him play
          </p>
          <div className="relative aspect-video overflow-hidden bg-black/40 ring-1 ring-bronze/30">
            <iframe
              src="https://www.youtube.com/embed/eypWkhHFrqU"
              title="Alexander Xhoja — Black Orpheus, solo piano"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="font-serif italic text-ivory/60 text-[15px] mt-6">
            "Black Orpheus," solo piano — the musicianship behind every lesson.
          </p>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-12 text-center">
            What we cover
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
            {curriculum.map((item) => (
              <div key={item.t} className="bg-ivory p-8 lg:p-10">
                <h3 className="font-display text-[26px] sm:text-[28px] font-light text-charcoal mb-3 leading-tight">
                  {item.t}
                </h3>
                <p className="font-serif text-graphite text-[17px] leading-[1.6]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students & formats */}
      <section className="py-20 md:py-28 bg-ivory-deep">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">
            Students & formats
          </p>
          <p className="font-serif text-charcoal text-[20px] sm:text-[21px] leading-[1.8]">
            I teach curious beginners, returning adults who always meant to learn, advancing students with real goals, and conservatory hopefuls preparing to audition. Lessons are available <span className="italic">in-home</span> across the Westside, <span className="italic">in-studio</span>, or <span className="italic">online</span> — whichever fits your week.
          </p>
        </div>
      </section>

      {/* Tuition */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-12 text-center">
            Tuition
          </p>
          <ul className="divide-y divide-rule border-t border-b border-rule">
            {tuition.map((row) => (
              <li key={row.name} className="py-6 grid grid-cols-[1fr_auto] gap-6 items-baseline">
                <div>
                  <p className="font-serif text-charcoal text-[20px] leading-tight">{row.name}</p>
                  <p className="font-serif italic text-graphite text-[15px] mt-1">{row.detail}</p>
                </div>
                <p className="font-display text-bronze text-[28px] font-light">{row.price}</p>
              </li>
            ))}
          </ul>
          <p className="font-serif italic text-graphite text-[15px] leading-relaxed mt-8 text-center">
            Rates reflect in-person lessons in Los Angeles; online lessons are available at the standard rate.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-ivory py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze-light mb-8">
            Now enrolling
          </p>
          <p className="font-display italic text-3xl sm:text-5xl lg:text-[52px] leading-[1.15] text-ivory mb-10">
            Taking a limited number<br />of students this season.
          </p>
          <Link
            to="/contact"
            className="inline-block font-sans text-[11px] tracking-label uppercase text-ivory border-b border-bronze-light pb-1.5 hover:text-bronze-light transition-colors"
          >
            Inquire about lessons
          </Link>
        </div>
      </section>
    </div>
  );
}
