import React from 'react';

interface InboxEditorProps {
  value: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
}

export const InboxEditor: React.FC<InboxEditorProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-2 font-mono text-xs">
      <div className="text-[#93A0A8] uppercase tracking-wider font-semibold">
        Email Payload Editor
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        rows={8}
        className="w-full bg-[#12171C] border border-[#313B44] p-3 text-[#CFD8DE] font-mono text-xs focus:outline-none focus:border-[#6FB0D6] resize-none"
        placeholder="Craft email content to attack the agent..."
      />
    </div>
  );
};
