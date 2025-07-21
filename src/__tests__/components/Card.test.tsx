import { render, screen } from '@testing-library/react';
import Card from '../../components/Card/Card';
interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

describe('Card', () => {
  const card: ICard = {
    name: 'cantral-usa',
    country: 'us',
    web_pages: 'central@us.com',
  };
  const { name, country, web_pages } = card;
  it('should render card when load card data', () => {
    render(<Card name={name} country={country} web_pages={web_pages} />);
  });
  screen.debug();
});
