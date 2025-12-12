import {defineRouting} from 'next-intl/routing';

type routeKeys = 'home' | 'blog' | 'reservation' | 'about' | 'contacts'

export const routes:Record<routeKeys, string> = {
  home: '/',
  blog: '/blog',
  reservation: '/reservation',
  about: '/about',
  contacts: '/contacts'
}
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'lt'],
 
  // Used when no locale matches
  defaultLocale: 'lt',
  // No prefix for default locale
  localePrefix: 'as-needed',
  pathnames: {
    [routes.home]: '/',
    [routes.blog]: {
      en: '/blog',
      lt: '/blogas'
    },
    [routes.reservation]: {
      en: '/reservation',
      lt: '/rezervacija'
    },
    [routes.about]: {
      en: '/about',
      lt: '/apie'
    },
    [routes.contacts]: {
      en: '/contacts',
      lt: '/kontaktai'
    }
  }
});