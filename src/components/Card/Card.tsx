import './style.css';
import Image from 'next/image';
import type { ICardDecsription } from '../../types/cards';
import { useStoreStateCheckCards } from '../../store/store';

export default function Card({
  name,
  country,
  web_pages,
  setDescription,
}: ICardDecsription) {
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
          setDescription(cardRef);
        }}
      >
        <Image src={`/images.png`} alt={name} width={64} height={64} />
        <p>Country: {country}</p>
      </a>
    </li>
  );
}
