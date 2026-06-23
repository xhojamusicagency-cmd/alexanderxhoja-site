import { Link } from 'react-router-dom';

interface StudioFrameProps {
  children: React.ReactNode;
}

// Minimal, quiet chrome for the private studio — deliberately NOT the
// marketing nav. A student opening their practice page sees only the studio.
export default function StudioFrame({ children }: StudioFrameProps) {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-charcoal">
      <header className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-lg tracking-editorial text-charcoal hover:text-bronze transition-colors"
          >
            Alexander Xhoja
          </Link>
          <span className="font-sans text-[10px] tracking-label uppercase text-bronze">
            Private Studio
          </span>
        </div>
      </header>

      <main className="flex-grow fade-in">{children}</main>

      <footer className="border-t border-rule mt-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-8 text-center">
          <p className="font-serif italic text-graphite text-[15px]">
            Questions between lessons? Text Alexander —{' '}
            <a
              href="sms:+18574988487"
              className="text-bronze hover:text-bronze-light underline decoration-rule underline-offset-4"
            >
              (857) 498-8487
            </a>
          </p>
          <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-graphite/50 mt-4">
            Alexander Xhoja · Private Piano Studio
          </p>
        </div>
      </footer>
    </div>
  );
}
