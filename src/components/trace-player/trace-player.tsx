'use client';

import React, { useState } from 'react';
import { LessonTrace, TraceMode } from '@/contracts/trace';
import { LogStrip } from './log-strip';
import { Panel } from '@/components/ui/panel';
import { Button } from '@/components/ui/button';

interface TracePlayerProps {
  trace: LessonTrace;
  onStepSelect?: (stepIndex: number) => void;
}

export const TracePlayer: React.FC<TracePlayerProps> = ({ trace, onStepSelect }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [mode, setMode] = useState<TraceMode>(trace.mode);

  const steps = trace.steps || [];
  const activeStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextIndex);
      onStepSelect?.(nextIndex);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      onStepSelect?.(prevIndex);
    }
  };

  return (
    <div className="flex flex-col h-full border border-[#313B44] bg-[#12171C]">
      <Panel title={`Trace: ${trace.id}`} className="flex-1 border-0">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-[#6FB0D6]">{activeStep?.title || 'No step active'}</h3>
            <div className="flex gap-2">
              <Button onClick={handlePrev} disabled={currentStepIndex === 0}>
                Prev
              </Button>
              <Button onClick={handleNext} disabled={currentStepIndex >= steps.length - 1} variant="primary">
                Next
              </Button>
            </div>
          </div>
          <p className="text-sm text-[#93A0A8]">{activeStep?.description}</p>
        </div>
      </Panel>

      <LogStrip
        mode={mode}
        onModeChange={setMode}
        currentStep={currentStepIndex + 1}
        totalSteps={steps.length}
      />
    </div>
  );
};
