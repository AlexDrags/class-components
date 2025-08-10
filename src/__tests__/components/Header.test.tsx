import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
