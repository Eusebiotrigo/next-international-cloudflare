import { getI18n } from '@/locales/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Subpage({ params: { locale } }: Readonly<{ params: { locale: string } }>) {

  const t = await getI18n();

  return (
    <div>
      <h1>SSR / SSG</h1>
      <p>Hello: {t('hello')}</p>
    </div>
  );
}
