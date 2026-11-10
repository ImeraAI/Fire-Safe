import type { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer, FinalCta, PoweredByMango } from '@/components/landing-sections';
import { Icon } from '@/components/icon';
import { serviceCards, serviceGroups } from '@/content/services';
import { ServiceCardStrip } from './service-card-strip';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us | London Fire Safety Group · Powered by Mango',
  description: 'Meet London Fire Safety Group: a focused approach to fire assessments, inspections and property safety enquiries across London, powered by Mango.',
};

const principles = [
  { icon: 'people', title: 'People before process', body: 'Every building is used differently. We start with the people, activities and practical details that shape your property safety needs.' },
  { icon: 'shield', title: 'Clarity before commitment', body: 'Know the scope, price, availability and provider before you agree to a booking. A clear next step matters more than a rushed promise.' },
  { icon: 'building', title: 'The whole picture', body: 'Fire precautions, electrical checks and gas safety often need planning together. Share your existing reports and outstanding actions in one conversation.' },
  { icon: 'phone', title: 'Technology with a purpose', body: 'Mango gathers the practical details so your enquiry can move forward. The goal is simple: make asking for help feel easier.' },
];

const serviceCount = serviceGroups.reduce((count, group) => count + group.services.length, 0);

export default function AboutPage() {
  return <><Header /><main id="main">
    <section className={`container ${styles.hero}`}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">About us</span></nav>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <span className="eyebrow">ABOUT LONDON FIRE SAFETY GROUP</span>
          <h1>Safer buildings.<br /><span>Clearer next steps.</span></h1>
          <p>A home, a shared building or a busy workplace. Understanding your property’s safety needs starts with asking the right questions.</p>
          <p>London Fire Safety Group brings fire and property safety enquiries together, powered by Mango and shaped around the people responsible for the premises.</p>
          <a className="button button-dark" href="/contact">Let’s talk about your property <Icon name="arrow" /></a>
          <PoweredByMango />
        </div>
        <figure className={styles.heroPhoto}>
          <Image src="/images/london-fire-safety-hero-navy-red.png" alt="Fire safety professional handling a hose beside a London Fire Safety Group vehicle" fill sizes="(max-width: 760px) 100vw, 50vw" preload />
        </figure>
      </div>
    </section>

    <section className={`container ${styles.trackRecord}`} aria-label="Our service catalogue">
      <div><strong>{serviceCount}</strong><p>Safety services</p></div>
      <div><strong>{serviceGroups.length}</strong><p>Service categories</p></div>
      <div><strong>1</strong><p>Place to enquire</p></div>
      <p className={styles.statNote}>Figures describe the planned catalogue in this preview. Provider availability and service scope require confirmation.</p>
    </section>

    <section className={`section container ${styles.story}`}>
      <div><span className="eyebrow">OUR FOCUS</span><h2>London properties.<br />Safety priorities.<br /><span>A practical approach.</span></h2></div>
      <div><p className={styles.lead}>Property safety starts with understanding the building and the work it needs.</p><p>The occupancy, existing equipment, inspection records and access arrangements all matter. We are building an enquiry journey that brings these details together before a provider is appointed.</p><p>Our planned services cover fire risk assessments, doors, alarms, extinguishers and emergency lighting, alongside electrical checks, gas safety and specialist surveys.</p><p>Whether you look after one rental or several commercial premises, our aim is to make the next step clear. Suitability, scope, price and timing must be agreed before any work is arranged.</p></div>
    </section>

    <section className={styles.principles} aria-labelledby="about-principles-title"><div className="section container">
      <div className={styles.sectionIntro}><span className="eyebrow">WHAT WE STAND FOR</span><h2 id="about-principles-title">High standards.<br />Human priorities.</h2><p>Four principles behind the experience we’re building.</p></div>
      <div className={styles.principleGrid}>
        {principles.map((item, index) => <article className={styles.principle} key={item.title}>
          <div className={styles.principleMarker} aria-hidden="true">
            <Icon name={item.icon} />
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div><h3>{item.title}</h3><p>{item.body}</p></div>
        </article>)}
      </div>
    </div></section>

    <section className="section container" aria-labelledby="about-services-title">
      <div className={styles.serviceIntro}>
        <span className={styles.serviceEyebrow}>Our services</span>
        <h2 id="about-services-title" className={styles.serviceHeading}>Browse <span>safety</span> services</h2>
        <p>Explore fire, electrical, gas and property safety services.</p>
      </div>
      <p className={styles.swipeHint}>Swipe to see all {serviceGroups.length} categories <Icon name="arrow" /></p>
      <ServiceCardStrip>
        {serviceGroups.map(group => {
          const card = serviceCards[group.id];
          const titleId = `about-${group.id}-title`;
          const detailsId = `about-${group.id}-details`;
          return <li key={group.id}>
            <a className={styles.serviceCard} data-service={group.id} href={'/' + group.id} aria-labelledby={titleId} aria-describedby={detailsId}>
              <div className={styles.servicePreview}>
                <div className={styles.servicePhoto}>
                  <Image src={card.image} alt="" fill sizes="(max-width: 500px) 84vw, (max-width: 760px) 420px, (max-width: 1000px) 48vw, (max-width: 1360px) 24vw, 310px" />
                </div>
                <div className={styles.serviceCopy}>
                  <span className={styles.serviceBadge}><Icon name={card.icon} /></span>
                  <h3 id={titleId}>{card.title}</h3>
                  <div className={styles.serviceSummary}>
                    <p>{card.summary}</p>
                    <span className={styles.serviceArrow}><Icon name="arrow" /></span>
                  </div>
                </div>
              </div>
              <div className={styles.serviceDetails}>
                <span className={styles.serviceMeta} aria-hidden="true">Safety services</span>
                <strong className={styles.serviceTitle} aria-hidden="true">{card.title}</strong>
                <p id={detailsId}>{group.description}</p>
                <span className={styles.serviceCount} aria-hidden="true"><strong>{group.services.length}</strong> services to explore</span>
                <span className={styles.serviceAction} aria-hidden="true">Explore services <Icon name="arrow" /></span>
              </div>
            </a>
          </li>;
        })}
      </ServiceCardStrip>
      <div className={styles.promise}><Icon name="check" /><p>Your requirements come first. Provider availability, scope, price and booking details are confirmed before work is arranged.</p></div>
    </section>
    <FinalCta />
  </main><Footer /></>;
}
