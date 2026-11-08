import React from 'react';
import { TraceMessage } from '@/contracts/trace';
import { Badge } from '@/components/ui/badge';

interface DecodedMessagePanelProps {
  message?: TraceMessage | null;
}

export const DecodedMessagePanel: React.FC<DecodedMessagePanelProps> = ({ message }) => {
  if (!message) {
    return (
      <div className="text-xs text-[#93A0A8]">Select a step to inspect payload.</div>
    );
  }

  return (
    <div className="flex flex-col gap-3 font-mono text-xs">
      <div className="flex items-center justify-between">
        <span className="text-[#93A0A8]">Routing:</span>
        <span className="text-[#6FB0D6]">{message.sender} ➔ {message.recipient}</span>
      </div>

      {message.taintTags && message.taintTags.length > 0 && (
        <div className="flex flex-wrap gap-1 items-center">
          <span className="text-[#93A0A8] mr-1">Taint:</span>
          {message.taintTags.map((tag) => (
            <Badge key={tag.id} status={tag.status} label={`${tag.status}: ${tag.source}`} />
          ))}
        </div>
      )}

      <div className="border border-[#313B44] bg-[#12171C] p-2 overflow-x-auto">
        <pre className="text-[#CFD8DE] whitespace-pre-wrap">
          {message.payload.raw}
        </pre>
      </div>
    </div>
  );
};
