import type { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer, FinalCta, PoweredByMango } from '@/components/landing-sections';
import { Icon } from '@/components/icon';
import { serviceGroups } from '@/content/services';
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
          <Image src="/images/london-home-services-hero.png" alt="Service professional with moving boxes beside a vehicle outside a home" fill sizes="(max-width: 760px) 100vw, 50vw" preload />
        </figure>
      </div>
    </section>

    <section className={`container ${styles.trackRecord}`} aria-label="Our service catalogue">
      <div><strong>15</strong><p>Safety services to explore</p></div>
      <div><strong>4</strong><p>Service categories</p></div>
      <div><strong>1</strong><p>Place to start your enquiry</p></div>
      <p className={styles.statNote}>Figures describe the planned catalogue in this preview. Provider availability and service scope require confirmation.</p>
    </section>

    <section className={`section container ${styles.story}`}>
      <div><span className="eyebrow">OUR FOCUS</span><h2>London properties.<br />Safety priorities.<br /><span>A practical approach.</span></h2></div>
      <div><p className={styles.lead}>Property safety starts with understanding the building and the work it needs.</p><p>The occupancy, existing equipment, inspection records and access arrangements all matter. We are building an enquiry journey that brings these details together before a provider is appointed.</p><p>Our planned services cover fire risk assessments, doors, alarms, extinguishers and emergency lighting, alongside electrical checks, gas safety and specialist surveys.</p><p>Whether you look after one rental or several commercial premises, our aim is to make the next step clear. Suitability, scope, price and timing must be agreed before any work is arranged.</p></div>
    </section>

    <section className={styles.principles}><div className="section container">
      <div className={styles.sectionIntro}><span className="eyebrow">WHAT WE STAND FOR</span><h2>High standards.<br />Human priorities.</h2><p>Four principles behind the experience we’re building.</p></div>
      <div className={styles.principleGrid}>{principles.map(item => <article key={item.title}><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
    </div></section>

    <section className="section container">
      <div className={styles.serviceIntro}><div><span className="eyebrow">OUR SERVICES</span><h2>Connected safety needs.<br />One starting point.</h2></div><p>For residents, landlords, HMO owners, agents and businesses. Start with your premises, current records and safety priorities.</p></div>
      <div className={styles.serviceGrid}>
        {serviceGroups.map(group => <a key={group.id} href={'/' + group.id}><Icon name={group.icon} /><span>{group.name.toUpperCase()}</span><h3>{group.heading}</h3><p>{group.description}</p><strong>Explore services <Icon name="arrow" /></strong></a>)}
      </div>
      <div className={styles.promise}><Icon name="check" /><p>Your requirements come first. Provider availability, scope, price and booking details are confirmed before work is arranged.</p></div>
    </section>
    <FinalCta />
  </main><Footer /></>;
}
