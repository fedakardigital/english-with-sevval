import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  return {
    // locale'nin undefined gelme ihtimaline karşı varsayılan bir değer atıyoruz
    locale: locale || 'tr', 
    messages: (await import(`./messages/${locale}.json`)).default
  };
});