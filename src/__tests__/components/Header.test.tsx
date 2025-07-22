import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Header/Header';
import '@testing-library/jest-dom/vitest';

describe('should render header', () => {
  it('Header', () => {
    render(
      <Header value={''} handleChange={() => {}} handleSubmit={() => {}} />
    );
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
