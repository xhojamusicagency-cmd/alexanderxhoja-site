// Data model for the private student studio.
// One entry per student; assignments are stored newest-first.

export type TaskCategory =
  | 'reading'
  | 'technique'
  | 'repertoire'
  | 'listening'
  | 'rhythm'
  | 'theory'
  | 'general';

export interface StudioLink {
  label: string;
  url: string;
}

export interface StudioTask {
  category: TaskCategory;
  /** The main instruction, e.g. "C major scale, hands separate." */
  text: string;
  /** Optional clarifying sub-instruction. */
  detail?: string;
  /** Optional practice cadence, e.g. "5 min/day". */
  cadence?: string;
  /** Optional reference link (flashcards, a recording, sheet music). */
  link?: StudioLink;
}

export interface Assignment {
  /** ISO date the assignment was set, e.g. "2026-06-23". */
  date: string;
  /** Short "where they are" notes shown above the week's tasks. */
  recap?: string[];
  tasks: StudioTask[];
  /** Human-readable next lesson, e.g. "Saturday, June 28". */
  nextLesson?: string;
}

export interface Student {
  /** Unguessable URL slug, e.g. "kaia-l4m2". */
  slug: string;
  firstName: string;
  lastName?: string;
  instrument: string;
  /** Optional ISO date the student started. */
  startedOn?: string;
  /** Newest assignment first. */
  assignments: Assignment[];
}
