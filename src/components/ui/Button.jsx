import React from 'react';
import { cn } from '../../lib/utils';

export default function Button({ 
  children, 
  variant = 'primary', 
  className,
  ...props 
}) {
  const baseStyles = "w-40 h-10 rounded-xl text-sm font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-black border dark:border-white border-transparent text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-black hover:bg-gray-100"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}