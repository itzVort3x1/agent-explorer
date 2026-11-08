import { TaintTag, TaintStatus } from '../contracts/taint';

export class TaintTracker {
  private tags: Map<string, TaintTag> = new Map();

  tagInput(id: string, source: string, status: TaintStatus = 'UNTRUSTED'): TaintTag {
    const tag: TaintTag = { id, source, status };
    this.tags.set(id, tag);
    return tag;
  }

  isTainted(id: string): boolean {
    const tag = this.tags.get(id);
    return tag ? tag.status === 'TAINTED' || tag.status === 'UNTRUSTED' : false;
  }

  getAllTags(): TaintTag[] {
    return Array.from(this.tags.values());
  }

  clear(): void {
    this.tags.clear();
  }
}
