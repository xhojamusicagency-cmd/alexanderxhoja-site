import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'Bio', href: '/bio' },
    { label: 'Shows', href: '/shows' },
    { label: 'Videos', href: '/videos' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Lessons', href: '/lessons' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm">
      <nav className="px-6 sm:px-10 lg:px-16 py-6 flex items-center justify-between max-w-[1400px] mx-auto">
        <Link to="/" className="group">
          <span className="font-serif text-lg sm:text-xl font-medium tracking-editorial text-charcoal group-hover:text-bronze transition-colors">
            Alexander Xhoja
          </span>
        </Link>

        {/* Desktop nav — small caps, lots of breathing room */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-serif text-[14px] italic transition-colors ${
                location.pathname === link.href
                  ? 'text-bronze'
                  : 'text-graphite hover:text-bronze'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden p-1 text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-ivory">
          <div className="px-8 py-6 space-y-4 border-t border-rule">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block font-serif text-lg italic transition-colors ${
                  location.pathname === link.href
                    ? 'text-bronze'
                    : 'text-graphite hover:text-bronze'
                }`}
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
