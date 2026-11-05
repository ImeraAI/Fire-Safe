import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serviceGroups } from '@/content/services';
import { ServiceDetailPage } from '@/components/service-detail-page';

const category = "electrical-safety";
const group = serviceGroups.find(item => item.id === category)!;
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return group.services.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = group.services.find(item => item.slug === slug);
  if (!service) notFound();
  return { title: `${service.name} in London | London Fire Safety Group`, description: service.body };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!group.services.some(service => service.slug === slug)) notFound();
  return <ServiceDetailPage category={category} slug={slug} />;
}
