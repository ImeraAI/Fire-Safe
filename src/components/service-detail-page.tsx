import { Icon } from './icon';
import { ServicePhoto } from './service-photo';
import features from '@/content/service-features.json';
import { serviceGroups, serviceDetails } from '@/content/services';
import { Header, Footer, FinalCta } from './landing-sections';
import { ServiceRequestLink } from './service-request-link';
import styles from './service-catalogue.module.css';

export function ServiceDetailPage({ category, slug }: { category: string; slug: string }) {
  const group = serviceGroups.find(item => item.id === category)!;
  const service = group.services.find(item => item.slug === slug)!;
  const detail = serviceDetails[slug];
  const feature = features[slug as keyof typeof features];
  return <><Header /><main id="main" className={styles.serviceDetail}>
    <section className={'container ' + styles.categoryHero}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href={'/' + category}>{group.name}</a><span aria-hidden="true">/</span><span aria-current="page">{service.name}</span></nav>
      <div className={styles.heroGrid}><div><span className="eyebrow">{group.name.toUpperCase()} IN LONDON</span><h1>{service.name} in London</h1><p>{detail.intro}</p><div className={styles.heroActions}><ServiceRequestLink slug={slug} className="button button-green">Enquire about this service</ServiceRequestLink><a href={'/' + category} className="text-link">Explore all {group.name.toLowerCase()} <Icon name="arrow" /></a></div><p className={styles.availability}>London pilot · Provider and postcode availability to be confirmed.</p></div><ServicePhoto src={feature.hero} alt={feature.heroAlt} preload /></div>
    </section>
    <section className={'container ' + styles.detailColumns}><div><span className="eyebrow">A PLAN FOR YOUR PROPERTY</span><h2>What to discuss</h2><p>{service.body}</p><ul>{detail.scope.map(point => <li key={point}>{point}</li>)}</ul></div><div className={styles.detailPanel}><h2>Before you enquire</h2><p>These details help us understand what you need.</p><ul>{detail.prepare.map(point => <li key={point}>{point}</li>)}</ul><ServiceRequestLink slug={slug} className={styles.requestLink}>Start your enquiry</ServiceRequestLink></div></section>
    <section className={'container ' + styles.featureSection}><ServicePhoto src={feature.second} alt={feature.secondAlt} /><div><span className="eyebrow">THE DETAILS THAT MATTER</span><h2>{feature.title}</h2><p>{feature.body}</p><ServiceRequestLink slug={slug} className={styles.requestLink}>Discuss your requirements</ServiceRequestLink></div></section>
    <section className={'container ' + styles.preparation}><h2>Your next step</h2><p>Tell us about your requirements and preferred date. The provider, service scope, price and timing must be agreed before work is arranged. An enquiry does not confirm a booking.</p></section>
    <section className={'container ' + styles.pageList}><span className="eyebrow">MORE WAYS WE CAN HELP</span><h2>Other {group.name.toLowerCase()} services</h2><div className={styles.relatedGrid}>{group.services.filter(item => item.slug !== slug).map(item => <a className={styles.relatedCard} key={item.slug} href={'/' + category + '/' + item.slug}><h3><span className={styles.serviceIcon}><Icon name={group.icon} /></span><span>{item.name}</span></h3><p>{item.body}</p><span className={styles.cardDetails} aria-hidden="true">View details <Icon name="arrow" /></span></a>)}</div></section>
    <FinalCta /></main><Footer /></>;
}
