import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import AboutPage from '../../app/about/page';
describe('page about', () => {
  it('should render page about', () => {
    render(<AboutPage />);
    expect(screen.getByText('About author:')).toBeInTheDocument();
  });
  it('should render link to the rsschool', () => {
    render(<AboutPage />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href'));
    expect(screen.getAllByText('RS School React'));
  });
});
