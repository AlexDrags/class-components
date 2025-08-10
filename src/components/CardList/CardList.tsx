import './style.css';
import { getDataPage } from '../../api/getData';
import searchData from '../../api/search';
import Card from '../Card/Card';
import Description from '../Description/Description';
import FlyoutElement from '../FlyoutElement/FlyoutElement';
import { useEffect, useState } from 'react';
import {
  useStoreStateCheckCards,
  useStorePageCountCards,
  useStore,
} from '../../store/store';
import type { IUniversityCard } from '../../types/cards';
import { useQuery } from '@tanstack/react-query';

export default function CardList() {
  const countPages = useStorePageCountCards((state) => state.countPages);
  const queryValue = useStore((state) => state.query);
  const countCardsPerPage = 5;
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['universities', countPages, countCardsPerPage],
    queryFn: () => getDataPage(`${countPages}`, `${countCardsPerPage}`),
  });
  const resultSearch = useQuery({
    queryKey: ['universities', queryValue],
    queryFn: () => searchData(queryValue),
  });
  const [description, setDescription] = useState<IUniversityCard | null>(null);
  const checkedCards = useStoreStateCheckCards((state) => state.checkedCards);
  useEffect(() => {}, [
    countPages,
    isPending,
    data,
    queryValue,
    resultSearch.data,
  ]);
  if (!data) {
    return <h3>Not find universities</h3>;
  }
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
    <>
      {resultSearch.isPending ? (
        <h3>Loading...</h3>
      ) : resultSearch.isError ? (
        <h3>Error: {error.message}</h3>
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
                    setDescription={setDescription}
                  />
                );
              }
            )}
          </ul>
        </div>
      ) : (
        ''
      )}
      <ul className="cardItem">
        {data.map(({ name, country, web_pages }: IUniversityCard) => {
          return (
            <Card
              key={name}
              name={name}
              country={country}
              web_pages={web_pages}
              setDescription={setDescription}
            />
          );
        })}
      </ul>
      {description !== null ? (
        <>
          <Description description={description} />{' '}
          <button onClick={() => setDescription(null)}>
            Close description
          </button>
        </>
      ) : (
        ''
      )}{' '}
      {checkedCards.length > 0 ? <FlyoutElement /> : ''}
    </>
  );
}
