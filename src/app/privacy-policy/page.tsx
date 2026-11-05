import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {"title": "Privacy policy | London Fire Safety Group", "description": "How information is handled when you visit London Fire Safety Group or contact us."};

export default function Page() { return <LegalPage policy="privacy-policy" />; }
