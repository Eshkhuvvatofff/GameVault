import { useEffect } from 'react';
import "./cursor.css"
const Cursor = () => {
  useEffect(() => {
    let trail: HTMLElement[] = [];
    const trailLength = 20;

    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.createElement('div');
      cursor.classList.add('cursor');
      document.body.appendChild(cursor);

      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      trail.push(cursor);

      if (trail.length > trailLength) {
        const oldCursor = trail.shift();
        oldCursor?.remove();
      }
    };

    const handleAnimationEnd = (e: AnimationEvent) => {
      if (e.target instanceof HTMLElement && e.target.classList.contains('cursor')) {
        e.target.remove();
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('animationend', handleAnimationEnd);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return null; // No need for any JSX since the effect is purely managed by the mouse events
};

export default Cursor;
