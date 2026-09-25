import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

const pages = ['', 'competition/', 'calendar/', 'team/', 'sponsor/', 'join/', 'contact/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `${site.url}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/`;
  return pages.map((p) => ({ url: base + p }));
}
