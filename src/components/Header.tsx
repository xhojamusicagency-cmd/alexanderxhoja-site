import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'HOME', href: '/' },
    { label: 'BIO', href: '/bio' },
    { label: 'SHOWS', href: '/shows' },
    { label: 'VIDEOS', href: '/videos' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gold/15">
      <nav className="px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-xl sm:text-2xl font-light tracking-[2px] text-cream-light">
            Alexander Xhoja
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-7">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[11px] font-medium uppercase tracking-[2.5px] transition-colors ${
                location.pathname === link.href
                  ? 'text-gold'
                  : 'text-cream-light/70 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-cream-light"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-gold/15">
          <div className="px-6 py-4">
            {links.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-3.5 text-xs font-medium uppercase tracking-[2.5px] transition-colors ${
                  index < links.length - 1 ? 'border-b border-gold/10' : ''
                } ${
                  location.pathname === link.href
                    ? 'text-gold'
                    : 'text-cream-light/80 hover:text-gold'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
