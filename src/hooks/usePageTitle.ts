import { useEffect } from 'react';

const BASE_TITLE = 'Alexander Xhoja';
const DEFAULT_DESCRIPTION =
  'Alexander Xhoja — a Los Angeles pianist, composer, and private piano teacher, and a Berklee College of Music graduate. Concert performances and private lessons across the Westside.';

/**
 * Sets the document title and meta description for a page.
 * - `pageTitle` becomes `{pageTitle} | Xhoja Music Agency`
 * - `description` overrides the default meta description for SEO
 * Also updates Open Graph + Twitter description tags so the page renders well when shared.
 */
export default function usePageTitle(pageTitle?: string, description?: string) {
  useEffect(() => {
    // Title
    document.title = pageTitle
      ? `${pageTitle} | ${BASE_TITLE}`
      : `${BASE_TITLE} — Los Angeles Pianist & Private Piano Teacher`;

    // Meta description (and OG/Twitter mirrors)
    const desc = description || DEFAULT_DESCRIPTION;
    const tags: Array<[string, string]> = [
      ['name', 'description'],
      ['property', 'og:description'],
      ['name', 'twitter:description'],
    ];
    tags.forEach(([attr, key]) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', desc);
    });

    // Mirror the page title to Open Graph + Twitter title too
    const fullTitle = pageTitle
      ? `${pageTitle} | ${BASE_TITLE}`
      : `${BASE_TITLE} — Los Angeles Pianist & Private Piano Teacher`;
    ['og:title', 'twitter:title'].forEach((key) => {
      const attr = key.startsWith('og:') ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', fullTitle);
    });

    // Canonical URL — helps Google de-dupe
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://pianowithalexander.com${window.location.pathname}`);
  }, [pageTitle, description]);
}
