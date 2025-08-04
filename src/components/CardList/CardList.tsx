import './style.css';
import Card from '../Card/Card';
import Description from '../Description/Description';
import FlyoutElement from '../FlyoutElement/FlyoutElement';
import { useState } from 'react';
import { useStoreStateCheckCards } from '../../store/store';
import type { IUniversities, IUniversityCard } from '../../types/cards';

export default function CardList({ universities }: IUniversities) {
  const [description, setDescription] = useState<IUniversityCard | null>(null);
  const checkedCards = useStoreStateCheckCards((state) => state.checkedCards);
  return universities.length <= 0 ? (
    <p>Not find universities.</p>
  ) : (
    <>
      <ul className="cardItem">
        {universities.map(({ name, country, web_pages }: IUniversityCard) => {
          return (
            <Card
              key={name}
              name={name}
              country={country}
              web_pages={web_pages}
              setDescription={setDescription}
            />
          );
        })}
      </ul>
      {description !== null ? (
        <>
          <Description description={description} />{' '}
          <button onClick={() => setDescription(null)}>
            Close description
          </button>
        </>
      ) : (
        ''
      )}{' '}
      {checkedCards.length > 0 ? <FlyoutElement /> : ''}
    </>
  );
}
