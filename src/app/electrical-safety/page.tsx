import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/components/service-category-page';
export const metadata: Metadata = {"title": "Electrical safety services in London | London Fire Safety Group", "description": "Arrange enquiries for fixed wiring inspections, appliance testing and electrical upgrades for homes, rental properties and commercial premises."};
export default function Page() { return <ServiceCategoryPage category="electrical-safety" />; }
