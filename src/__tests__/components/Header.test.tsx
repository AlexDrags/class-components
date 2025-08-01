import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';

describe('Header', () => {
  it('should render header', () => {
    render(<Header universities={[]} setUniversities={() => {}} />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
    fireEvent.submit(form);
  });
});
