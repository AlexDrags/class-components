import { render, screen } from '@testing-library/react';
import Card from '../../components/Card/Card';

describe('Card', () => {
  it('should render card when load card data', () => {
    render(
      <Card
        name={'name'}
        country={'country'}
        web_pages={'web_pages'}
        setDescription={() => {}}
      />
    );
    const cardItem = screen.getByRole('listitem');
    expect(cardItem).toBeInTheDocument();
  });
});
