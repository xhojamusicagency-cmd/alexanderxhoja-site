import usePageTitle from '../hooks/usePageTitle';

interface Show {
  date: string;
  venue: string;
  city?: string;
  detail?: string;
}

const PAST_SHOWS: Show[] = [
  { date: 'June 15, 2025', venue: 'Grace by Nia', detail: '12 pm' },
  { date: 'August 5, 2024', venue: 'The Lee and Alma Berk Recital Hall', detail: '7 pm' },
  { date: 'September 22, 2024', venue: 'The Allen Center for the Arts', detail: '3 pm' },
  { date: 'October 3, 2024', venue: 'The Lee and Alma Berk Recital Hall', detail: '7 pm' },
  { date: 'April 26, 2024', venue: 'Berklee College of Music, Colvin Hall' },
  { date: 'February 28, 2024', venue: 'Keys Fest — David Friend Recital Hall' },
  { date: 'December 12, 2023', venue: 'Wellesley Village Church', city: 'Wellesley, MA' },
  { date: 'December 10, 2023', venue: 'Wellesley Public Library', city: 'Wellesley, MA' },
  { date: 'June 2, 2023', venue: 'Hunneman Hall', city: 'Boston' },
  { date: 'February 19, 2023', venue: 'The New School', city: 'NYC' },
];

const UPCOMING_SHOWS: Show[] = [];

export default function Shows() {
  usePageTitle('Shows', 'Live performances by Alexander Xhoja — past and upcoming concerts.');

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-12 sm:pt-20 pb-12">
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">
          Performances
        </p>
        <h1 className="font-display text-[56px] sm:text-[80px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal mb-6">
          Shows.
        </h1>
        <div className="h-px w-20 bg-bronze" />
      </section>

      {/* Upcoming */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-3xl mx-auto py-12">
        <h2 className="font-sans text-[10px] tracking-label uppercase text-bronze mb-10">
          Upcoming
        </h2>
        {UPCOMING_SHOWS.length === 0 ? (
          <p className="font-serif italic text-graphite text-[18px] leading-relaxed py-6 border-t border-b border-rule">
            No upcoming shows announced. <a href="/contact" className="text-bronze hover:text-bronze-light underline decoration-rule underline-offset-4">Get in touch</a> to book a performance.
          </p>
        ) : (
          <ul className="divide-y divide-rule">
            {UPCOMING_SHOWS.map((s, i) => <ShowRow key={i} show={s} />)}
          </ul>
        )}
      </section>

      {/* Past */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-3xl mx-auto py-12 pb-32">
        <h2 className="font-sans text-[10px] tracking-label uppercase text-bronze mb-10">
          Past Performances
        </h2>
        <ul className="divide-y divide-rule border-t border-rule">
          {PAST_SHOWS.map((s, i) => <ShowRow key={i} show={s} />)}
        </ul>
      </section>
    </div>
  );
}

function ShowRow({ show }: { show: Show }) {
  return (
    <li className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 py-6">
      <div className="font-sans text-[11px] tracking-[0.18em] uppercase text-bronze pt-1">
        {show.date}
      </div>
      <div>
        <p className="font-serif text-charcoal text-[20px] leading-snug">
          {show.venue}
          {show.detail && <span className="text-graphite text-[15px] italic ml-2">· {show.detail}</span>}
        </p>
        {show.city && (
          <p className="font-serif italic text-graphite text-[14px] mt-1.5">{show.city}</p>
        )}
      </div>
    </li>
  );
}
