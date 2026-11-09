import React from "react";
import Link from "next/link";
import { Panel } from "@/components/ui/panel";

interface ChallengeCardProps {
  href?: string;
  title: string;
  description: string;
  levelCount?: number | string;
  icon?: string;
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  href = "/challenges/inbox-hacker",
  title,
  description,
  levelCount = "5 levels",
  icon = "⚡",
}) => {
  const displayLevels =
    typeof levelCount === "number" ? `${levelCount} levels` : levelCount;

  return (
    <Link href={href} className="group block">
      <Panel>
        <div className="flex items-start gap-4">
          <span className="text-lg shrink-0 w-8 text-center">{icon}</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-text group-hover:text-red transition-colors">
              {title}
            </div>
            <div className="text-xs text-muted mt-1 leading-relaxed">
              {description}
            </div>
          </div>
          <span className="text-xs text-muted shrink-0">{displayLevels}</span>
        </div>
      </Panel>
    </Link>
  );
};
