import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Pagination from '../../components/Pagination/Pagination';
import * as handlePagination from '../../utils/handlePagination';

describe('Pagination', () => {
  it('it should render pagination', () => {
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

    const mockHandlePrev = vi.spyOn(handlePagination, 'handlePaginationPrev');
    const mockHandleNext = vi.spyOn(handlePagination, 'handlePaginationNext');

    render(
      <Pagination
        universities={mockUniversities}
        setUniversities={mockSetUniversities}
      />
    );
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button.getAttribute('type'));
    });

    if (buttons.length > 0) {
      fireEvent.submit(buttons[0]);
      expect(mockHandlePrev).toHaveBeenCalledWith(
        mockUniversities,
        mockSetUniversities
      );
      expect(buttons[0]).toHaveTextContent('1');
      fireEvent.submit(buttons[1]);
      expect(mockHandleNext).toHaveBeenCalledWith(
        mockUniversities,
        mockSetUniversities
      );
      expect(buttons[1]).toHaveTextContent('2');
    }
  });
});
