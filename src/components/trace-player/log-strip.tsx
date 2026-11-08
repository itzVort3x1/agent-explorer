import React from 'react';
import { TraceMode } from '@/contracts/trace';

interface LogStripProps {
  mode: TraceMode;
  onModeChange?: (mode: TraceMode) => void;
  currentStep: number;
  totalSteps: number;
}

export const LogStrip: React.FC<LogStripProps> = ({
  mode,
  onModeChange,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex items-center justify-between border-t border-[#313B44] bg-[#171D23] px-4 py-2 font-mono text-xs">
      <div className="flex items-center gap-2">
        <span className="text-[#93A0A8]">Mode:</span>
        {(['normal', 'attack', 'defended'] as TraceMode[]).map((m) => (
          <button
            key={m}
            onClick={() => onModeChange?.(m)}
            className={`px-2 py-1 uppercase text-xs border cursor-pointer ${
              mode === m
                ? 'border-[#5FC994] text-[#5FC994] bg-[#5FC994]/10'
                : 'border-[#313B44] text-[#93A0A8] hover:text-[#CFD8DE]'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="text-[#93A0A8]">
        Step <span className="text-[#CFD8DE]">{currentStep}</span> / {totalSteps}
      </div>
    </div>
  );
};
