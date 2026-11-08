import { TaintStatus } from './taint';

export interface DefenseOption {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface ChallengeDefinition {
  id: string;
  lessonId?: string;
  title: string;
  mission: string;
  targetGoal: string;
  initialInput: string;
  defenses: DefenseOption[];
}

export interface ChallengeEvaluationResult {
  success: boolean;
  status: TaintStatus;
  summary: string;
  logs: string[];
}
