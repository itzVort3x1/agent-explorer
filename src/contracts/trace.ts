import { TaintTag } from './taint';

export type ActorRole = 'user' | 'agent' | 'tool' | 'environment';
export type TraceMode = 'normal' | 'attack' | 'defended';

export interface TraceMessage {
  id: string;
  sender: ActorRole;
  recipient: ActorRole;
  timestamp: number;
  payload: {
    raw: string;
    decoded?: Record<string, unknown>;
  };
  taintTags?: TaintTag[];
}

export interface TraceStep {
  stepIndex: number;
  title: string;
  description: string;
  message: TraceMessage;
  status: 'pending' | 'active' | 'blocked' | 'passed';
}

export interface LessonTrace {
  id: string;
  mode: TraceMode;
  steps: TraceStep[];
}
