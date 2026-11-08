import { DefenseOption } from '../contracts/challenge';

export interface DefenseFilter {
  id: string;
  name: string;
  check: (input: string) => { passed: boolean; reason?: string };
}

export class DefensePipeline {
  private activeDefenses: Set<string> = new Set();

  setDefenses(defenses: DefenseOption[]): void {
    this.activeDefenses.clear();
    for (const d of defenses) {
      if (d.enabled) {
        this.activeDefenses.add(d.id);
      }
    }
  }

  isDefenseActive(defenseId: string): boolean {
    return this.activeDefenses.has(defenseId);
  }
}
