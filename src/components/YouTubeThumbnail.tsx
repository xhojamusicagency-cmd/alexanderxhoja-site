import { useState } from 'react';

interface YouTubeThumbnailProps {
  youtubeId: string;
  alt: string;
  className?: string;
}

const maxres = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const hq = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/**
 * YouTube thumbnail with a reliable fallback.
 *
 * `maxresdefault.jpg` is crisp 16:9 but 404s for videos that never got a
 * hi-res thumbnail (e.g. studio uploads). YouTube ships that 404 WITH a small
 * gray placeholder image, so a plain `onError` never fires and the gray box
 * renders. We catch it two ways: onError (true failures) and onLoad by
 * checking the intrinsic width — the gray placeholder is 120px wide, real
 * frames are ≥320px. Either way we fall back to `hqdefault.jpg`, which always
 * exists as a real frame.
 */
export default function YouTubeThumbnail({ youtubeId, alt, className }: YouTubeThumbnailProps) {
  const [src, setSrc] = useState(() => maxres(youtubeId));
  const fallback = hq(youtubeId);
  const useFallback = () => setSrc((cur) => (cur === fallback ? cur : fallback));

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={useFallback}
      onLoad={(e) => {
        if (e.currentTarget.naturalWidth <= 120) useFallback();
      }}
    />
  );
}
