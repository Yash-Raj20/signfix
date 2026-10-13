'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'default' // Exactly matches screenshot: white pill, subtle soft border, elegant indigo text & gentle shadow
  | 'indigo'
  | 'amber'
  | 'warning'
  | 'dark'
  | 'outline'
  | 'subtle';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  dot?: boolean;
  dotColor?: string;
  uppercase?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  // Theme-based glassy pill with black text and soft ambient shadow
  default:
    'bg-white/75 backdrop-blur-sm text-[#07182d] font-semibold border border-black/[0.08] shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:bg-white/90 hover:border-black/15 transition-all',
  indigo:
    'bg-white/80 backdrop-blur-sm text-[#3730a3] font-semibold border border-[#e0e7ff] shadow-[0_4px_16px_rgba(79,70,229,0.06)]',
  amber:
    'bg-amber-500/[0.08] backdrop-blur-sm text-[#b45309] font-semibold border border-amber-500/20 shadow-[0_4px_16px_rgba(245,158,11,0.08)]',
  warning:
    'bg-amber-500/[0.08] backdrop-blur-sm text-[#b45309] font-semibold border border-amber-500/20 shadow-[0_4px_16px_rgba(245,158,11,0.08)]',
  dark:
    'bg-[#07182d]/90 backdrop-blur-sm text-white font-semibold border border-white/15 shadow-[0_4px_18px_rgba(0,0,0,0.25)]',
  outline:
    'bg-transparent text-[#07182d] font-semibold border border-black/15 shadow-none hover:bg-black/[0.03]',
  subtle:
    'bg-black/[0.04] backdrop-blur-sm text-[#07182d] font-semibold border border-black/[0.06] shadow-xs',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-[11px] px-3.5 py-1 gap-1.5',
  md: 'text-xs px-4.5 py-1.5 gap-2',
  lg: 'text-sm px-5.5 py-2 gap-2.5',
};

export function Badge({
  variant = 'default',
  size = 'md',
  icon,
  dot = false,
  dotColor,
  uppercase = true,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-3xl font-medium transition-all duration-200 select-none tracking-wide',
        uppercase && 'uppercase tracking-wider',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-2 h-2 rounded-full animate-pulse shrink-0',
            dotColor ||
              (variant === 'indigo'
                ? 'bg-[#4338ca]'
                : 'bg-[#f59e0b] shadow-[0_0_8px_#ffb020]')
          )}
        />
      )}
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

export default Badge;
