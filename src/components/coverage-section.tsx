import { Icon } from './icon';
import styles from './coverage-section.module.css';

function LondonSkyline() {
  return <svg className={styles.skyline} viewBox="0 0 1440 280" fill="none" aria-hidden="true">
    <g fill="#e7ebf1" stroke="#b8c5d5" strokeWidth="2" strokeLinejoin="round">
      <path d="M0 245h440v-32h-50v-35h-25v35h-38v-55h-15v55H95v-48H75v48H0Z" />
      <path d="M60 245V140l10-22 10 22v105m20 0V160l10-22 10 22v105m15 0V148l10-22 10 22v97m130 0V159l10-22 10 22v108" />
      <path d="M172 245V94h58v151M167 94h68V75h-68ZM180 75V54h42v21M184 54l17-38 17 38M201 16V2" />
      <path d="M184 164h34v81h-34zM183 181h36m-36 24h36m-36 22h36" />
      <circle cx="201" cy="123" r="18" fill="white" /><path d="M201 110v13l9 5" stroke="#7d8fa5" strokeWidth="3" />
    </g>
    <g stroke="#bdc9d8" strokeWidth="2"><circle cx="343" cy="144" r="76" /><circle cx="343" cy="144" r="69" /><path d="m343 144-34 101m34-101 34 101M267 144h152M343 68v152M289 90l108 108m-108 0L397 90M314 74l58 140m-99-99 140 58m-140 0 140-58m-99 99 58-140" />{Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return <circle key={i} cx={343+76*Math.cos(a)} cy={144+76*Math.sin(a)} r="4" fill="#a5b2c1" />;})}</g>
    <g fill="#e7ebf1" stroke="#b8c5d5" strokeWidth="2"><path d="M1010 236h430v25h-430zM1040 236v-21h400M1052 261q55-68 110 0m25 0q55-68 110 0m25 0q55-68 110 0" /><path d="M1070 215v-54m-7 0h14l-7-17ZM1350 215v-70m-7 0h14l-7-17Z" /><path d="M1210 215v-36q0-9 9-9h67q9 0 9 9v36Z" fill="#d8a7a0" stroke="#c18e86" /><path d="M1219 179h66v10h-66zM1219 195h45v9h-45z" fill="white" stroke="none" /></g>
    <path d="M0 268h450m560 0h430M25 277h310m765 0h300" stroke="#e9edf3" strokeWidth="4" />
  </svg>;
}

export function CoverageSection() {
  const boroughs = ['Westminster','Camden','Islington','Hackney','Tower Hamlets','Southwark','Lambeth','Wandsworth','Ealing','Newham','Brent','Barnet','Croydon','Haringey','Lewisham','Greenwich','Hammersmith & Fulham','Kensington & Chelsea','Hounslow','Waltham Forest','Redbridge','Enfield','Bromley','Hillingdon','Harrow','Kingston upon Thames','Richmond upon Thames','Merton','Sutton','Bexley','Havering','Barking & Dagenham','City of London'];
  return <section className={styles.section} aria-labelledby="coverage-heading"><LondonSkyline /><div className="container"><div className={styles.heading}><span className={styles.badge}><Icon name="location" />Starting in London</span><h2 id="coverage-heading">Safety enquiries <span>across London.</span></h2><p>We’re preparing our London pilot. These are the areas we’re exploring; service and postcode availability will be confirmed when you enquire.</p></div><div className={styles.panel}><ul className={styles.boroughs} aria-label="London areas we are exploring">{boroughs.map(borough => <li key={borough}><Icon name="location" /><span>{borough}</span></li>)}</ul><div className={styles.bottom}><div className={styles.prompt}><span className={styles.mapIcon}><Icon name="location" /></span><div><h3>Don’t see your area?</h3><p>Enquire with your postcode and we’ll confirm availability.</p></div></div><a className="button button-green" href="/contact">Enquire about your postcode <Icon name="arrow" /></a></div></div></div></section>;
}
