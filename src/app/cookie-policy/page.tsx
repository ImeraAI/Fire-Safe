import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {"title": "Cookie policy | London Fire Safety Group", "description": "A clear explanation of cookies, browser storage and the current website preview."};

export default function Page() { return <LegalPage policy="cookie-policy" />; }
