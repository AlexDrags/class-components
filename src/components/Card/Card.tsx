import './style.css';

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

export default function Card({ name, country, web_pages }: ICard) {
  return (
    <li>
      <p>{name}</p>
      <p>Country: {country}</p>
      <p>Web-page: {web_pages}</p>
    </li>
  );
}
