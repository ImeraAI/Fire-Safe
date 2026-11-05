import Image from 'next/image';
import dimensions from '@/content/image-dimensions.json';
import styles from './service-catalogue.module.css';

export function ServicePhoto({ src, alt, preload = false }: { src: string; alt: string; preload?: boolean }) {
  const size = dimensions[src as keyof typeof dimensions];
  return <div className={styles.naturalPhoto + (size.height > size.width ? " " + styles.portraitPhoto : "")}><Image src={src} alt={alt} width={size.width} height={size.height} sizes="(max-width:700px) calc(100vw - 36px), (max-width:1000px) 46vw, 608px" preload={preload} /></div>;
}
