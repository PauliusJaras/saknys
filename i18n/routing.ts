import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'lt'],
 
  // Used when no locale matches
  defaultLocale: 'lt',
  // No prefix for default locale
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/blog': '/blogas'
  }
});