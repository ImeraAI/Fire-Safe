import Image from 'next/image';
import { Icon } from './icon';
import { serviceCards, serviceGroups } from '@/content/services';
import styles from './service-catalogue.module.css';

export function ServiceCatalogue() {
  return <div className={'container ' + styles.catalogue}>
    <div className={styles.intro}>
      <span className={styles.eyebrow}>OUR SERVICES</span>
      <h2>A clearer plan for <span>safer properties.</span></h2>
      <p>Fire precautions, electrical checks and property surveys.<br />{' '}Find the right starting point for your premises.</p>
    </div>
    <div className={styles.categoryCards}>
      {serviceGroups.map(group => {
        const card = serviceCards[group.id];
        return <a className={styles.categoryCard} data-category={group.id} key={group.id} href={'/' + group.id}>
          <div className={styles.cardPhoto}><Image src={card.image} alt={card.alt} fill sizes="(max-width:700px) 75vw, 450px" /></div>
          <div className={styles.cardFade} />
          <div className={styles.cardCopy}>
            <Icon name={group.icon} />
            <span className={styles.mobileCardIcon}><Icon name={card.icon} /></span>
            <h3>{card.title}</h3>
            <p>{card.summary}</p>
            <span className={styles.cardCta}><span>{card.cta}</span><Icon name="arrow" /></span>
          </div>
        </a>;
      })}
    </div>
    <div className={styles.reassurance}>{[['phone','One clear enquiry','Tell us what you need'],['shield','Connected safety needs','Discuss several checks together'],['check','Confirm before booking','Agree the scope and next step']].map(([icon,title,body]) => <div key={title}><Icon name={icon} /><div><strong>{title}</strong><span>{body}</span></div></div>)}</div>
    <div className={styles.allHeading}><span className="eyebrow">FIND THE HELP YOU NEED</span><h2>Explore all our services</h2><p>Explore assessments, inspections, testing and surveys in one place.</p></div>
    <div className={styles.allServices}>
      {serviceGroups.map(group => <section id={group.id} key={group.id} aria-labelledby={group.id + '-heading'} className={styles.serviceGroup}>
        <div className={styles.groupHeading}><Icon name={group.icon} /><h2 id={group.id + '-heading'}>{group.heading}</h2></div>
        {group.services.map(service => <article id={service.slug} key={service.slug} className={styles.serviceRow}><h3><a href={'/' + group.id + '/' + service.slug}><span className={styles.serviceIcon}><Icon name={group.icon} /></span><span>{service.name}</span></a></h3><p>{service.body}</p><span className={styles.cardDetails} aria-hidden="true">View details <Icon name="arrow" /></span></article>)}
        <a className={styles.groupLink} href={'/' + group.id}>Explore all {group.name.toLowerCase()} <Icon name="arrow" /></a>
      </section>)}
    </div>
    <div className={styles.together}><div><h3>Need several safety checks?</h3><p>Share your property details and the checks you need in one enquiry.</p></div><a href="/contact?service=multiple-safety-services">Discuss my requirements <Icon name="arrow" /></a></div>
    <p className={styles.availability}>London pilot · Planned services, subject to provider and postcode availability.</p>
  </div>;
}

