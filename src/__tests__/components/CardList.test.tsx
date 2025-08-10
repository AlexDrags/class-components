import { render, screen } from '@testing-library/react';
import CardList from '../../components/CardList/CardList';
import '@testing-library/jest-dom/vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import { getDataPage } from '../../api/getData';

const mockUniversityData = [
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

// Мокируем API-запросы
vi.mock('../../api/getData', () => ({
  getDataPage: vi.fn(() => Promise.resolve(mockUniversityData)),
}));

vi.mock('../../api/search', () => ({
  default: vi.fn(() => Promise.resolve([])),
}));

describe('CardList', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Отключаем повторные запросы в тестах
      },
    },
  });
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  it('should render message when data array is empty', () => {
    vi.mocked(getDataPage).mockResolvedValueOnce([]);
    render(<CardList />, { wrapper });
    expect(screen.getByText(/Not find universities/i)).toBeInTheDocument();
  });
  it('it should renders correct number of items when data is provided', async () => {
    render(<CardList />, { wrapper });
    await waitFor(() => {
      const elements = screen.getAllByRole('listitem');
      expect(elements.length).toBe(2);
    });
  });
  it('it should correctly displays item names and descriptions', async () => {
    render(<CardList />, { wrapper });
    // await waitFor(() => {
    const elements = screen.getAllByText(/Country: .+/i);
    elements.forEach(async (element) => {
      expect(
        await screen.findByText('Country: ' + `${element.country}`)
      ).toBeInTheDocument();
    });
    // });
  });
});
