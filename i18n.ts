import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Dil koduna göre messages klasöründen JSON dosyasını import eder
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});