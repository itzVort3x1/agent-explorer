import React from 'react';
import { Shell } from '@/components/layout/shell';
import { Panel } from '@/components/ui/panel';

interface LessonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Pre-build static lesson pages as specified in PRD Section 9:
 * "Fast. Lesson pages are pre-built."
 */
export function generateStaticParams() {
  return [
    { slug: '01-tool-calling' },
    { slug: '02-mcp-handshake' },
    { slug: '03-prompt-injection' },
    { slug: '04-tool-poisoning' },
    { slug: '05-data-exfiltration' },
  ];
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;

  return (
    <Shell
      navContent={
        <div className="flex flex-col gap-2 text-xs">
          <span className="text-[#6FB0D6] font-semibold">{slug}</span>
          <div className="text-[#93A0A8]">4-Step Cycle:</div>
          <ul className="space-y-1 text-[#CFD8DE]">
            <li>1. Watch</li>
            <li>2. Break</li>
            <li>3. Patch</li>
            <li>4. Attack Again</li>
          </ul>
        </div>
      }
      stageContent={
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-[#CFD8DE]">Lesson: {slug}</h1>
          <Panel title="Stage">
            <p className="text-sm text-[#93A0A8]">
              Lesson trace player and animation stage for {slug}.
            </p>
          </Panel>
        </div>
      }
      detailsContent={
        <div className="text-xs text-[#93A0A8]">
          Decoded message and taint tags panel.
        </div>
      }
    />
  );
}
