import React from "react";
import fs from "fs";
import path from "path";
import { Shell } from "@/components/layout/shell";
import { Panel } from "@/components/ui/panel";
import { ChallengeHeader, LevelCard } from "@/components/challenge";
import type { ChallengeLevel } from "@/components/challenge";
import { getAllLessons } from "@/lib/lessons";

interface InboxData {
  id: string;
  title: string;
  description: string;
  levels: ChallengeLevel[];
}

function loadLevels(): InboxData {
  const filePath = path.join(
    process.cwd(),
    "content",
    "challenges",
    "inbox-hacker",
    "levels.json"
  );
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export default function InboxHackerPage() {
  const lessons = getAllLessons();
  const data = loadLevels();

  return (
    <Shell
      lessons={lessons}
      stageContent={
        <div className="flex flex-col gap-6 max-w-3xl">
          {/* Header */}
          <ChallengeHeader
            title={data.title}
            description={data.description}
          />

          {/* Level cards */}
          <div className="grid gap-3">
            {data.levels.map((level) => (
              <LevelCard key={level.level} level={level} />
            ))}
          </div>

          {/* Inbox editor placeholder */}
          <Panel title="Inbox Editor">
            <div className="flex items-center justify-center h-32 text-muted text-xs">
              Compose your attack email payload here. The toy agent will process
              it through the defense pipeline.
            </div>
          </Panel>
        </div>
      }
      detailsContent={
        <div className="flex flex-col gap-4">
          <Panel title="Agent Execution Log">
            <div className="text-xs text-muted leading-relaxed">
              Submit an attack to see the toy agent&apos;s step-by-step
              execution, taint propagation, and defense pipeline results.
            </div>
          </Panel>

          <Panel title="Defense Pipeline">
            <div className="text-xs text-muted leading-relaxed">
              The active defenses for each level are shown here. As you
              progress, more defenses are enabled.
            </div>
          </Panel>
        </div>
      }
    />
  );
}
