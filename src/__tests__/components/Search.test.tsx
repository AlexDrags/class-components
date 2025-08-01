import { render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import Search from '../../components/Search/Search';

describe('SearchField', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should be render search field', () => {
    render(<Search />);
    const field = screen.getByRole('textbox');
    expect(field).toBeInTheDocument();
  });

  //   it('it should displays previously saved search term from localStorage', () => {
  //     localStorage.setItem('lastSearch', 'universety');
  //     render(<Search />);
  //     const field = screen.getByRole('textbox') as HTMLInputElement;
  //     expect(field.value).toBe('universety');
  //   });
  //   it('it should displays empty field if not saved search term from localStorage', () => {
  //     render(<Search />);
  //     const field = screen.getByRole('textbox') as HTMLInputElement;
  //     const value = field.value;
  //     const lStorage = localStorage.getItem('lastSearch');
  //     if (lStorage === null) expect(value).toEqual('');
  //   });
});
