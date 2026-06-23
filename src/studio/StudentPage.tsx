import { useParams } from 'react-router-dom';
import { ExternalLink, Clock } from 'lucide-react';
import StudioFrame from './StudioShell';
import { findStudent } from './students';
import { formatDate, categoryMeta } from './studioUtils';
import usePageTitle from '../hooks/usePageTitle';
import type { Assignment, StudioTask } from './types';

export default function StudentPage() {
  const { slug } = useParams();
  const student = findStudent(slug);

  usePageTitle(
    student ? `${student.firstName} — Practice Plan` : 'Studio',
    'The private piano studio of Alexander Xhoja.'
  );

  if (!student) {
    return (
      <StudioFrame>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-24 text-center">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">Studio</p>
          <h1 className="font-display text-[40px] sm:text-[52px] font-light leading-tight mb-6">
            This link isn’t active.
          </h1>
          <p className="font-serif text-[18px] text-graphite leading-relaxed">
            Double-check the link Alexander sent you — or text him and he’ll send a fresh one.
          </p>
        </div>
      </StudioFrame>
    );
  }

  const [current, ...history] = student.assignments;

  return (
    <StudioFrame>
      {/* ── Hero ── */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 pt-14 sm:pt-20 pb-10">
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-6">Practice Plan</p>
        <h1 className="font-display text-[56px] sm:text-[76px] leading-[0.95] tracking-[-0.02em] font-light text-charcoal">
          For {student.firstName}.
        </h1>
        <div className="h-px w-16 bg-bronze mt-7 mb-7" />
        <p className="font-serif text-[18px] sm:text-[19px] text-graphite leading-relaxed">
          {student.instrument} study with Alexander Xhoja.
          {current && <> Updated {formatDate(current.date)}.</>}
        </p>
      </section>

      {current && <ThisWeek assignment={current} />}

      {/* ── Progress history ── */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 py-14">
        <p className="font-sans text-[10px] tracking-label uppercase text-bronze mb-8">Your progress</p>
        {history.length === 0 ? (
          <p className="font-serif italic text-graphite text-[17px] leading-relaxed">
            Your practice history will build here, week by week — so you and your family can look back
            and see how far you’ve come.
          </p>
        ) : (
          <ul className="space-y-7">
            {history.map((a) => (
              <PastWeek key={a.date} assignment={a} />
            ))}
          </ul>
        )}
      </section>
    </StudioFrame>
  );
}

function ThisWeek({ assignment }: { assignment: Assignment }) {
  return (
    <section className="bg-ivory-deep border-y border-rule">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-14 sm:py-16">
        <div className="flex items-baseline justify-between mb-9">
          <p className="font-sans text-[10px] tracking-label uppercase text-bronze">This week</p>
          <p className="font-sans text-[10px] tracking-label uppercase text-graphite/60">
            {formatDate(assignment.date)}
          </p>
        </div>

        {assignment.recap && assignment.recap.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-x-3 gap-y-2">
            {assignment.recap.map((r) => (
              <span
                key={r}
                className="font-serif italic text-[15px] text-graphite border border-rule rounded-full px-4 py-1.5"
              >
                {r}
              </span>
            ))}
          </div>
        )}

        <ol className="space-y-8">
          {assignment.tasks.map((task, i) => (
            <TaskRow key={i} task={task} index={i} />
          ))}
        </ol>

        {assignment.nextLesson && (
          <div className="mt-12 pt-7 border-t border-rule flex items-center gap-3">
            <Clock size={15} className="text-bronze" />
            <p className="font-sans text-[11px] tracking-label uppercase text-graphite">
              Next lesson · <span className="text-charcoal">{assignment.nextLesson}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function TaskRow({ task, index }: { task: StudioTask; index: number }) {
  const { label, Icon } = categoryMeta(task.category);
  return (
    <li className="flex gap-5">
      <span className="font-display text-[26px] text-bronze/50 leading-none pt-1 w-7 shrink-0 text-right tabular-nums">
        {index + 1}
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Icon size={13} className="text-bronze" />
          <span className="font-sans text-[10px] tracking-label uppercase text-bronze">{label}</span>
          {task.cadence && (
            <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-graphite/55">
              · {task.cadence}
            </span>
          )}
        </div>
        <p className="font-serif text-[20px] sm:text-[21px] text-charcoal leading-[1.5]">{task.text}</p>
        {task.detail && (
          <p className="font-serif italic text-[16px] text-graphite leading-relaxed mt-1.5">{task.detail}</p>
        )}
        {task.link && (
          <a
            href={task.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-sans text-[10px] tracking-label uppercase text-charcoal border border-charcoal/25 px-5 py-3 hover:border-bronze hover:text-bronze transition-colors"
          >
            {task.link.label}
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </li>
  );
}

function PastWeek({ assignment }: { assignment: Assignment }) {
  return (
    <li className="border-l-2 border-bronze/30 pl-5 py-1">
      <p className="font-sans text-[10px] tracking-label uppercase text-graphite/60 mb-2">
        {formatDate(assignment.date)}
      </p>
      <ul className="space-y-1">
        {assignment.tasks.map((t, i) => (
          <li key={i} className="font-serif text-[16px] text-charcoal/80 leading-snug">
            {t.text}
          </li>
        ))}
      </ul>
    </li>
  );
}
