import { fireEvent, render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import { MemoryRouter } from 'react-router';
import Layout from '../../components/Layout/Layout';

describe('Layout', () => {
  it('it should render checkbox theme', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const label = screen.getByLabelText('Current theme color: light');
    expect(label).toBeInTheDocument();
    const field = screen.getByRole('checkbox') as HTMLInputElement;
    const mockHandleChangeThemeColor = vi.fn();
    expect(field).toBeInTheDocument();
    fireEvent.click(field, { mockHandleChangeThemeColor });
    expect(field.checked).toBe(true);
  });
  it('it should render link to rsschool', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const links = screen.getAllByRole('link');
    expect(
      links.forEach((link) => {
        link.hasAttribute('src');
      })
    );
  });
  it('it should render footer', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByText('2025.'));
  });
});
