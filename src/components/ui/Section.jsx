import React from 'react';
import { cn } from '../../lib/utils';

export default function Section({ 
  children, 
  className,
  ...props 
}) {
  return (
    <section 
      className={cn(
        "min-h-screen flex items-center justify-center w-full",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}