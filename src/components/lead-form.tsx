'use client';

import { useEffect, useState } from 'react';
import { serviceGroups } from '@/content/services';
import { audiences } from '@/content/audiences';
import { Icon } from './icon';

export function LeadForm() {
  const [previewed, setPreviewed] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedAudience, setSelectedAudience] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    const audience = params.get('audience');
    if (service && (service === 'multiple-safety-services' || serviceGroups.some(group => group.services.some(item => item.slug === service)))) setSelectedService(service);
    if (audience && audiences.some(item => item.id === audience)) setSelectedAudience(audience);
    const selectService = (event: Event) => {
      const slug = (event as CustomEvent<string>).detail;
      if (slug !== 'multiple-safety-services' && !serviceGroups.some(group => group.services.some(service => service.slug === slug))) return;
      setSelectedService(slug);
      setPreviewed(false);
    };
    window.addEventListener('mango:enquiry-service', selectService);
    const selectAudience = (event: Event) => {
      const detail = (event as CustomEvent<{ audience: string; service: string }>).detail;
      if (!audiences.some(audience => audience.id === detail.audience)) return;
      setSelectedAudience(detail.audience);
      setSelectedService(detail.service);
      setPreviewed(false);
    };
    window.addEventListener('mango:audience-enquiry', selectAudience);
    return () => {
      window.removeEventListener('mango:enquiry-service', selectService);
      window.removeEventListener('mango:audience-enquiry', selectAudience);
    };
  }, []);
  return <form className="lead-form" onSubmit={(event) => { event.preventDefault(); setPreviewed(true); }}>
    <div className="form-heading"><span className="eyebrow">LET’S START WITH YOU</span><h3>What does your property need?</h3><p>Try the callback journey. This preview does not send or save your details.</p></div>
    <label htmlFor="service">I need help with</label>
    <select id="service" name="service" required value={selectedService} onChange={event => { setSelectedService(event.target.value); setPreviewed(false); }}><option value="" disabled>Choose a service</option>{serviceGroups.map(group => <optgroup label={group.name} key={group.id}>{group.services.map(service => <option key={service.slug} value={service.slug}>{service.name}</option>)}</optgroup>)}<option value="multiple-safety-services">Multiple safety services</option></select>
    <div className="audience-field"><label htmlFor="audience">I’m enquiring as <span>(optional)</span></label><select id="audience" name="audience" value={selectedAudience} onChange={event => { setSelectedAudience(event.target.value); setPreviewed(false); }}><option value="">Choose your property type</option>{audiences.map(audience => <option key={audience.id} value={audience.id}>{audience.name}</option>)}</select></div>
    <div className="form-row"><div><label htmlFor="postcode">London postcode</label><input id="postcode" name="postcode" autoComplete="postal-code" placeholder="e.g. SW4 7AA" required maxLength={8} pattern="[A-Za-z]{1,2}[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}" title="Enter a full UK postcode, for example SW4 7AA" /></div><div><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your callback number" required pattern="[+0-9 ()-]{10,20}" /></div></div>
    <p className="form-note">At launch, our AI agent will call to discuss your request. A callback request will not confirm a booking.</p>
    <button className="button button-dark" type="submit">Preview my callback request <Icon name="arrow" /></button>
    <p role="status" className="form-status">{previewed ? 'Preview complete. No request was sent, no details were stored and no call will be made.' : 'Demo only · No payment or booking'}</p>
  </form>;
}
