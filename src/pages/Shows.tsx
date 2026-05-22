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

// Upcoming shows go here when they're announced.
const UPCOMING_SHOWS: Show[] = [];

export default function Shows() {
  usePageTitle(
    'Shows',
    'Live performances by Alexander Xhoja — past and upcoming concerts at Boston, New York, and select recital halls.'
  );

  return (
    <div className="bg-dark text-cream-light">
      {/* Hero */}
      <section className="bg-dark pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5">
            Performances
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[0.5px] text-cream-light mb-6">
            Shows
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* Upcoming */}
      <section className="bg-dark pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-cream-light font-light tracking-[0.5px] mb-8 text-center">
            Upcoming
          </h2>
          {UPCOMING_SHOWS.length === 0 ? (
            <p className="text-center text-cream-light/50 font-serif italic text-[15px] py-8 border-t border-b border-gold/15">
              No upcoming shows announced. Check back soon — or <a href="/contact" className="text-gold hover:underline">get in touch</a> to book a performance.
            </p>
          ) : (
            <ul className="space-y-5">
              {UPCOMING_SHOWS.map((s, i) => <ShowRow key={i} show={s} />)}
            </ul>
          )}
        </div>
      </section>

      {/* Past Shows */}
      <section className="bg-dark pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-cream-light font-light tracking-[0.5px] mb-10 text-center">
            Past Performances
          </h2>
          <ul className="space-y-1">
            {PAST_SHOWS.map((s, i) => <ShowRow key={i} show={s} />)}
          </ul>
        </div>
      </section>
    </div>
  );
}

function ShowRow({ show }: { show: Show }) {
  return (
    <li className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 py-5 border-b border-gold/10">
      <div className="text-gold text-[11px] tracking-[2.5px] uppercase font-medium pt-1">
        {show.date}
      </div>
      <div>
        <p className="font-serif text-cream-light/90 text-[17px] leading-snug">
          {show.venue}
          {show.detail && <span className="text-cream-light/50 text-[14px] ml-2">· {show.detail}</span>}
        </p>
        {show.city && (
          <p className="text-cream-light/50 text-[12px] tracking-[1.5px] uppercase mt-1.5">{show.city}</p>
        )}
      </div>
    </li>
  );
}
