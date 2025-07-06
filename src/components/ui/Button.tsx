import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants = {
    primary: 'bg-gradient-to-r from-[var(--navaidix-amber)] to-[var(--navaidix-orange)] hover:from-[var(--navaidix-dark-amber)] hover:to-[var(--navaidix-orange-dark)] text-white shadow-lg focus:ring-[var(--navaidix-amber)]',
    secondary: 'bg-gradient-to-r from-[var(--navaidix-white)] to-[var(--navaidix-light-slate)] hover:from-[var(--navaidix-light-slate)] hover:to-[var(--navaidix-orange-light)] text-[var(--navaidix-slate)] border border-[var(--navaidix-amber)] focus:ring-[var(--navaidix-amber)]',
    outline: 'border-2 border-[var(--navaidix-amber)] text-[var(--navaidix-amber)] hover:bg-[var(--navaidix-amber)] hover:text-white focus:ring-[var(--navaidix-amber)]',
    ghost: 'text-[var(--navaidix-amber)] hover:bg-[var(--navaidix-light-slate)] focus:ring-[var(--navaidix-amber)]'
  };
  
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-13 px-8 text-lg'
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
