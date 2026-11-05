'use client';

import { audiences } from '@/content/audiences';
import { Icon } from './icon';
import styles from './audience-cards.module.css';

export function AudienceCards() {
  return <>
    <div className={styles.cards}>
      {audiences.map(audience => <article className={styles.card} key={audience.id}>
        <Icon className={styles.icon} name={audience.icon} />
        <h3>{audience.name}</h3>
        <p>{audience.summary}</p>
        <ul>{audience.points.map(point => <li key={point}><Icon name="check" />{point}</li>)}</ul>
        <a className={styles.cta} href={`/contact?audience=${encodeURIComponent(audience.id)}&service=${encodeURIComponent(audience.service)}`}>{audience.cta}<Icon name="arrow" /></a>
      </article>)}
    </div>
    <div className={styles.bottom}><a href="#services">Find the right service for you<Icon name="arrow" /></a><p>One property or several, start with what you need. Availability and booking details are confirmed before work is arranged.</p></div>
  </>;
}
