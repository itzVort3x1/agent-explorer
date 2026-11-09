import React from "react";
import Link from "next/link";
import { Panel } from "@/components/ui/panel";
import type { LessonMetadata } from "@/contracts/lesson";

interface LessonCardProps {
  lesson: LessonMetadata;
  href?: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  href = `/lessons/${lesson.slug}`,
}) => {
  return (
    <Link href={href} className="group block">
      <Panel>
        <div className="flex items-start gap-4">
          <span className="text-lg font-bold text-muted/40 shrink-0 w-8 text-right">
            {String(lesson.order).padStart(2, "0")}
          </span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-text group-hover:text-blue transition-colors">
              {lesson.title}
            </div>
            <div className="text-xs text-muted mt-1 leading-relaxed">
              {lesson.summary}
            </div>
          </div>
          <span className="text-xs text-muted shrink-0">
            ~{lesson.durationMinutes} min
          </span>
        </div>
      </Panel>
    </Link>
  );
};
