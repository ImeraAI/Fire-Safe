'use client';

import { Icon } from './icon';

export function ServiceRequestLink({ slug, children, className }: { slug: string; children: React.ReactNode; className?: string }) {
  return <a href={`/contact?service=${encodeURIComponent(slug)}`} className={className}>{children}<Icon name="arrow" /></a>;
}
