import React, { useState, useEffect } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleContainerProps {
  children: React.ReactNode;
  color?: string;
  duration?: number;
}

export const RippleContainer = ({ 
  children, 
  color = 'rgba(255, 206, 121, 0.3)', 
  duration = 850 
}: RippleContainerProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const cleanup = ripples.filter((ripple) => {
      return Date.now() - ripple.id < duration;
    });

    if (cleanup.length < ripples.length) {
      setRipples(cleanup);
    }

    const timer = setInterval(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => {
          return Date.now() - ripple.id < duration;
        })
      );
    }, duration);

    return () => clearInterval(timer);
  }, [ripples, duration]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipples([...ripples, { x, y, id: Date.now() }]);
  };

  return (
    <div 
      className="relative overflow-hidden"
      onClick={handleClick}
      style={{ isolation: 'isolate' }}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: color,
            animation: `ripple ${duration}ms linear`,
            pointerEvents: 'none',
          }}
        />
      ))}
      {children}
    </div>
  );
};