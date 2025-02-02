import { useRef, useState, useEffect } from 'react';

interface Transform3D {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export const use3DEffect = (intensity: number = 10) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<Transform3D>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity;
      const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * intensity;

      setTransform({
        rotateX,
        rotateY,
        scale: 1.05,
      });
    };

    const handleMouseLeave = () => {
      setTransform({
        rotateX: 0,
        rotateY: 0,
        scale: 1,
      });
    };

    const handleMouseEnter = () => {
      element.style.transition = 'none';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
        element.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [intensity]);

  return { ref, transform };
};