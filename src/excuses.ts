import data from '../data/excuses.json' with { type: 'json' };

export interface Excuse {
    id: number;
    excuse: string;
    ridiculous_rating: number;
    category: Category;
    will_work: boolean;
    teacher_reaction: string;
}

export const CATEGORIES = [
    'pets',
    'tech',
    'family',
    'weather',
    'existential',
    'health',
    'time',
    'supernatural',
    'school',
    'creative',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const excuses: Excuse[] = data.excuses as Excuse[];
