import './style.css';
import { Link } from 'react-router';
import { useStoreStateCheckCards } from '../../store/store';

interface ICardDecsription {
  name: string;
  country: string;
  web_pages: string;
}

interface ICard {
  name: string;
  country: string;
  web_pages: string;
  description: ICardDecsription | null;
  setDescription: (description: ICardDecsription) => void;
}

export default function Card({
  name,
  country,
  web_pages,
  setDescription,
}: ICard) {
  const cardRef = {
    name: name,
    country: country,
    web_pages: web_pages,
  };
  const checkCard = useStoreStateCheckCards((state) => state.addToCheckedCards);
  // const checkedCards = useStoreStateCheckCards((state) => state.checkedCards);
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
      <Link
        to={'#'}
        onClick={() => {
          setDescription(cardRef);
        }}
      >
        <img src="/images.png" width={30} height={30} alt={name} />
        <p>Country: {country}</p>
      </Link>
    </li>
  );
}
