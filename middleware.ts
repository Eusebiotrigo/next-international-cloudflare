import { createI18nMiddleware } from 'next-international/middleware';
import type { NextRequest } from 'next/server';

export const runtime = 'experimental-edge';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
});

export function middleware(request: NextRequest) {
  console.log("Cookie", request.cookies.get("Next-Locale"));
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
