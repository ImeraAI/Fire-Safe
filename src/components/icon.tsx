export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    location: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    phone: <path d="m8 3 3 5-3 3c2 3 3 4 6 5l3-3 4 3c0 4-2 5-4 5C10 20 4 14 3 7c0-3 2-4 5-4Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 6 9 7 9-7" /></>,
    truck: <><path d="M3 6h11v11H3m11-8h4l3 4v4h-2m-5 0h1M1 9h5M1 12h4" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
    'home-clean': <><path d="m3 11 8-7 8 7M5 10v10h12V10M9 20v-6h4v6" /><path d="m20 3 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" /></>,
    people: <><circle cx="12" cy="7" r="3" /><path d="M6 21v-2a6 6 0 0 1 12 0v2H6ZM5 5a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6M2 20v-2a5 5 0 0 1 3-4m17 6v-2a5 5 0 0 0-3-4" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4h8v3M3 11l9 4 9-4M10 14v3h4v-3" /></>,
    building: <><path d="M3 21V3h12v18M15 12h6v9M1 21h22M7 7h1m3 0h1M7 11h1m3 0h1M7 15h1m3 0h1M8 21v-3h3v3M18 16h1m-1 3h1" /></>,
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
    sparkle: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /><path d="M21 2v4m-2-2h4" /></>,
    box: <><path d="m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4M12 11v10M7 5l10 4" /></>,
    drop: <path d="M12 3S5 11 5 15a7 7 0 0 0 14 0c0-4-7-12-7-12Zm-4 12c0 2 1 3 3 3" />,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.arrow}</svg>;
}
