import { Icon } from './icon';
import styles from './us-track-record.module.css';
import { InteractiveSafetyStats } from './interactive-safety-stats';

const benefits = [
  { icon: 'shield', title: 'Safety needs in one place', body: 'Explore fire, electrical, gas and property survey enquiries.' },
  { icon: 'phone', title: 'Share your job details', body: 'At launch, our AI assistant will gather your property details, priorities and access requirements.' },
  { icon: 'shield', title: 'Confirm before booking', body: 'Agree scope, availability and price. An enquiry is not a booking.' },
  { icon: 'building', title: 'One home or a portfolio', body: 'Safety enquiries for homes, rental buildings and commercial premises.' },
];

export function CustomerHighlights() {
  return <div className={styles.proof}>
    <div className="section-heading centered">
      <span className="eyebrow">FIRE & PROPERTY SAFETY IN LONDON</span>
      <h2>Clear priorities.<br className={styles.mobileBreak} /> A practical next step.</h2>
      <p>Start with your premises, your records and the checks you need.</p>
    </div>
    <InteractiveSafetyStats />
    <p className={styles.note}>Catalogue figures describe this preview. Service and provider availability must be confirmed before booking.</p>
    <div className={styles.benefits}>{benefits.map(benefit => <article className={styles.card} key={benefit.title}><span className={styles.cardIcon}><Icon name={benefit.icon} /></span><h3>{benefit.title}</h3><p>{benefit.body}</p></article>)}</div>
    <div className={styles.action}><a className="button button-dark" href="/contact">Tell us what you need <Icon name="arrow" /></a></div>
  </div>;
}
