import usePageTitle from '../hooks/usePageTitle';

interface Photo {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
}

const PHOTOS: Photo[] = [
  { src: '/alexander-xhoja-steinway-warm.jpg', alt: 'Alexander Xhoja at the Steinway under blue stage light', caption: 'At the Steinway', wide: true },
  { src: '/alexander-xhoja-concert-blue.jpg', alt: 'Alexander Xhoja at the piano under concert lighting', caption: 'On stage' },
  { src: '/alexander-xhoja-steinway-profile.jpg', alt: 'Alexander Xhoja performing in profile under stage light', caption: 'In concert' },
  { src: '/alexander-xhoja-concert.jpg', alt: 'Alexander Xhoja performing under concert lighting', caption: 'In performance' },
  { src: '/alexander-xhoja-recital.jpg', alt: 'Alexander Xhoja in recital', caption: 'Recital' },
  { src: '/alexander-xhoja.jpg', alt: 'Alexander Xhoja portrait', caption: 'Portrait' },
  { src: '/hero-piano-poster.jpg', alt: 'Piano detail', caption: 'Hands at work' },
];

export default function Gallery() {
  usePageTitle('Gallery', 'Photography of Alexander Xhoja — portraits and live performances.');

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pt-12 sm:pt-20 pb-12">
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">
          Photography
        </p>
        <h1 className="font-display text-[56px] sm:text-[80px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal mb-6">
          Gallery.
        </h1>
        <div className="h-px w-20 bg-bronze" />
      </section>

      {/* Editorial photo grid — full-bleed, no shadows */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto py-12 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PHOTOS.map((p, i) => (
            <figure key={i} className={p.wide ? 'sm:col-span-2' : ''}>
              <div className={`overflow-hidden bg-ivory-deep ${p.wide ? 'aspect-[3/2]' : 'aspect-[4/5]'}`}>
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {p.caption && (
                <figcaption className="mt-4 font-sans text-[10px] tracking-[0.18em] uppercase text-bronze">
                  {p.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
