import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ExternalLink, Copy, Check } from 'lucide-react';
import StudioFrame from './StudioShell';
import { STUDENTS, currentAssignment } from './students';
import { formatDate } from './studioUtils';
import usePageTitle from '../hooks/usePageTitle';
import type { Student } from './types';

// Passcode keeps casual eyes off the roster. It is a light client-side gate
// (not real auth) — appropriate for a list of practice notes. Override it in
// Vercel with the VITE_STUDIO_PASSCODE env var; otherwise the default applies.
const EXPECTED = (import.meta.env.VITE_STUDIO_PASSCODE as string | undefined) || 'studio2026';
const UNLOCK_KEY = 'studio-unlocked';

export default function StudioIndex() {
  usePageTitle('Studio Roster', 'Private studio roster.');
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(UNLOCK_KEY) === '1');

  if (!unlocked) {
    return (
      <Gate
        onUnlock={() => {
          sessionStorage.setItem(UNLOCK_KEY, '1');
          setUnlocked(true);
        }}
      />
    );
  }
  return <Roster />;
}

function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  function handle(e: FormEvent) {
    e.preventDefault();
    if (value === EXPECTED) onUnlock();
    else setError(true);
  }

  return (
    <StudioFrame>
      <div className="max-w-sm mx-auto px-6 py-28 text-center">
        <Lock size={20} className="text-bronze mx-auto mb-6" />
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-4">Studio</p>
        <h1 className="font-display text-[34px] font-light mb-8">Roster</h1>
        <form onSubmit={handle} className="space-y-5">
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Passcode"
            className="w-full bg-transparent border-0 border-b border-rule pb-3 text-center text-charcoal font-serif text-[18px] focus:outline-none focus:border-bronze transition-colors placeholder:text-graphite/40 placeholder:italic"
          />
          <button
            type="submit"
            className="w-full bg-bronze text-ivory font-sans text-[11px] tracking-label uppercase py-3.5 hover:bg-bronze-light transition-colors"
          >
            Enter
          </button>
          {error && <p className="font-serif italic text-[14px] text-bronze">That’s not it — try again.</p>}
        </form>
      </div>
    </StudioFrame>
  );
}

function Roster() {
  return (
    <StudioFrame>
      <section className="max-w-3xl mx-auto px-6 sm:px-8 pt-14 pb-10">
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">Studio Roster</p>
        <h1 className="font-display text-[48px] sm:text-[60px] font-light leading-[0.95] tracking-[-0.02em]">
          {STUDENTS.length} {STUDENTS.length === 1 ? 'student' : 'students'}.
        </h1>
        <div className="h-px w-16 bg-bronze mt-7" />
      </section>

      <section className="max-w-3xl mx-auto px-6 sm:px-8 pb-16">
        <ul className="divide-y divide-rule border-y border-rule">
          {STUDENTS.map((s) => (
            <RosterRow key={s.slug} student={s} />
          ))}
        </ul>
        <p className="font-serif italic text-graphite/70 text-[14px] mt-6 leading-relaxed">
          Only you can see this page. Each student’s link is private — share it with that family only.
        </p>
      </section>
    </StudioFrame>
  );
}

function RosterRow({ student }: { student: Student }) {
  const a = currentAssignment(student);
  const focus = a?.tasks.slice(0, 2).map((t) => t.text).join(' · ');
  const [copied, setCopied] = useState(false);

  function copyLink() {
    const url = `${window.location.origin}/studio/${student.slug}`;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <li className="py-6 flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3 mb-1.5">
          <h2 className="font-display text-[26px] text-charcoal leading-none">
            {student.firstName}
            {student.lastName ? ` ${student.lastName}` : ''}
          </h2>
          {a && (
            <span className="font-sans text-[10px] tracking-label uppercase text-graphite/55">
              {formatDate(a.date)}
            </span>
          )}
        </div>
        {focus && <p className="font-serif text-[16px] text-graphite leading-snug truncate">{focus}</p>}
        {a?.nextLesson && (
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mt-2">Next · {a.nextLesson}</p>
        )}
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={copyLink}
          aria-label="Copy private link"
          className="p-2.5 text-graphite hover:text-bronze transition-colors"
        >
          {copied ? <Check size={15} className="text-bronze" /> : <Copy size={15} />}
        </button>
        <Link
          to={`/studio/${student.slug}`}
          aria-label={`Open ${student.firstName}’s page`}
          className="p-2.5 text-graphite hover:text-bronze transition-colors"
        >
          <ExternalLink size={15} />
        </Link>
      </div>
    </li>
  );
}
