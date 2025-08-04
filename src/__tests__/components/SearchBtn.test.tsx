import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import Button from '../../components/Button/Button';

describe('SearchButton', () => {
  it('it should renders search button', () => {
    render(<Button typeButton="submit">Search universiti</Button>);
    const searchBtn = screen.getByRole('button') as HTMLButtonElement;
    expect(searchBtn).toBeInTheDocument();
    expect(searchBtn).toHaveAttribute('type', 'submit');
    expect(screen.getByText('Search universiti')).toBeInTheDocument();
  });
});
