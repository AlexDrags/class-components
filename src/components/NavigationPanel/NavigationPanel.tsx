import './style.css';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';

export default function NavigationPanel() {
  const t = useTranslations('HomePage');
  return (
    <>
      <LocaleSwitcher />
      <nav className="navigation">
        <Link href="/">{t('title')}</Link>
        <Link href="/about">{t('about')}</Link>
      </nav>
    </>
  );
}
