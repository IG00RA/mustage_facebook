import '../../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Montserrat, Wix_Madefor_Display } from 'next/font/google';
import { getMessages } from 'next-intl/server';
import { Suspense } from 'react';
import { FacebookPixel } from '@/components/FacebookPixel/FacebookPixel';
import { ToastContainer } from 'react-toastify';
import QueryInitializer from '@/components/QueryInitializer/QueryInitializer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font_mons',
  adjustFontFallback: false,
});

const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font_wix',
  adjustFontFallback: false,
});

const localeMetadata: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  uk: {
    title:
      'Mustage Study - Навчись заливати рекламу самостійно та керувати бюджетом ефективно',
    description:
      'Безкоштовний курс з арбітражу трафіку для власників бізнесу та підприємців. Навчись запускати рекламу на Facebook, контролювати витрати, оцінювати ефективність маркетологів та масштабувати бізнес без зайвих витрат.',
    keywords:
      'арбітраж трафіку, навчання рекламі Facebook, залив реклами, арбітраж для бізнесу, контроль рекламного бюджету, автоматизація реклами, гемблінг вертикаль, оптимізація витрат, маркетинг без агентств',
  },
  ru: {
    title:
      'Mustage Study - Научись лить рекламу самостоятельно и эффективно управлять бюджетом',
    description:
      'Бесплатный курс по арбитражу трафика для владельцев бизнеса. Запускай рекламу на Facebook, контролируй маркетинг, оценивай эффективность специалистов и масштабируй бизнес без лишних затрат.',
    keywords:
      'арбитраж трафика, обучение Facebook Ads, залив рекламы, арбитраж для бизнеса, контроль бюджета, автоматизация рекламы, вертикаль гемблинг, оптимизация расходов, маркетинг без агентств',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { locale } = await params;
  const metadataValues = localeMetadata[locale] || localeMetadata.uk;

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || 'https://study.mustage.team'
    ),
    title: metadataValues.title,
    description: metadataValues.description,
    keywords: metadataValues.keywords,
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataValues.title,
      description: metadataValues.description,
      images: [
        {
          url: '/assets/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: metadataValues.title,
        },
      ],
    },
    openGraph: {
      title: metadataValues.title,
      description: metadataValues.description,
      type: 'website',
      images: [
        {
          url: '/assets/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: metadataValues.title,
        },
      ],
    },
    icons: {
      icon: [
        { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/assets/favicon.svg', type: 'image/svg+xml' },
        { url: '/assets/favicon.ico', type: 'image/x-icon' },
        { url: '/assets/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    manifest: '/assets/site.webmanifest',
  };
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${montserrat.variable} ${wixMadeforDisplay.variable}`}
        >
          <QueryInitializer>
            {children}
            <ToastContainer />
            <Suspense fallback={null}>
              <FacebookPixel locale={locale} />
            </Suspense>
          </QueryInitializer>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
