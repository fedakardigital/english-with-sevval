import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Desteklediğin diller
  locales: ['tr', 'en'],
  // Varsayılan dil
  defaultLocale: 'tr'
});

export const config = {
  // Sadece ilgili yolların çeviri sisteminden geçmesini sağlar
  matcher: ['/', '/(tr|en)/:path*']
};