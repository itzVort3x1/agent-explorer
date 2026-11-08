import React from 'react';
import { TaintStatus } from '@/contracts/taint';

interface BadgeProps {
  status: TaintStatus;
  label?: string;
}

const statusStyles: Record<TaintStatus, string> = {
  SAFE: 'bg-[#5FC994]/10 text-[#5FC994] border-[#5FC994]/40',
  PASSED: 'bg-[#5FC994]/10 text-[#5FC994] border-[#5FC994]/40',
  UNTRUSTED: 'bg-[#E36F7C]/10 text-[#E36F7C] border-[#E36F7C]/40',
  TAINTED: 'bg-[#E36F7C]/10 text-[#E36F7C] border-[#E36F7C]/40',
  BLOCKED: 'bg-[#D5AE55]/10 text-[#D5AE55] border-[#D5AE55]/40',
};

export const Badge: React.FC<BadgeProps> = ({ status, label }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-mono border rounded-none tracking-wider ${statusStyles[status]}`}
    >
      {label || status}
    </span>
  );
};
