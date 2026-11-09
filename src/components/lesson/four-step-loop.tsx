import React from "react";
import { Panel } from "@/components/ui/panel";

const STEPS = [
  {
    number: "1.",
    title: "Watch",
    color: "text-green",
    description: "Animated trace of messages between user, agent, and tools.",
  },
  {
    number: "2.",
    title: "Break",
    color: "text-red",
    description: "Execute the exploit in a safe simulator.",
  },
  {
    number: "3.",
    title: "Patch",
    color: "text-amber",
    description: "Enable a security defense.",
  },
  {
    number: "4.",
    title: "Attack Again",
    color: "text-blue",
    description: "Verify the defense holds.",
  },
];

export const FourStepLoop: React.FC = () => {
  return (
    <Panel title="The 4-Step Loop">
      <ol className="space-y-3 text-xs">
        {STEPS.map((step) => (
          <li key={step.number} className="flex items-start gap-2">
            <span className={`${step.color} font-semibold shrink-0`}>
              {step.number}
            </span>
            <div>
              <span className="font-semibold text-text">{step.title}</span>
              <span className="text-muted"> — {step.description}</span>
            </div>
          </li>
        ))}
      </ol>
    </Panel>
  );
};
