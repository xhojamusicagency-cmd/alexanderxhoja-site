import { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import YouTubeThumbnail from '../components/YouTubeThumbnail';

interface Video {
  title: string;
  youtubeId: string;
  context?: string;
}

// Ordered newest -> oldest by YouTube upload date
const VIDEOS: Video[] = [
  { title: 'Black Orpheus', context: 'Solo piano · Live at Berk Recital Hall', youtubeId: 'eypWkhHFrqU' },
  { title: 'Million Years Ago', context: 'Adele cover · Live duo with Mia McIntosh', youtubeId: 'X3erxpEimGI' },
  { title: 'Mambo Influenciado', context: 'Solo arrangement', youtubeId: 'K5Tq02Us8iM' },
  { title: 'Beautiful Love', context: 'Solo piano', youtubeId: 'noISudgBnYA' },
  { title: 'Caravan', context: 'Live at Keys Fest 2024 · Berklee David Friend Recital Hall', youtubeId: '7flbo2_Gd64' },
  { title: 'In a Sentimental Mood', context: 'Studio recording', youtubeId: 'K05bnhuT4FE' },
  { title: 'Billies Bounce', context: 'Studio recording', youtubeId: 'crHUGe-KUyI' },
  { title: 'Giant Steps', context: 'Studio recording', youtubeId: 'my3__r9Ur6E' },
  { title: 'Blue Bossa', context: 'Live at Post Underground', youtubeId: 'O__SoQS3Bfw' },
];

export default function Videos() {
  usePageTitle('Videos', 'Live performance and studio recording videos by Alexander Xhoja.');
  const [activeIndex, setActiveIndex] = useState(0);
  const active = VIDEOS[activeIndex];

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-12 sm:pt-20 pb-12">
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">
          Performances
        </p>
        <h1 className="font-display text-[56px] sm:text-[80px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal mb-6">
          Videos.
        </h1>
        <div className="h-px w-20 bg-bronze" />
      </section>

      {/* Featured player */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video bg-black/40 overflow-hidden">
            <iframe
              key={active.youtubeId + activeIndex}
              src={`https://www.youtube.com/embed/${active.youtubeId}`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="text-center mt-10">
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-light leading-tight">
              {active.title}
            </h2>
            {active.context && (
              <p className="font-serif italic text-ivory/60 text-sm mt-3">
                {active.context}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Thumbnails — editorial grid, full-bleed images, no card containers */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto py-20 md:py-28">
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-10">
          All Performances
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {VIDEOS.map((v, i) => (
            <button
              key={v.youtubeId + i}
              onClick={() => {
                setActiveIndex(i);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`group text-left transition-opacity ${
                i === activeIndex ? 'opacity-100' : 'opacity-90 hover:opacity-100'
              }`}
            >
              <div className={`relative aspect-video overflow-hidden bg-ivory-deep ${
                i === activeIndex ? 'ring-1 ring-bronze' : ''
              }`}>
                <YouTubeThumbnail
                  youtubeId={v.youtubeId}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="font-display text-charcoal text-[22px] mt-5 leading-tight">
                {v.title}
              </p>
              {v.context && (
                <p className="font-serif italic text-graphite text-[14px] mt-1.5">
                  {v.context}
                </p>
              )}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
