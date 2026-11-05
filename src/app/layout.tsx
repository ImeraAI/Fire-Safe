import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fire & Property Safety in London | London Fire Safety Group',
  description: 'Explore fire risk assessments, fire door inspections, alarms, EICRs, gas safety and property surveys with London Fire Safety Group.',
  metadataBase: new URL('https://londonfiresafetygroup.co.uk'),
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Browser extensions may add attributes to the root element before hydration.
  return <html lang="en-GB" suppressHydrationWarning><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
