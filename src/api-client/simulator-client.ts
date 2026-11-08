import { IAgentExplorerClient } from './types';
import { LessonMetadata, LessonData } from '../contracts/lesson';
import { ChallengeEvaluationResult } from '../contracts/challenge';
import { ToyAgent } from '../simulator/toy-agent';
import { DefensePipeline } from '../simulator/defense-pipeline';
import { TaintTracker } from '../simulator/taint-tracker';

/**
 * In-browser simulator implementation of the API client interface.
 * When a backend service is added in v3, this can be swapped with an HTTP client without changing UI code.
 */
export class SimulatorApiClient implements IAgentExplorerClient {
  private agent: ToyAgent;

  constructor() {
    const pipeline = new DefensePipeline();
    const tracker = new TaintTracker();
    this.agent = new ToyAgent(pipeline, tracker);
  }

  async getLessons(): Promise<LessonMetadata[]> {
    return [];
  }

  async getLessonBySlug(_slug: string): Promise<LessonData | null> {
    return null;
  }

  async evaluateChallenge(
    _challengeId: string,
    input: string,
    _enabledDefenses: string[]
  ): Promise<ChallengeEvaluationResult> {
    return this.agent.evaluate(input);
  }
}
