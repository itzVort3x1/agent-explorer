import React from 'react';

interface DetailsZoneProps {
  children?: React.ReactNode;
}

export const DetailsZone: React.FC<DetailsZoneProps> = ({ children }) => {
  return (
    <aside className="w-80 border-l border-[#313B44] bg-[#171D23] p-4 flex flex-col gap-4 font-mono overflow-y-auto">
      <div className="text-xs text-[#93A0A8] uppercase tracking-wider font-semibold">
        Details & Decoded Log
      </div>
      {children}
    </aside>
  );
};
