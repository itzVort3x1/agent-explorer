import React from "react";

interface DetailsZoneProps {
  children?: React.ReactNode;
}

export const DetailsZone: React.FC<DetailsZoneProps> = ({ children }) => {
  return (
    <aside className="w-80 shrink-0 border-l border-line bg-panel p-4 flex flex-col gap-4 font-mono overflow-y-auto">
      <div className="text-[10px] text-muted uppercase tracking-widest font-semibold">
        Details &amp; Decoded Log
      </div>
      {children}
    </aside>
  );
};
