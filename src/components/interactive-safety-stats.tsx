'use client';

import { useEffect, useRef, useState } from 'react';
import { serviceGroups } from '@/content/services';
import styles from './us-track-record.module.css';

const figures = [
  { value: serviceGroups.reduce((total, group) => total + group.services.length, 0), label: 'Safety services to explore' },
  { value: serviceGroups.length, label: 'Service categories' },
  { value: 1, label: 'Place to start your enquiry' },
];

export function InteractiveSafetyStats() {
  const section = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const element = section.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || reducedMotion.matches || !('IntersectionObserver' in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      setProgress(0);
      const tick = (now: number) => {
        const elapsed = Math.min((now - start) / 1000, 1);
        setProgress(1 - Math.pow(1 - elapsed, 3));
        if (elapsed < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    const stopMotion = () => {
      if (!reducedMotion.matches) return;
      cancelAnimationFrame(frame);
      observer.disconnect();
      setProgress(1);
    };
    reducedMotion.addEventListener('change', stopMotion);
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener('change', stopMotion);
    };
  }, []);

  return <div className={styles.figures} ref={section}>
    {figures.map(figure => <article className={styles.figure} key={figure.label}>
      <strong className={styles.value}><span className={styles.srOnly}>{figure.value}</span><span className={styles.counter} aria-hidden="true">{Math.round(figure.value * progress)}</span></strong>
      <h3>{figure.label}</h3>
    </article>)}
  </div>;
}
