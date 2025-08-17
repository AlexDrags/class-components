import './style.css';
import { useTranslations } from 'next-intl';
export default function Page() {
  const t = useTranslations('AboutPage');
  return (
    <>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <a target="blank" href="https://rs.school/courses/reactjs">
        RS School React
      </a>
    </>
  );
}
