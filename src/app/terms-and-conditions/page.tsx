import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {"title": "Website terms | London Fire Safety Group", "description": "The terms for using this website and understanding the current London pilot preview."};

export default function Page() { return <LegalPage policy="terms-and-conditions" />; }
