import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-cream-light py-16 border-t border-gold/15">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-light tracking-[1.5px] mb-3">Alexander Xhoja</p>
            <p className="text-gold text-[10px] tracking-[3px] uppercase mb-5">Pianist · Composer · Bandleader</p>
            <p className="text-cream-light/55 text-sm leading-relaxed font-serif italic">
              Boston-based. Berklee-trained. Telling stories through the piano.
            </p>
          </div>

          {/* Site nav */}
          <div className="md:pl-12">
            <h4 className="text-gold text-[10px] tracking-[3px] uppercase font-medium mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-cream-light/65">
              <li><Link to="/bio" className="hover:text-gold transition-colors">Biography</Link></li>
              <li><Link to="/shows" className="hover:text-gold transition-colors">Shows</Link></li>
              <li><Link to="/videos" className="hover:text-gold transition-colors">Videos</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gold text-[10px] tracking-[3px] uppercase font-medium mb-5">Connect</h4>
            <ul className="space-y-3 text-sm text-cream-light/65">
              <li>
                <a href="mailto:alexanderxhoja@gmail.com" className="hover:text-gold transition-colors">
                  alexanderxhoja@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+18574988487" className="hover:text-gold transition-colors">
                  (857) 498-8487
                </a>
              </li>
              <li className="pt-1 flex items-center gap-4">
                <a
                  href="https://instagram.com/alexanderxhoja"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-gold transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com/@alexanderxhoja"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-gold transition-colors"
                >
                  <Youtube size={20} />
                </a>
              </li>
              <li className="pt-3 text-xs text-cream-light/45">
                For full-event bookings:{' '}
                <a href="https://xhojamusicagency.com" className="hover:text-gold underline decoration-gold/30 transition-colors">
                  Xhoja Music Agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/15 pt-8 text-center text-xs text-cream-light/40 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Alexander Xhoja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
