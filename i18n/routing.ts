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
    "/blog": {
      en: '/blog',
      lt: '/blogas'
    },
    "/reservation": {
      en: '/reservation',
      lt: '/rezervacija'
    },
    "/about": {
      en: '/about',
      lt: '/apie'
    },
    "/contacts": {
      en: '/contacts',
      lt: '/kontaktai'
    }
  }
});