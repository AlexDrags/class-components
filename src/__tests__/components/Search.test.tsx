import { fireEvent, render, screen } from '@testing-library/react';
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

  it('it should displays previously saved search term from localStorage', () => {
    localStorage.setItem('lastSearch', 'universety');
    render(<Search />);
    const field = screen.getByRole('textbox') as HTMLInputElement;
    expect(field.value).toBe('universety');
  });
  it('it should displays empty field if not saved search term from localStorage', () => {
    localStorage.setItem('lastSearch', '');
    render(<Search />);
    const field = screen.getByRole('textbox') as HTMLInputElement;
    expect(field.value).toBe('');
  });
  it('it should updates input value when user types', () => {
    render(<Search />);
    const field = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(field, { target: { value: 'some text' } });
    expect(field.value).toBe('some text');
  });
  it('it should trims whitespace from search input before saving', () => {
    render(<Search />);
    const field = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(field, { target: { value: 'some text    ' } });
    expect(field.value).toBe('some text');
  });
});
