import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'outline',
  children,
  className = '',
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-[#5FC994] text-[#12171C] font-semibold hover:bg-[#5FC994]/90',
    outline: 'border border-[#313B44] text-[#CFD8DE] hover:bg-[#313B44]/30',
    danger: 'border border-[#E36F7C] text-[#E36F7C] hover:bg-[#E36F7C]/10',
  }[variant];

  return (
    <button
      className={`min-h-[44px] px-4 py-2 font-mono text-sm transition-colors rounded-none cursor-pointer disabled:opacity-50 ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
