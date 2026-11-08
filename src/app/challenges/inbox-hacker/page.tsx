import React from 'react';
import { Shell } from '@/components/layout/shell';
import { Panel } from '@/components/ui/panel';

export default function InboxHackerPage() {
  return (
    <Shell
      navContent={
        <div className="flex flex-col gap-2 text-xs">
          <span className="text-[#6FB0D6] font-semibold">Inbox Hacker</span>
          <div className="text-[#93A0A8]">Levels (1 - 5):</div>
          <ol className="list-decimal list-inside space-y-1 text-[#CFD8DE]">
            <li>Direct Override</li>
            <li>Keyword Filter</li>
            <li>Boundary Delimiters</li>
            <li>Approval Gate</li>
            <li>Multi-Hop Poisoning</li>
          </ol>
        </div>
      }
      stageContent={
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-[#CFD8DE]">Inbox Hacker: Level 1</h1>
          <Panel title="Mission Stage">
            <p className="text-sm text-[#93A0A8]">
              Send an email payload to test the toy agent defense pipeline.
            </p>
          </Panel>
        </div>
      }
      detailsContent={
        <div className="text-xs text-[#93A0A8]">
          Agent execution logs and taint status.
        </div>
      }
    />
  );
}
