'use client';
import './style.css';
import { use, useState } from 'react';
import type { IUniversityCard } from '../types/cards';
import Card from '../components/Card/Card';
import Pagination from '../components/Pagination/Pagination';
import Description from '../components/Description/Description';

export default function CardList({ cards }: { cards: IUniversityCard[] }) {
  const countCardsPerPage = 5;
  const cardList = use(cards);
  const [description, setDescription] = useState<IUniversityCard | null>(null);

  return (
    <section className="item-list">
      <ul className="cardItem">
        {cardList.map(
          ({ name, country, web_pages }: IUniversityCard, index) => {
            if (index < countCardsPerPage)
              return (
                <Card
                  key={name}
                  name={name}
                  country={country}
                  web_pages={web_pages}
                  setDescription={setDescription}
                />
              );
          }
        )}
      </ul>
      {description && (
        <div className="wrapper-description">
          <Description description={description} />{' '}
          <button onClick={() => setDescription(null)}>
            Close description
          </button>
        </div>
      )}
      <Pagination />
    </section>
  );
}
