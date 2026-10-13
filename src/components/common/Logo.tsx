import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = true,
  theme = 'light',
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
  };

  const isLight = theme === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo Badge Icon */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0c243f] to-[#040e1c] border border-amber-brand/40 shadow-sm shrink-0 overflow-hidden group`}
      >
        {/* Subtle interior glow */}
        <div className="absolute inset-0 bg-amber-brand/15 opacity-80 group-hover:opacity-100 transition-opacity" />

        {/* SignFix Spanner & Illuminating Sign Tool SVG */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-amber-brand relative z-10 drop-shadow-[0_0_6px_rgba(255,176,0,0.8)]"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          <circle cx="18" cy="6" r="1.5" className="fill-amber-brand stroke-none" />
        </svg>

        {/* Diagonal light reflection shimmer */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/20 rotate-45 transform pointer-events-none group-hover:translate-x-8 transition-transform duration-700" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div
          className={`font-black tracking-tight ${textSizes[size]} flex items-center ${
            isLight ? 'text-[#101820]' : 'text-white'
          }`}
        >
          <span>Sign</span>
          <span className="text-amber-brand ml-0.5 relative">
            Fix
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-brand ml-0.5 animate-pulse" />
          </span>
        </div>
        {showTagline && (
          <span
            className={`font-semibold tracking-[0.16em] uppercase mt-0.5 ${subSizes[size]} ${
              isLight ? 'text-[#64748b]' : 'text-[#8fa3b5]'
            }`}
          >
            All Signage Solutions
          </span>
        )}
      </div>
    </div>
  );
};
