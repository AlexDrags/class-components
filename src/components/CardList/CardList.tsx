import './style.css';
import Card from '../Card/Card';
import Description from '../Description/Description';
import { useState } from 'react';

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

interface ICardDecsription {
  name: string;
  country: string;
  web_pages: string;
}

interface IProps {
  universities: ICard[];
}
export default function CardList({ universities }: IProps) {
  const [description, setDescription] = useState<ICardDecsription | null>(null);
  return universities.length <= 0 ? (
    <p>Not find universities.</p>
  ) : (
    <>
      <ul className="cardItem">
        {universities.map(
          (
            {
              name,
              country,
              web_pages,
            }: {
              name: string;
              country: string;
              web_pages: string;
            },
            index
          ) => {
            return (
              <Card
                key={index}
                name={name}
                country={country}
                web_pages={web_pages}
                description={description}
                setDescription={setDescription}
              />
            );
          }
        )}
      </ul>
      {description !== null ? <Description description={description} /> : ''} ;
    </>
  );
}
