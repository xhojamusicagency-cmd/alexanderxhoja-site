import usePageTitle from '../hooks/usePageTitle';

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

// Currently using the 2 photos we already have on disk.
// More can be dropped into /public and added here.
const PHOTOS: Photo[] = [
  { src: '/alexander-xhoja.jpg', alt: 'Alexander Xhoja at the piano', caption: 'Portrait' },
  { src: '/alexander-xhoja-recital.jpg', alt: 'Alexander Xhoja performing live', caption: 'Recital' },
  { src: '/hero-piano-poster.jpg', alt: 'Piano detail', caption: 'Hands at work' },
];

export default function Gallery() {
  usePageTitle(
    'Gallery',
    'Photography of Alexander Xhoja — portraits, live performances, and behind-the-scenes moments.'
  );

  return (
    <div className="bg-dark text-cream-light">
      {/* Hero */}
      <section className="bg-dark pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[4px] text-[11px] mb-5">
            Photography
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-[0.5px] text-cream-light mb-6">
            Gallery
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* Photo grid */}
      <section className="bg-dark pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHOTOS.map((p, i) => (
              <figure key={i} className="group relative overflow-hidden bg-black/30">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/0 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                {p.caption && (
                  <figcaption className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12 text-cream-light">
                    <p className="text-[10px] tracking-[3px] uppercase text-gold mb-1">
                      Photo
                    </p>
                    <p className="font-serif text-base">{p.caption}</p>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>

          {/* Gentle nudge — gallery is light right now; encourage growth */}
          <p className="text-center text-cream-light/50 font-serif italic text-[14px] mt-16">
            More photographs coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
