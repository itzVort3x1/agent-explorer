import React from "react";
import fs from "fs";
import path from "path";
import { Shell } from "@/components/layout/shell";
import { Panel } from "@/components/ui/panel";
import { getAllLessons } from "@/lib/lessons";

interface InboxLevel {
  level: number;
  title: string;
  mission: string;
  targetGoal: string;
  defense: string;
}

interface InboxData {
  id: string;
  title: string;
  description: string;
  levels: InboxLevel[];
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
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted">Challenge</span>
            <h1 className="text-xl font-bold text-text tracking-tight">
              {data.title}
            </h1>
            <p className="text-sm text-muted leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Level cards */}
          <div className="grid gap-3">
            {data.levels.map((level) => (
              <Panel key={level.level}>
                <div className="flex items-start gap-4">
                  <span className="text-lg font-bold text-red/40 shrink-0 w-8 text-right">
                    {String(level.level).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-text">
                      {level.title}
                    </div>
                    <div className="text-xs text-muted mt-1 leading-relaxed">
                      {level.mission}
                    </div>
                    <div className="text-xs text-muted mt-2 flex items-center gap-2">
                      <span className="text-amber">Defense:</span>
                      <span>{level.defense}</span>
                    </div>
                  </div>
                </div>
              </Panel>
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
