import React from "react";
import { Panel } from "@/components/ui/panel";

export interface ChallengeLevel {
  level: number;
  title: string;
  mission: string;
  targetGoal: string;
  defense: string;
}

interface LevelCardProps {
  level: ChallengeLevel;
}

export const LevelCard: React.FC<LevelCardProps> = ({ level }) => {
  return (
    <Panel>
      <div className="flex items-start gap-4">
        <span className="text-lg font-bold text-red/40 shrink-0 w-8 text-right">
          {String(level.level).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-text">{level.title}</div>
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
  );
};
