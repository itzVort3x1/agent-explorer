import React from "react";
import type { LessonStep } from "@/contracts/lesson";

export const LESSON_STEPS: { key: LessonStep; label: string; color: string }[] = [
  { key: "watch", label: "Watch", color: "text-green" },
  { key: "break", label: "Break", color: "text-red" },
  { key: "patch", label: "Patch", color: "text-amber" },
  { key: "attack_again", label: "Attack Again", color: "text-blue" },
];

interface LessonStepperProps {
  activeIndex?: number;
}

export const LessonStepper: React.FC<LessonStepperProps> = ({
  activeIndex = 0,
}) => {
  return (
    <div className="flex items-center gap-1">
      {LESSON_STEPS.map((step, i) => (
        <React.Fragment key={step.key}>
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 border border-line text-xs ${
              i === activeIndex
                ? "bg-green/10 text-green border-green/30"
                : "text-muted"
            }`}
          >
            <span className="font-semibold">{i + 1}.</span>
            <span>{step.label}</span>
          </div>
          {i < LESSON_STEPS.length - 1 && (
            <span className="text-line text-xs">→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
