import './style.css';
import { Link } from 'react-router';

// interface ICard {
//   name: string;
//   country: string;
//   web_pages: string;
// }

// export default function Card({ name, country, web_pages }: ICard) {
export default function Card({ country }: { country: string }) {
  return (
    <li>
      <Link to={'#'}>
        {/* <p>{name}</p> */}
        <p>Country: {country}</p>
        {/* <p>Web-page: {web_pages}</p> */}
      </Link>
    </li>
  );
}
