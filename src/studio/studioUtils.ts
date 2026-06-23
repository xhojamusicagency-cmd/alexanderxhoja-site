import { BookOpen, Music, Headphones, Activity, Hand, type LucideIcon } from 'lucide-react';
import type { TaskCategory } from './types';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** "2026-06-23" -> "June 23, 2026" (timezone-safe; no Date parsing). */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export interface CategoryMeta {
  label: string;
  Icon: LucideIcon;
}

export function categoryMeta(category: TaskCategory): CategoryMeta {
  switch (category) {
    case 'reading': return { label: 'Reading', Icon: BookOpen };
    case 'technique': return { label: 'Technique', Icon: Hand };
    case 'repertoire': return { label: 'Repertoire', Icon: Music };
    case 'listening': return { label: 'Listening', Icon: Headphones };
    case 'rhythm': return { label: 'Rhythm', Icon: Activity };
    case 'theory': return { label: 'Theory', Icon: BookOpen };
    default: return { label: 'Practice', Icon: Music };
  }
}
