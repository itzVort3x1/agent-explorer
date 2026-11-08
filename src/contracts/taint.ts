/**
 * Taint tracking types for identifying untrusted data sources and execution states.
 * Rule: Never use color alone. Always pair with text labels (TAINTED, BLOCKED, PASSED, etc.)
 */
export type TaintStatus = 'UNTRUSTED' | 'TAINTED' | 'BLOCKED' | 'PASSED' | 'SAFE';

export interface TaintTag {
  id: string;
  source: string;
  status: TaintStatus;
  byteRange?: [number, number];
  description?: string;
}
