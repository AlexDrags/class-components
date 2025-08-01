import { fireEvent, render, screen } from '@testing-library/react';
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
  it('it should renders correct number of items when data is provided', () => {
    render(
      <Card
        name={'name'}
        country={'country'}
        web_pages={'web_pages'}
        setDescription={() => {}}
      />
    );
    expect(screen.getByText('Country: country')).toBeInTheDocument();
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.hasAttribute('src'));
    expect(img.hasAttribute('alt'));
    const link = screen.getByRole('link') as HTMLAnchorElement;
    expect(link).toBeInTheDocument();
    expect(link.hasAttribute('href'));
    const field = screen.getByRole('checkbox') as HTMLInputElement;
    expect(field).toBeInTheDocument();
    fireEvent.click(field);
    expect(field.checked).toBe(true);
  });
});
