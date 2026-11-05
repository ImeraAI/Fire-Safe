import { pilot } from '@/content/landing';
import { JourneySteps } from './journey-steps';
import styles from './how-it-works.module.css';

function MangoIllustration() {
  return <svg viewBox="0 0 460 340" role="img" aria-labelledby="mango-assistant-title" className={styles.illustration}>
    <title id="mango-assistant-title">AI assistant wearing a headset and helping with a property safety enquiry at a laptop</title>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 308h379M40 316h260" />
      <path fill="#eef6fc" stroke="none" d="M71 284c-35-49-17-122 35-144 50-21 70 18 111-13 52-40 119-6 134 49 14 52-12 98-46 119H94Z" />
      <path fill="#fff" d="M332 308l14-104c2-17 11-27 22-25 14 2 18 14 15 28l-20 101M344 307h37" />
      <path fill="#9ac7e3" d="M219 184c11-15 58-20 77-3 20 18 29 60 28 127H208l-3-65-29 33-28-21 47-58c7-8 15-11 24-13Z" />
      <path stroke="#fff" d="M266 198c10 24 11 60 6 83M225 224l-9 29" />
      <path fill="#fff" d="M232 154v31c8 15 31 15 40-1l-4-39" />
      <path fill="#fff" d="M209 88c-12 23-10 35-16 48l13 7 3 19c12 12 41 8 55-7l11-29-1-38Z" />
      <path fill="#9ac7e3" d="M205 98c-8-21 1-48 24-55 33-11 61 5 69 31 8 24-2 40-10 55l-18 17-7-43-6-24c-11 13-31 18-52 19Z" />
      <path d="M219 118v5m-9 22h12" />
      <path fill="#fff" d="M271 114c-4-26-8-49-21-64l8-3c17 18 25 42 26 69" />
      <rect fill="#fff" x="262" y="106" width="26" height="39" rx="12" />
      <path d="M271 118v15m-8 4-18 16h-24" />
      <rect fill="#fff" x="211" y="149" width="13" height="7" rx="3" />
      <path fill="#fff" d="M243 244l-35 37-55 2-13 14h75c7 0 12-3 17-8l32-28" />
      <path fill="#fff" d="m154 283-26-7-21 3-10 14h46m-29-9-8 9m19-7-5 7" />
      <path fill="#9ac7e3" d="m71 224 22 77h101l-4 7H88l-25-81c-2-7 5-10 8-3Z" />
      <path fill="#fff" d="m71 224 53 2 21 75H93Z" />
      <path d="m101 255 3 11m-3-5h9" />
      <path fill="#fff" d="M331 79h72c7 0 11 4 11 11v37c0 7-4 11-11 11h-39l-18 14 3-14h-18c-7 0-11-4-11-11V90c0-7 4-11 11-11Z" />
      <path d="m342 109 18-15 19 15m-32-3v18h25v-18m-16 18v-11h8v11" />
      <path d="m391 96 3 5 6 1-5 4 1 6-5-3-5 3 1-6-5-4 6-1 3-5Z" />
      <path d="M66 169v16m-8-8h16M354 48v10m-5-5h10" stroke="#a5cbe3" />
    </g>
  </svg>;
}

export function HowItWorksSection() {
  return <section className={`section container ${styles.layout}`} id="how-it-works" aria-labelledby="how-it-works-title">
    <div className={styles.intro}>
      <span className="eyebrow">HOW IT WORKS</span>
      <h2 id="how-it-works-title">From your first request to your next step</h2>
      <p>A straightforward service enquiry, from start to finish.</p>
      <MangoIllustration />
    </div>
    <div className={styles.journey}>
      <svg className={styles.curve} viewBox="0 0 100 510" preserveAspectRatio="none" aria-hidden="true"><path d="M10 0C96 120 96 390 10 510" fill="none" stroke="currentColor" /></svg>
      <JourneySteps steps={pilot.steps} />
    </div>
  </section>;
}
