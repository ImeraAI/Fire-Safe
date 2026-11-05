'use client';

import { useId, useState } from 'react';
import styles from './how-it-works.module.css';

export function JourneySteps({ steps }: { steps: readonly { title: string; body: string }[] }) {
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const id = useId();

  return <ol className={styles.steps}>{steps.map((step, index) => {
    const expanded = activeStep === index;
    const triggerId = `${id}-step-${index}`;
    const panelId = `${id}-panel-${index}`;

    return <li className={styles.step} data-active={expanded} key={step.title}>
      <h3><button className={styles.stepTrigger} id={triggerId} type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setActiveStep(expanded ? null : index)}>
        <span className={styles.number} aria-hidden="true">0{index + 1}</span>
        <span>{step.title}</span>
        <svg className={styles.chevron} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button></h3>
      <div className={styles.panel} id={panelId} role="region" aria-labelledby={triggerId} aria-hidden={!expanded} inert={!expanded}>
        <div className={styles.panelInner}><p>{step.body}</p></div>
      </div>
    </li>;
  })}</ol>;
}
