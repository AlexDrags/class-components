'use client';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('Switcher');
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  function handleSwitch() {
    router.replace(
      { pathname },
      { locale: currentLocale === 'en' ? 'ru' : 'en' }
    );
  }

  return (
    <button type="button" onClick={handleSwitch}>
      {t('title')}
    </button>
  );
}
