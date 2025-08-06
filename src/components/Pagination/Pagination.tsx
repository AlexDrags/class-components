import './style.css';
import { handlePagination } from '../../utils/handlePagination';
import type { ISetUniversities } from '../../types/cards';
import { getData, getDataPage } from '../../api/getData';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useStorePageCountCards } from '../../store/store';

export default function Pagination({
  universities,
  setUniversities,
}: ISetUniversities) {
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
    queryKey: ['universities', countPages, '5'],
    queryFn: () => getDataPage(`${countPages}`, '5'),
  });

  useEffect(() => {
    // console.log(countPages);
    if (resultLength.data && resultPage.data) {
      // console.log('resultLength ', resultLength.data.length);
      // console.log('resultPage ', resultPage.data);
      // console.log('countPages', countPages);
      // console.log('countPages', countPages);
    }
  }, [
    resultLength.isPending,
    resultLength.data,
    resultPage.isPending,
    resultPage.data,
  ]);

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
                // console.log(
                //   '1 => ',
                //   countPages,
                //   `${index}`,
                //   `${countCardsPerPage}`,
                //   resultPage.data
                // );
                handlePagination(
                  `${index}`,
                  `${countCardsPerPage}`,
                  resultPage.data,
                  setUniversities
                );
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
                // console.log(
                //   '2 => ',
                //   countPages,
                //   `${countCardsPerPage - 1}`,
                //   `${countCardsPerPage}`,
                //   resultPage.data
                // );
                handlePagination(
                  `${countCardsPerPage - 1}`,
                  `${countCardsPerPage}`,
                  resultPage.data,
                  setUniversities
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
