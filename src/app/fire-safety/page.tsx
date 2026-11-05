import type { Metadata } from 'next';
import { ServiceCategoryPage } from '@/components/service-category-page';
export const metadata: Metadata = {"title": "Fire safety services in London | London Fire Safety Group", "description": "Understand the risks, check your protective systems and plan the next steps for your building. Explore assessments, inspections and maintenance enquiries."};
export default function Page() { return <ServiceCategoryPage category="fire-safety" />; }
