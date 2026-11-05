import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/components/service-category-page';
export const metadata: Metadata = {"title": "Gas & carbon monoxide safety services in London | London Fire Safety Group", "description": "Discuss gas appliance checks and carbon monoxide alarm requirements for your property, with the provider and exact scope confirmed before booking."};
export default function Page() { return <ServiceCategoryPage category="gas-safety" />; }
