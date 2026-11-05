import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/components/service-category-page';
export const metadata: Metadata = {"title": "Property surveys & management services in London | London Fire Safety Group", "description": "Plan specialist surveys and organise safety requirements across a single property or a portfolio, starting with the records and priorities you already have."};
export default function Page() { return <ServiceCategoryPage category="property-surveys" />; }
