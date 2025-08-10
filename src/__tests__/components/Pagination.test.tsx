import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Pagination from '../../components/Pagination/Pagination';
import * as handlePagination from '../../utils/handlePagination';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('Pagination', () => {
  vi.mock('../../utils/handlePagination', () => ({
    handlePagination: vi.fn(),
  }));

  it('it should render pagination', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    render(<Pagination />, { wrapper });
    const buttons = await screen.findAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button.getAttribute('type'));
    });
    if (buttons.length > 0) {
      fireEvent.submit(buttons[0]);
      expect(handlePagination.handlePagination).toHaveBeenCalledWith('0', '5');
      expect(buttons[0]).toHaveTextContent('1');
      fireEvent.submit(buttons[1]);
      expect(handlePagination.handlePagination).toHaveBeenCalledWith('4', '5');
      expect(buttons[1]).toHaveTextContent('2');
    }
    // const mockUniversities = [
    //   {
    //     name: 'name',
    //     country: 'country',
    //     web_pages: 'web_pages',
    //   },
    //   {
    //     name: 'name',
    //     country: 'country',
    //     web_pages: 'web_pages',
    //   },
    // ];
    // const mockSetUniversities = vi.fn();

    // const mockHandle = vi.spyOn(handlePagination, 'handlePagination');
  });
});
