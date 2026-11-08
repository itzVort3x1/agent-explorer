import { LessonTrace } from './trace';
import { ChallengeDefinition } from './challenge';

/**
 * The 4-step lesson loop defined in PRD Section 5:
 * 1. Watch
 * 2. Break
 * 3. Patch
 * 4. Attack again
 */
export type LessonStep = 'watch' | 'break' | 'patch' | 'attack_again';

export interface LessonMetadata {
  id: string;
  slug: string;
  order: number;
  title: string;
  summary: string;
  durationMinutes: number;
}

export interface LessonData {
  metadata: LessonMetadata;
  trace: LessonTrace;
  challenge: ChallengeDefinition;
}
