import './style.css';
import { getDataPage } from '../../api/getData';
import Card from '../Card/Card';
import Description from '../Description/Description';
import FlyoutElement from '../FlyoutElement/FlyoutElement';
import { useEffect, useState } from 'react';
import { useStoreStateCheckCards } from '../../store/store';
import type { IUniversities, IUniversityCard } from '../../types/cards';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export default function CardList({ universities }: IUniversities) {
  const queryClient = useQueryClient();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['universities'],
    queryFn: () => getDataPage('0', '5'),
  });
  const [description, setDescription] = useState<IUniversityCard | null>(null);
  const checkedCards = useStoreStateCheckCards((state) => state.checkedCards);
  useEffect(() => {
    console.log(data);
  });
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  return universities.length <= 0 ? (
    <p>Not find universities.</p>
  ) : (
    <>
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
      {/* {checkedCards.length > 0 ? <FlyoutElement /> : ''} */}
    </>
  );
}
