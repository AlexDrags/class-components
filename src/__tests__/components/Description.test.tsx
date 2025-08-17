import { render, screen } from '@testing-library/react';
import Description from '../../components/Description/Description';

describe('Description', () => {
  it('should render description card data', () => {
    const description = {
      name: 'name',
      country: 'country',
      web_pages: 'web_pages',
    };
    render(<Description description={description} />);
    expect(screen.getByText('Name of universities: name')).toBeInTheDocument();
    expect(screen.getByText('Country: country')).toBeInTheDocument();
    expect(screen.getByText('Web-page: web_pages')).toBeInTheDocument();
  });
});
