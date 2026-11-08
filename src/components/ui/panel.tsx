import React from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  headerAction?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  title,
  headerAction,
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-[#171D23] border border-[#313B44] text-[#CFD8DE] font-mono ${className}`}
      {...props}
    >
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#313B44] bg-[#12171C]/50">
          <span className="text-xs uppercase tracking-wider text-[#93A0A8]">{title}</span>
          {headerAction}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};
