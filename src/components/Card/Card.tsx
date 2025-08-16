'use client';
import './style.css';
import Image from 'next/image';
import { useState } from 'react';
import type { IUniversityCard } from '../../types/cards';
import { useStoreStateCheckCards } from '../../store/store';
import Description from '../Description/Description';

export default function Card({ name, country, web_pages }: IUniversityCard) {
  const [showDescription, setShowDescription] = useState(false);
  const cardRef = {
    name: name,
    country: country,
    web_pages: web_pages,
  };
  const checkCard = useStoreStateCheckCards((state) => state.addToCheckedCards);
  const removeFromCheckCards = useStoreStateCheckCards(
    (state) => state.removeFromCheckCards
  );
  return (
    <li>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={(e) => {
          if (!e.target.checked) removeFromCheckCards(e.target.id);
          if (e.target.checked) checkCard(cardRef);
        }}
      />
      <a
        href={'#'}
        onClick={() => {
          setShowDescription(true);
        }}
      >
        <Image src={`/images.png`} alt={name} width={64} height={64} />
        <p>Country: {country}</p>
      </a>
      {showDescription ? (
        <div className="description-container">
          <Description name={name} country={country} web_pages={web_pages} />
          <button onClick={() => setShowDescription(false)}>
            Close description
          </button>
        </div>
      ) : (
        ''
      )}
    </li>
  );
}
