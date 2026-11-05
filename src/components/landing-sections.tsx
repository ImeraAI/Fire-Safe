import Image from 'next/image';

import { pilot } from '@/content/landing';
import { Icon } from './icon';
import { LeadForm } from './lead-form';
import { ServiceCatalogue } from './service-explorer';
import { AudienceCards } from './audience-cards';
import { SiteHeader } from './site-header';
import { CustomerHighlights } from './customer-highlights';
import { HowItWorksSection } from './how-it-works';

export function PoweredByMango({ dark = false }: { dark?: boolean } = {}) {
  return <span className="powered-by">Powered by <span className="mango-wordmark"><Image src={dark ? '/images/mango-logo-dark.svg' : '/images/mango-logo.png'} width={dark ? 260 : 237} height={dark ? 88 : 66} alt="Mango" /></span></span>;
}
export function BrandLogo({ dark = false }: { dark?: boolean } = {}) {
  return <span className={'brand-logo' + (dark ? ' brand-logo-on-dark' : '')}><Image src={dark ? '/images/lfsg-footer-shield.svg' : '/images/london-fire-safety-logo-navy-red-final.png'} width={dark ? 1254 : 1920} height={dark ? 1254 : 819} alt="London Fire Safety Group" unoptimized /></span>;
}
export function Header() { return <SiteHeader />; }
export function Hero() {
  return <section className="hero" id="home">
    <Image className="hero-background" src="/images/london-fire-safety-hero-navy-red.png" alt="Fire safety professional handling a hose beside a London Fire Safety Group vehicle" fill sizes="100vw" preload />
    <div className="hero-shade" />
    <div className="container hero-inner"><div className="hero-copy">
      <h1>Fire & property safety<br /><span>for the places<br />London depends on.</span></h1>
      <ul className="hero-checklist">{['Fire risk assessments & inspections', 'Alarms, extinguishers & emergency lighting', 'Electrical & gas safety enquiries', 'One property or a whole portfolio'].map(item => <li key={item}><span className="check-circle"><Icon name="check" /></span>{item}</li>)}</ul>
      <div className="hero-actions"><a className="button button-lime" href="/contact">Request a service <Icon name="arrow" /></a><a className="button button-glass" href="#services">Explore our services <Icon name="arrow" /></a></div>
      <div className="hero-endorsement"><span className="endorsement-icon"><Icon name="phone" /></span><div><strong>Your request. One conversation.</strong><span>London preview · Fire & property safety</span></div></div>
    </div></div>
  </section>;
}
export function TrustSection() {
  const tags = [['shield','Fire & property safety'],['building','Homes & commercial premises'],['phone','One clear enquiry'],['check','Scope agreed before booking']];
  return <section className="trust-strip" aria-label="Our approach"><div className="trust-track">{[false, true].map(duplicate => <div key={String(duplicate)} className={'container trust-grid' + (duplicate ? ' trust-duplicate' : '')} aria-hidden={duplicate || undefined}>{tags.map(([icon,text]) => <div key={text}><Icon name={icon} /><strong>{text}</strong></div>)}</div>)}</div></section>;
}
export function ServicesSection() {
  return <section className="services-redesign" id="services"><ServiceCatalogue /></section>;
}
export function AudienceSection() {
  return <section className="audience-section" id="who-we-help"><div className="section container"><div className="section-heading centered"><span className="eyebrow">WHO WE HELP</span><h2>Support for every kind of property</h2><p>Safety enquiries for residents, landlords, HMO owners, managing agents and businesses.</p></div><AudienceCards /></div></section>;
}
export function ProblemSection() {
  return <section className="section container" id="why-us"><CustomerHighlights /></section>;
}
export function CommercialSection() {
  return <section className="commercial-section"><div className="container commercial-grid"><div><span className="eyebrow">LANDLORDS & MANAGING AGENTS</span><h2>More than one property?<br />Start with one conversation.</h2><p>Tell us about the properties you manage and the work you have in mind. We can gather your requirements before the provider and booking details are agreed.</p><ul className="tick-list"><li><Icon name="check" />Explain the properties and the type of help needed.</li><li><Icon name="check" />Discuss access, timing and your preferred next step.</li><li><Icon name="check" />Confirm the scope and price with the provider.</li></ul><a className="button button-lime" href="/contact">Discuss your properties <Icon name="arrow" /></a></div><div className="commercial-cards">{[['Private landlords','Discuss fire, electrical and gas checks for your rental.'],['Agents & block managers','Share the needs of the properties you look after.'],['Offices & workspaces','Plan safety inspections around your working day.'],['HMO owners','Discuss shared accommodation and existing safety reports.']].map(([title,body]) => <a key={title} href="/contact"><Icon name="shield" /><div><h3>{title}</h3><p>{body}</p></div><Icon name="arrow" /></a>)}</div></div></section>;
}
export function HowItWorks() {
  return <HowItWorksSection />;
}
export function FaqSection() {
  return <section className="soft-section" id="faqs"><div className="section container faq-grid"><div><span className="eyebrow">YOUR QUESTIONS, ANSWERED</span><h2>A little clarity<br />before you call.</h2><p>Learn how the London pilot works and what happens when you make a request.</p><a className="button button-dark" href="/contact">Ask about your service <Icon name="arrow" /></a></div><div>{pilot.faqs.map(faq => <details key={faq.question} name="service-faq"><summary>{faq.question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>;
}
export function FinalCta() {
  return <section className="request-section" id="request"><div className="section container final-grid"><div><span className="eyebrow">LET’S TALK PROPERTY SAFETY</span><h2>Your property.<br />Your safety priorities.<br /><span>Start with a conversation.</span></h2><p>Share your postcode, building type and the safety checks you need. At launch, our AI assistant will gather the details to help arrange the next step.</p><div className="phone-panel"><Icon name="phone" /><div><span>Prefer to speak to us?</span>{pilot.phone ? <a href={`tel:${pilot.phone}`}>{pilot.phoneLabel}</a> : <strong>London number coming soon</strong>}</div></div><PoweredByMango /></div><LeadForm /></div></section>;
}
export { CoverageSection } from './coverage-section';
export function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div><a href="/" aria-label="London Fire Safety Group home"><BrandLogo dark /></a><PoweredByMango dark /><p>Fire and property safety enquiries for homes, rental buildings and commercial premises across London.</p><p>Part of <a className="footer-parent" href="https://www.imeraai.com/">Imera AI</a></p></div><nav aria-label="Footer services"><h3>Our services</h3><a href="/fire-safety">Fire safety</a><a href="/electrical-safety">Electrical safety</a><a href="/gas-safety">Gas & carbon monoxide safety</a><a href="/property-surveys">Property surveys & management</a></nav><nav aria-label="Footer company"><h3>Company & support</h3><a href="/about">About us</a><a href="/#how-it-works">How it works</a><a href="/#faqs">Frequently asked questions</a><a href="/contact">Contact & enquiries</a><a href={`mailto:${pilot.email}`}>{pilot.email}</a></nav><nav aria-label="Footer legal"><h3>Legal & privacy</h3><a href="/privacy-policy">Privacy policy</a><a href="/cookie-policy">Cookie policy</a><a href="/terms-and-conditions">Website terms</a><a href="https://www.imeraai.com/privacy-policy">Parent company privacy</a><p>London pilot preview. The callback form is a demonstration.</p></nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} London Fire Safety Group. All rights reserved.</span><nav className="footer-legal-links" aria-label="Legal quick links"><a href="/privacy-policy">Privacy</a><a href="/cookie-policy">Cookies</a><a href="/terms-and-conditions">Terms</a></nav></div></footer>;
}
