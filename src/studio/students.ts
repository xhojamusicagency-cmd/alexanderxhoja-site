import type { Student, Assignment } from './types';

// ─── The private studio roster ──────────────────────────────────────────────
// Newest assignment first within each student.
// Slugs carry a short random suffix so the links aren't guessable.
// To update a student after a lesson: add a new object to the TOP of their
// `assignments` array. The old week drops into their progress history.

export const STUDENTS: Student[] = [
  {
    slug: 'kaia-l4m2',
    firstName: 'Kaia',
    instrument: 'Piano',
    assignments: [
      {
        date: '2026-06-23',
        recap: ['Loves ear training', 'Started working on the blues'],
        tasks: [
          {
            category: 'reading',
            text: 'Read notes for 5 minutes a day — sound them out, don’t guess.',
            cadence: '5 min/day',
            link: { label: 'Open the note flashcards', url: 'https://www.musictheory.net/exercises/note' },
          },
          {
            category: 'technique',
            text: 'C major scale, hands separate.',
            detail: 'C · D · E · F · G · A · B · C',
          },
          {
            category: 'repertoire',
            text: 'Learn “Barbie World” and “Twinkle, Twinkle, Little Star.”',
          },
          {
            category: 'listening',
            text: 'Listen to a jazz recording (I’ll send you one).',
          },
        ],
      },
    ],
  },
  {
    slug: 'samuel-r8k5',
    firstName: 'Samuel',
    instrument: 'Piano',
    assignments: [
      {
        date: '2026-06-23',
        tasks: [
          {
            category: 'repertoire',
            text: 'Invention No. 8',
            detail: 'J.S. Bach — Two-Part Invention in F major.',
          },
          {
            category: 'repertoire',
            text: 'F Blues Etude',
          },
          {
            category: 'listening',
            text: 'Listen to a jazz pianist — any recording.',
          },
        ],
      },
    ],
  },
  {
    slug: 'michael-q3v7',
    firstName: 'Michael',
    instrument: 'Piano',
    assignments: [
      {
        date: '2026-06-23',
        tasks: [
          {
            category: 'reading',
            text: 'Music-note flashcards — start with the treble clef only.',
            link: { label: 'Open the note flashcards', url: 'https://www.musictheory.net/exercises/note' },
          },
          {
            category: 'repertoire',
            text: 'Uncovering the Blues',
            detail: 'Root on the left hand for four beats; melody on the right hand.',
          },
          {
            category: 'rhythm',
            text: 'Rhythm practice — quarter notes and eighth notes.',
          },
        ],
      },
    ],
  },
];

export function findStudent(slug: string | undefined): Student | undefined {
  if (!slug) return undefined;
  return STUDENTS.find((s) => s.slug === slug);
}

/** The current (newest) assignment for a student. */
export function currentAssignment(student: Student): Assignment | undefined {
  return student.assignments[0];
}
