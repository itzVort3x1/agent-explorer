import React from 'react';
import { Panel } from '@/components/ui/panel';

interface QuickStartPanelProps {
  className?: string;
}

/**
 * Reusable Quick Start guide panel component.
 */
export const QuickStartPanel: React.FC<QuickStartPanelProps> = ({ className = '' }) => {
  return (
    <Panel title="Quick Start" className={className}>
      <p className="text-xs text-muted leading-relaxed">
        Pick a lesson from the left sidebar or the cards on this page. Each
        lesson takes about 10 minutes. No account needed — progress is
        saved in your browser.
      </p>
    </Panel>
  );
};
