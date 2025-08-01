import { render, screen } from '@testing-library/react';
import CardList from '../../components/CardList/CardList';
// import '@testing-library/jest-dom/vitest';
// import Card from '../../components/Card/Card';

// interface ICard {
//   name: string;
//   country: string;
//   web_pages: string;
// }

describe('CardList', () => {
  it('should render message when data array is empty', () => {
    render(<CardList universities={[]} />);
    expect(screen.getByText(/Not find universities/i)).toBeInTheDocument();
  });
  it('it should renders correct number of items when data is provided', () => {
    render(
      <CardList
        universities={[
          { name: 'cantral-usa', country: 'us', web_pages: 'central@us.com' },
          { name: 'west-afrika', country: 'af', web_pages: 'west@afrika.af' },
        ]}
      />
    );
    const elements = screen.getAllByRole('listitem');
    expect(elements.length).toBe(2);
  });
  it('it should correctly displays item names and descriptions', () => {
    render(
      <CardList
        universities={[
          { name: 'cantral-usa', country: 'us', web_pages: 'central@us.com' },
        ]}
      />
    );
    expect(screen.getByText('Country: us')).toBeInTheDocument();
  });
});
