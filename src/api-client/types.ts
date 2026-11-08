import { LessonMetadata, LessonData } from '../contracts/lesson';
import { ChallengeDefinition, ChallengeEvaluationResult } from '../contracts/challenge';

export interface IAgentExplorerClient {
  getLessons(): Promise<LessonMetadata[]>;
  getLessonBySlug(slug: string): Promise<LessonData | null>;
  evaluateChallenge(
    challengeId: string,
    input: string,
    enabledDefenses: string[]
  ): Promise<ChallengeEvaluationResult>;
}
