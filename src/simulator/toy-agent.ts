import { ChallengeEvaluationResult } from '../contracts/challenge';
import { DefensePipeline } from './defense-pipeline';
import { TaintTracker } from './taint-tracker';

export interface ToyAgentRule {
  pattern: RegExp;
  action: (match: RegExpMatchArray) => string;
}

/**
 * Toy rule-based agent for fast, client-side, zero-cost challenge execution.
 */
export class ToyAgent {
  private rules: ToyAgentRule[] = [];
  private defensePipeline: DefensePipeline;
  private taintTracker: TaintTracker;

  constructor(defensePipeline: DefensePipeline, taintTracker: TaintTracker) {
    this.defensePipeline = defensePipeline;
    this.taintTracker = taintTracker;
  }

  addRule(pattern: RegExp, action: (match: RegExpMatchArray) => string): void {
    this.rules.push({ pattern, action });
  }

  evaluate(input: string): ChallengeEvaluationResult {
    // Simulator execution logic
    return {
      success: false,
      status: 'PASSED',
      summary: 'Simulator initialized.',
      logs: [`Evaluating input: "${input.slice(0, 30)}..."`],
    };
  }
}
