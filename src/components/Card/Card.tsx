import './style.css';
import { Link } from 'react-router';

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
  return (
    <li>
      <Link
        to={'#'}
        onClick={() => {
          setDescription(cardRef);
        }}
      >
        <img src="/public/images.png" width={30} height={30} alt={name} />
        <p>Country: {country}</p>
      </Link>
    </li>
  );
}
