import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Pagination from '../../components/Pagination/Pagination';
import * as handlePagination from '../../utils/handlePagination';

describe('Pagination', () => {
  vi.mock('../../api/getData', () => ({
    getData: vi.fn(() => Promise.resolve(10)),
  }));
  it('it should render pagination', async () => {
    const mockUniversities = [
      {
        name: 'name',
        country: 'country',
        web_pages: 'web_pages',
      },
      {
        name: 'name',
        country: 'country',
        web_pages: 'web_pages',
      },
    ];
    const mockSetUniversities = vi.fn();

    const mockHandle = vi.spyOn(handlePagination, 'handlePagination');

    render(
      <Pagination
        universities={mockUniversities}
        setUniversities={mockSetUniversities}
      />
    );
    const buttons = await screen.findAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button.getAttribute('type'));
    });

    if (buttons.length > 0) {
      fireEvent.submit(buttons[0]);
      expect(mockHandle).toHaveBeenCalledWith(
        '0',
        '5',
        mockUniversities,
        mockSetUniversities
      );
      expect(buttons[0]).toHaveTextContent('1');
      fireEvent.submit(buttons[1]);
      expect(mockHandle).toHaveBeenCalledWith(
        '4',
        '5',
        mockUniversities,
        mockSetUniversities
      );
      expect(buttons[1]).toHaveTextContent('2');
    }
  });
});
