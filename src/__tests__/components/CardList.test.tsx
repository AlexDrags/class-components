import { render, screen } from '@testing-library/react';
import { CardList } from '../../components/CardList/CardList';
import '@testing-library/jest-dom/vitest';
import { Card } from '../../components/Card/Card';

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

describe('CardList', () => {
  it('should render list when array cards is empty', () => {
    render(<CardList universities={[]} />);
    expect(screen.getByText(/Not find universities/i)).toBeInTheDocument();
  });
  it('should render list universities cards', () => {
    const universities: ICard[] = [
      { name: 'cantral-usa', country: 'us', web_pages: 'central@us.com' },
      { name: 'west-afrika', country: 'af', web_pages: 'west@afrika.af' },
    ];

    universities.forEach((universiti) => {
      const { name, country, web_pages } = universiti;
      render(<Card name={name} country={country} web_pages={web_pages} />);
    });
  });
});
