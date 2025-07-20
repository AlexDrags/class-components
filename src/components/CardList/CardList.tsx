import './style.css';
import { Card } from '../Card/Card';
import React from 'react';
interface ICard {
  name: string;
  country: string;
  web_pages: string;
}
interface IProps {
  universities: ICard[];
}
class CardList extends React.Component<IProps> {
  render() {
    return this.props.universities.length <= 0 ? (
      <p>Not find universities.</p>
    ) : (
      <ul className="cardItem">
        {this.props.universities.map(
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
              />
            );
          }
        )}
      </ul>
    );
  }
}

export { CardList };
