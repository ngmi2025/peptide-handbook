import type { Peptide, GoalSlug } from '../types';
import { tirzepatide } from './tirzepatide';
import { semaglutide } from './semaglutide';
import { retatrutide } from './retatrutide';
import { liraglutide } from './liraglutide';
import { cjc1295 } from './cjc-1295';
import { ipamorelin } from './ipamorelin';
import { bpc157 } from './bpc-157';
import { tb500 } from './tb-500';
import { motsC } from './mots-c';
import { epitalon } from './epitalon';
import { dsip } from './dsip';
import { semax } from './semax';

export const PEPTIDES: Peptide[] = [
  tirzepatide,
  semaglutide,
  retatrutide,
  liraglutide,
  cjc1295,
  ipamorelin,
  bpc157,
  tb500,
  motsC,
  epitalon,
  dsip,
  semax,
];

export function getPeptide(slug: string): Peptide | undefined {
  return PEPTIDES.find((p) => p.slug === slug);
}

export function getPeptidesByGoal(goal: GoalSlug): Peptide[] {
  return PEPTIDES.filter((p) => p.goal === goal || (p.secondaryGoals?.includes(goal) ?? false))
    .sort((a, b) => b.rating - a.rating);
}

export function countByGoal(goal: GoalSlug): number {
  return getPeptidesByGoal(goal).length;
}

export function topByGoal(goal: GoalSlug): Peptide | undefined {
  return getPeptidesByGoal(goal)[0];
}
