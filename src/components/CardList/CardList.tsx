import './style.css';
import Card from '../Card/Card';
interface ICard {
  name: string;
  country: string;
  web_pages: string;
}
interface IProps {
  universities: ICard[];
}
export default function CardList({ universities }: IProps) {
  return universities.length <= 0 ? (
    <p>Not find universities.</p>
  ) : (
    <ul className="cardItem">
      {universities.map(
        (
          {
            // name,
            country,
            // web_pages,
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
              // name={name}
              country={country}
              // web_pages={web_pages}
            />
          );
        }
      )}
    </ul>
  );
}
