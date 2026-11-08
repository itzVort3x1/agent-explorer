import React from "react";

interface StageZoneProps {
  children?: React.ReactNode;
}

export const StageZone: React.FC<StageZoneProps> = ({ children }) => {
  return (
    <main className="flex-1 flex flex-col p-6 bg-bg overflow-y-auto font-mono">
      {children}
    </main>
  );
};
