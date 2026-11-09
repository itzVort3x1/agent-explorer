import React from "react";
import { Badge } from "@/components/ui/badge";

interface LessonHeaderProps {
  order?: number | string;
  durationMinutes?: number;
  title: string;
  summary: string;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
  order = "?",
  durationMinutes = 10,
  title,
  summary,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted">Lesson {order}</span>
        <Badge status="SAFE" label={`~${durationMinutes} min`} />
      </div>
      <h1 className="text-xl font-bold text-text tracking-tight">{title}</h1>
      <p className="text-sm text-muted leading-relaxed">{summary}</p>
    </div>
  );
};
