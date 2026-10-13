'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asLink?: boolean;
  href?: string;
  external?: boolean;
  className?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  children: React.ReactNode;
}

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseButtonProps {
  icon: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

// Consistent styles adhering strictly to max rounded-lg
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3.5 py-2 gap-1.5 rounded-3xl',
  md: 'text-sm px-5 py-2.5 gap-2 rounded-3xl',
  lg: 'text-base px-6 py-3.5 gap-2.5 rounded-3xl',
  xl: 'text-lg px-8 py-4 gap-3 rounded-3xl',
};

const iconOnlySizeStyles: Record<ButtonSize, string> = {
  sm: 'w-8 h-8 p-1.5 rounded-lg',
  md: 'w-10 h-10 p-2 rounded-lg',
  lg: 'w-12 h-12 p-2.5 rounded-lg',
  xl: 'w-14 h-14 p-3 rounded-lg',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-led text-ink font-bold hover:bg-[#ffba38] active:bg-[#e69b14] shadow-sm border border-transparent',
  secondary:
    'bg-white text-ink font-semibold hover:bg-slate-50 border border-slate-300/80 shadow-xs active:bg-slate-100',
  dark:
    'bg-ink text-paper font-semibold hover:bg-deep active:bg-slate-900 border border-white/10 shadow-sm',
  outline:
    'bg-transparent text-ink font-semibold border border-ink/20 hover:border-ink/50 hover:bg-ink/[0.04] active:bg-ink/[0.08]',
  ghost:
    'bg-transparent text-ink/80 hover:text-ink hover:bg-black/[0.05] active:bg-black/[0.08]',
};

const baseInteractiveStyles =
  'group inline-flex items-center justify-center  tracking-wide transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-led focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform ';

/**
 * 1. Standard Button Component (Normal Button across all sizes, max rounded-lg)
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      asLink = false,
      href,
      external = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const combinedClassName = cn(
      baseInteractiveStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const isLink = asLink || Boolean(href);
    const isExternal = external ?? (href ? href.startsWith('http') : false);

    if (isLink && href) {
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * 2. Icon Button Component (With Icon support: left/right/icon-only, max rounded-lg)
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      iconPosition = 'right',
      variant = 'primary',
      size = 'md',
      asLink = false,
      href,
      external,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isIconOnly = !children;
    const combinedClassName = cn(
      baseInteractiveStyles,
      variantStyles[variant],
      isIconOnly ? iconOnlySizeStyles[size] : sizeStyles[size],
      className
    );

    const content = (
      <>
        {iconPosition === 'left' && (
          <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        {children && <span>{children}</span>}
        {iconPosition === 'right' && (
          <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    const isLink = asLink || Boolean(href);
    const isExternal = external ?? (href ? href.startsWith('http') : false);

    if (isLink && href) {
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {content}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
