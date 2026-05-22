import { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';

interface Video {
  title: string;
  youtubeId: string;
  context?: string;
}

// Real catalog of Alexander Xhoja's YouTube performances.
// Source: https://www.youtube.com/@alexanderxhoja
const VIDEOS: Video[] = [
  {
    title: 'Caravan',
    context: 'Live at Keys Fest 2024 · Berklee David Friend Recital Hall',
    youtubeId: '7flbo2_Gd64',
  },
  {
    title: 'Black Orpheus',
    context: 'Solo piano · Live at Berk Recital Hall',
    youtubeId: 'eypWkhHFrqU',
  },
  {
    title: 'Million Years Ago',
    context: 'Adele cover · Live duo with Mia McIntosh',
    youtubeId: 'X3erxpEimGI',
  },
  {
    title: 'Beautiful Love',
    context: 'Solo piano',
    youtubeId: 'noISudgBnYA',
  },
  {
    title: 'Mambo Influenciado',
    context: 'Solo arrangement',
    youtubeId: 'K5Tq02Us8iM',
  },
  {
    title: 'In a Sentimental Mood',
    context: 'Studio recording',
    youtubeId: 'K05bnhuT4FE',
  },
  {
    title: 'Billies Bounce',
    context: 'Studio recording',
    youtubeId: 'crHUGe-KUyI',
  },
  {
    title: 'Giant Steps',
    context: 'Studio recording',
    youtubeId: 'my3__r9Ur6E',
  },
  {
    title: 'Blue Bossa',
    context: 'Live at Post Underground',
    youtubeId: 'O__SoQS3Bfw',
  },
];

export default function Videos() {
  usePageTitle(
    'Videos',
    'Live performance and studio recording videos by Alexander Xhoja — solo piano, trio, and ensemble work.'
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = VIDEOS[activeIndex];

  return (
    <div className="bg-dark text-cream-light">
      {/* Hero */}
      <section className="bg-dark pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5">
            Performances
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[0.5px] text-cream-light mb-6">
            Videos
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* Featured player */}
      <section className="bg-dark pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video bg-black/40 overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
            <iframe
              key={active.youtubeId + activeIndex}
              src={`https://www.youtube.com/embed/${active.youtubeId}`}
              title={active.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="text-center mt-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-cream-light font-light tracking-[0.5px] mb-2">
              {active.title}
            </h2>
            {active.context && (
              <p className="text-cream-light/55 text-[13px] tracking-[1.5px] uppercase">
                {active.context}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Video thumbnails / selector */}
      <section className="bg-dark pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="text-gold uppercase tracking-[3.5px] text-[11px] mb-8 text-center">
            All Performances
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((v, i) => (
              <button
                key={v.youtubeId + i}
                onClick={() => setActiveIndex(i)}
                className={`group text-left transition-all duration-300 ${
                  i === activeIndex ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className={`relative aspect-video bg-black/40 overflow-hidden mb-3 ${
                  i === activeIndex ? 'ring-2 ring-gold' : ''
                }`}>
                  <img
                    src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-colors" />
                </div>
                <p className="font-serif text-cream-light text-[15px] leading-tight mb-1">
                  {v.title}
                </p>
                {v.context && (
                  <p className="text-cream-light/50 text-[11px] tracking-[1.5px] uppercase">
                    {v.context}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
