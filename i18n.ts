import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  return {
    locale, // İşte bu satır eksik olduğu için hata veriyordu!
    messages: (await import(`./messages/${locale}.json`)).default
  };
});