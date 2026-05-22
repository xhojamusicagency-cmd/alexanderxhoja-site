import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-light tracking-editorial text-charcoal mb-3">Alexander Xhoja</p>
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-5">Pianist · Composer · Bandleader</p>
            <p className="font-serif italic text-graphite text-[15px] leading-relaxed max-w-xs">
              Boston-based. Berklee-trained. Telling stories through the piano.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-5">Explore</p>
            <ul className="space-y-3 font-serif text-charcoal/80 text-[15px]">
              <li><Link to="/bio" className="hover:text-bronze transition-colors">Biography</Link></li>
              <li><Link to="/shows" className="hover:text-bronze transition-colors">Shows</Link></li>
              <li><Link to="/videos" className="hover:text-bronze transition-colors">Videos</Link></li>
              <li><Link to="/gallery" className="hover:text-bronze transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-bronze transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-5">Connect</p>
            <ul className="space-y-3 font-serif text-charcoal/80 text-[15px]">
              <li>
                <a href="mailto:alexanderxhoja@gmail.com" className="hover:text-bronze transition-colors">
                  alexanderxhoja@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+18574988487" className="hover:text-bronze transition-colors">
                  (857) 498-8487
                </a>
              </li>
              <li className="pt-3 flex items-center gap-5">
                <a href="https://instagram.com/alexanderxhoja" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-graphite hover:text-bronze transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://www.youtube.com/@alexanderxhoja" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-graphite hover:text-bronze transition-colors">
                  <Youtube size={20} />
                </a>
              </li>
              <li className="pt-3 font-serif italic text-graphite/85 text-[13px]">
                For full-event bookings:{' '}
                <a href="https://xhojamusicagency.com" className="text-bronze hover:text-bronze-light underline decoration-rule underline-offset-4">
                  Xhoja Music Agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rule pt-8 text-center font-sans text-[11px] tracking-[0.18em] uppercase text-graphite">
          <p>&copy; {new Date().getFullYear()} Alexander Xhoja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
