'use client';
import './style.css';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../../store/store';
import Search from '../Search/Search';
import Card from '../Card/Card';
import searchData from '../../api/search';

export default function Header() {
  const queryValue = useStore((state) => state.query);
  const resultSearch = useQuery({
    queryKey: ['universities', queryValue],
    queryFn: () => searchData(queryValue),
  });

  useEffect(() => {}, [queryValue, resultSearch.data]);

  return (
    <header className="header">
      <div className="form">
        <Search />
      </div>
      {resultSearch.isPending ? (
        <h3>Loading...</h3>
      ) : resultSearch.isError ? (
        <h3>Error: {resultSearch.error.message}</h3>
      ) : (
        ''
      )}
      {queryValue.length > 0 && resultSearch.data ? (
        <div className="result-search">
          <h4>Result searching:</h4>

          <ul className="cardItem">
            {resultSearch.data.map(
              ({ name, country, web_pages }: IUniversityCard) => {
                return (
                  <Card
                    key={name}
                    name={name}
                    country={country}
                    web_pages={web_pages}
                  />
                );
              }
            )}
          </ul>
        </div>
      ) : (
        ''
      )}
    </header>
  );
}
