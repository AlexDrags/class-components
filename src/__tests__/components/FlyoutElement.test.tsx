import { fireEvent, render, screen } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import FlyoutElement from '../../components/FlyoutElement/FlyoutElement';
import { MemoryRouter } from 'react-router';

describe('FlyoutElement', () => {
  it('render modal state', () => {
    const mockClearCheckedCards = vi.fn();
    render(
      <MemoryRouter>
        <FlyoutElement />
      </MemoryRouter>
    );
    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeInTheDocument();

    fireEvent.click(button, mockClearCheckedCards);
    expect(button.hasAttribute('type'));
    expect(screen.getAllByText('Unselect all'));
    expect(screen.getAllByText('Download cvs'));
  });
});
