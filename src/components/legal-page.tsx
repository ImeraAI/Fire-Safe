import { Icon } from './icon';
import { Header, Footer } from './landing-sections';
import policies from '@/content/legal.json';
import styles from './legal-page.module.css';

export function LegalPage({ policy }: { policy: keyof typeof policies }) {
  const content = policies[policy];
  return <><Header /><main id="main" className={'container ' + styles.main}><nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{content.title}</span></nav><header className={styles.header}><span className="eyebrow">LONDON FIRE SAFETY GROUP</span><h1>{content.title}</h1><p>{content.intro}</p><span className={styles.date}>Last updated: 2 November 2026</span></header><div className={styles.layout}><nav className={styles.contents} aria-label="On this page"><strong>On this page</strong>{content.sections.map(([title], index) => <a key={title} href={'#section-' + (index + 1)}>{title}</a>)}<a href="mailto:info@imeraai.com">Contact us <Icon name="arrow" /></a></nav><article className={styles.article}>{content.sections.map(([title, body], index) => <section id={'section-' + (index + 1)} key={title}><h2>{index + 1}. {title}</h2><p>{body}</p></section>)}<aside className={styles.contact}><h2>Related information</h2><a href="/privacy-policy">Privacy policy</a><a href="/cookie-policy">Cookie policy</a><a href="/terms-and-conditions">Website terms</a><a href="https://www.imeraai.com/privacy-policy">Imera AI privacy policy <Icon name="arrow" /></a><a href="https://ico.org.uk/make-a-complaint/">Contact the UK privacy regulator <Icon name="arrow" /></a></aside></article></div></main><Footer /></>;
}
