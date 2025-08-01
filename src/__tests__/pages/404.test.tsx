import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import NotFound from '../../pages/404';
describe('page 404', () => {
  it('should render page 404', () => {
    render(<NotFound />);
    expect(screen.getByText('Page not found!')).toBeInTheDocument();
  });
});
