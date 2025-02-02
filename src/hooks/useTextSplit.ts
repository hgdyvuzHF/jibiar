import { useEffect, useRef } from 'react';

interface SplitTextOptions {
  type?: 'chars' | 'words';
  animation?: 'fadeIn' | 'slideUp' | 'scaleUp';
}

export const useTextSplit = ({ type = 'chars', animation = 'fadeIn' }: SplitTextOptions = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const text = element.textContent || '';
    element.textContent = '';
    
    const items = type === 'chars' 
      ? text.split('')
      : text.split(' ');

    items.forEach((item, index) => {
      const span = document.createElement('span');
      span.textContent = type === 'chars' ? item : `${item} `;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = animation === 'slideUp' ? 'translateY(2em)' : 'scale(0.5)';
      span.style.animation = `textReveal 0.5s ease-out forwards`;
      span.style.animationDelay = `${index * 0.05}s`;
      element.appendChild(span);
    });
  }, [type, animation]);

  return ref;
};