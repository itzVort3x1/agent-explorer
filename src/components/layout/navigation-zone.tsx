import React from 'react';

interface NavigationZoneProps {
  children?: React.ReactNode;
}

export const NavigationZone: React.FC<NavigationZoneProps> = ({ children }) => {
  return (
    <aside className="w-64 border-r border-[#313B44] bg-[#171D23] p-4 flex flex-col gap-4 font-mono">
      <div className="text-xs text-[#93A0A8] uppercase tracking-wider font-semibold">
        Navigation
      </div>
      {children}
    </aside>
  );
};
