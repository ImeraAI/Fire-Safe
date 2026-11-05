import type { Metadata } from 'next';
import { Header, Footer, PoweredByMango } from '@/components/landing-sections';
import { LeadForm } from '@/components/lead-form';
import { Icon } from '@/components/icon';
import { pilot } from '@/content/landing';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | London Fire Safety Group',
  description: 'Enquire about fire and property safety services in London. Share your property details and request an AI callback.',
};

export default function ContactPage() {
  return <><Header /><main id="main" className={styles.main}><div className={`container ${styles.layout}`}>
    <header className={styles.intro}><span className="eyebrow">CONTACT US</span><h1>Your safety questions.<br /><span>A clear starting point.</span></h1><p>Tell us about your London property, your safety priorities and any checks or inspections you need.</p></header>
    <div className={styles.form}><LeadForm /></div>
    <aside className={styles.support} aria-label="Contact and enquiry information">
      <div className={styles.contactLinks}>
        {pilot.phone && <a href={`tel:${pilot.phone}`}><Icon name="phone" /><span><small>Give us a call</small><strong>{pilot.phoneLabel}</strong></span><Icon name="arrow" /></a>}
        <a href={`mailto:${pilot.email}`}><Icon name="mail" /><span><small>Send us an email</small><strong>{pilot.email}</strong></span><Icon name="arrow" /></a>
      </div>
      <p className={styles.assurance}><Icon name="shield" />Scope, price and availability agreed before booking.</p>
      <PoweredByMango />
    </aside>
  </div></main><Footer /></>;
}
