import './style.css';
import { handlePagination } from '../../utils/handlePagination';
import type { ISetUniversities } from '../../types/cards';
import { getData } from '../../api/getData';
import { useEffect, useState } from 'react';

export default function Pagination({
  universities,
  setUniversities,
}: ISetUniversities) {
  const [countPages, setCountPages] = useState(0);
  const countCardsPerPage = 5;

  useEffect(() => {
    async function paginationLenght() {
      const response = await getData();
      setCountPages(Math.floor(Number(response) / countCardsPerPage));
    }
    paginationLenght();
  }, [countPages]);
  return (
    <div className="pagination">
      {universities.map((el, index) => {
        if (index < countPages) {
          return index === 0 ? (
            <form
              key={index}
              onSubmit={(e) => {
                e.preventDefault();
                handlePagination(
                  `${index}`,
                  `${countCardsPerPage}`,
                  universities,
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
                handlePagination(
                  `${countCardsPerPage - 1}`,
                  `${countCardsPerPage}`,
                  universities,
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
