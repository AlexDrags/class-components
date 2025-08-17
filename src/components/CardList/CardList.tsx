'use client';
import './style.css';
import Card from '../Card/Card';
import FlyoutElement from '../FlyoutElement/FlyoutElement';
import { useStoreStateCheckCards } from '../../store/store';
import type { IUniversityCard } from '../../types/cards';

export default function CardList({ result }: { result: IUniversityCard[] }) {
  const checkedCards = useStoreStateCheckCards((state) => state.checkedCards);

  return (
    <>
      <ul className="card-item">
        {result.map(({ name, country, web_pages }: IUniversityCard) => (
          <Card
            key={name}
            name={name}
            country={country}
            web_pages={web_pages}
          />
        ))}
      </ul>

      {checkedCards.length > 0 ? <FlyoutElement /> : ''}
    </>
  );
}
