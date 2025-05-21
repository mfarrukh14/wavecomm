import React from 'react';
import { cn } from '../../lib/utils';

export default function Container({ children, className, ...props }) {
  return (
    <div 
      className={cn(
        "mx-auto max-w-7xl px-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}