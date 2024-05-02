import type { ReactNode } from 'react';
import { Provider } from '../provider';

export const runtime = 'edge';
export default function Layout({ params: { locale }, children }: Readonly<{
  params: { locale: string };
  children: ReactNode
}>) {
  return <Provider locale={locale}>{children}</Provider>;
}
