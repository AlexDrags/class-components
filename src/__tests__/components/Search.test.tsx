import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import { Search } from '../../components/Search/Search';

describe('SearchField', () => {
  it('should be render search field', () => {
    render(<Search />);
    const field = screen.getByRole('textbox');
    expect(field).toBeInTheDocument();
  });
});
