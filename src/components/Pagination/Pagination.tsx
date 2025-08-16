'use client';
import './style.css';
import { handlePagination } from '../../utils/handlePagination';
import { getData, getDataPage } from '../../api/getData';
import { useQuery } from '@tanstack/react-query';
import { useStorePageCountCards } from '../../store/store';

export default function Pagination() {
  const countPages = useStorePageCountCards((state) => state.countPages);
  const incrementCountPage = useStorePageCountCards(
    (state) => state.incrementCountPage
  );
  const decrementCountPage = useStorePageCountCards(
    (state) => state.decrementCountPage
  );
  const countCardsPerPage = 5;

  const resultLength = useQuery({
    queryKey: ['paginationLength'],
    queryFn: () => getData(),
  });

  const resultPage = useQuery({
    queryKey: ['universities', countPages, `${countCardsPerPage}`],
    queryFn: () => getDataPage(`${countPages}`, `${countCardsPerPage}`),
  });

  if (resultLength.isPending || resultPage.isPending) {
    return <h3>Loading...</h3>;
  }

  if (resultLength.isError || resultPage.isError) {
    return <h3>Error: {(resultLength.error.message, resultPage.isError)} </h3>;
  }

  return (
    <div className="pagination">
      {resultLength.data.map((el, index) => {
        if (index < Math.floor(resultLength.data.length / countCardsPerPage)) {
          return index === 0 ? (
            <form
              key={index}
              onSubmit={(e) => {
                e.preventDefault();
                const indx = index;
                decrementCountPage(indx);
                console.log(`${indx}`, `${countCardsPerPage}`);
                handlePagination(`${index}`, `${countCardsPerPage}`);
              }}
            >
              <button type="submit">{index + 1}</button>
            </form>
          ) : (
            <form
              key={index}
              onSubmit={(e) => {
                e.preventDefault();
                incrementCountPage(countCardsPerPage - 1);
                console.log(`${countCardsPerPage - 1}`, `${countCardsPerPage}`);
                handlePagination(
                  `${countCardsPerPage}`,
                  `${countCardsPerPage}`
                );
              }}
            >
              <button type="submit">{index + 1}</button>
            </form>
          );
        }
      })}
    </div>
  );
}
