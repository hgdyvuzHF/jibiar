import React from 'react';
import { useTextSplit } from '../hooks/useTextSplit';

interface AnimatedTextProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  type?: 'chars' | 'words';
  animation?: 'fadeIn' | 'slideUp' | 'scaleUp';
}

export const AnimatedText = ({ 
  children, 
  as: Component = 'div',
  className = '',
  type = 'chars',
  animation = 'slideUp'
}: AnimatedTextProps) => {
  const ref = useTextSplit({ type, animation });

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
};