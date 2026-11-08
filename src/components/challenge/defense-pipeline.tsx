import React from 'react';
import { DefenseOption } from '@/contracts/challenge';

interface DefensePipelineProps {
  defenses: DefenseOption[];
  onToggleDefense?: (id: string, enabled: boolean) => void;
}

export const DefensePipeline: React.FC<DefensePipelineProps> = ({
  defenses,
  onToggleDefense,
}) => {
  return (
    <div className="flex flex-col gap-2 font-mono text-xs">
      <div className="text-[#93A0A8] uppercase tracking-wider font-semibold">
        Defense Pipeline
      </div>
      {defenses.map((d) => (
        <label
          key={d.id}
          className="flex items-center justify-between p-2 border border-[#313B44] bg-[#171D23] cursor-pointer hover:border-[#6FB0D6]"
        >
          <span className="text-[#CFD8DE]">{d.name}</span>
          <input
            type="checkbox"
            checked={d.enabled}
            onChange={(e) => onToggleDefense?.(d.id, e.target.checked)}
            className="accent-[#5FC994]"
          />
        </label>
      ))}
    </div>
  );
};
