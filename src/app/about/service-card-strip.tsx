'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import styles from './page.module.css';

export function ServiceCardStrip({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const strip = stripRef.current;
    if (!track || !strip) return;

    const linkedScroll = window.matchMedia('(max-width: 760px) and (min-height: 480px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let offset = strip.scrollLeft;
    let appliedOffset = offset;

    const readProgress = () => {
      const trackBounds = track.getBoundingClientRect();
      const stripBounds = strip.getBoundingClientRect();
      const travel = trackBounds.height - stripBounds.height;
      if (travel <= 0) return 0;
      return Math.max(0, Math.min(1, (stripBounds.top - trackBounds.top) / travel));
    };
    let previousProgress = readProgress();

    const syncStrip = () => {
      frame = 0;
      const progress = readProgress();
      const change = progress - previousProgress;
      previousProgress = progress;
      if (!change || strip.querySelector(':focus-visible')) return;

      const limit = strip.scrollWidth - strip.clientWidth;
      if (strip.scrollLeft !== appliedOffset) offset = strip.scrollLeft;
      offset = Math.max(0, Math.min(limit, offset + change * limit));
      strip.scrollLeft = offset;
      appliedOffset = strip.scrollLeft;
    };

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(syncStrip);
    }

    function updateListener() {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
      frame = 0;
      previousProgress = readProgress();
      if (linkedScroll.matches) window.addEventListener('scroll', onScroll, { passive: true });
    }

    updateListener();
    linkedScroll.addEventListener('change', updateListener);
    return () => {
      window.removeEventListener('scroll', onScroll);
      linkedScroll.removeEventListener('change', updateListener);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className={styles.serviceTrack} ref={trackRef}>
    <ul className={styles.serviceGrid} ref={stripRef} role="list">{children}</ul>
  </div>;
}
