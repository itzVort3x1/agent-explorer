'use client';

import React, { useState } from 'react';
import { ChallengeDefinition, ChallengeEvaluationResult } from '@/contracts/challenge';
import { DefensePipeline } from './defense-pipeline';
import { InboxEditor } from './inbox-editor';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Panel } from '@/components/ui/panel';

interface ChallengeRunnerProps {
  challenge: ChallengeDefinition;
  onEvaluate?: (input: string, enabledDefenses: string[]) => Promise<ChallengeEvaluationResult>;
}

export const ChallengeRunner: React.FC<ChallengeRunnerProps> = ({
  challenge,
  onEvaluate,
}) => {
  const [input, setInput] = useState(challenge.initialInput);
  const [defenses, setDefenses] = useState(challenge.defenses);
  const [result, setResult] = useState<ChallengeEvaluationResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleToggleDefense = (id: string, enabled: boolean) => {
    setDefenses((prev) =>
      prev.map((d) => (d.id === id ? { ...d, enabled } : d))
    );
  };

  const handleRun = async () => {
    setIsRunning(true);
    const enabledIds = defenses.filter((d) => d.enabled).map((d) => d.id);
    if (onEvaluate) {
      const res = await onEvaluate(input, enabledIds);
      setResult(res);
    }
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col gap-4 font-mono text-xs">
      <Panel title={`Challenge: ${challenge.title}`}>
        <p className="text-[#CFD8DE] mb-2">{challenge.mission}</p>
        <div className="text-[#D5AE55] mb-4">Goal: {challenge.targetGoal}</div>

        <InboxEditor value={input} onChange={setInput} />

        <div className="mt-4">
          <DefensePipeline
            defenses={defenses}
            onToggleDefense={handleToggleDefense}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Button variant="primary" onClick={handleRun} disabled={isRunning}>
            {isRunning ? 'Evaluating...' : 'Run Attack'}
          </Button>
          {result && (
            <Badge status={result.status} label={result.status} />
          )}
        </div>
      </Panel>
    </div>
  );
};
