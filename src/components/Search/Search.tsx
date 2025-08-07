import './style.css';
import { useStore } from '../../store/store';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import searchData from '../../api/search';

export default function Search() {
  const queryValue = useStore((state) => state.query);
  const changeQueryValue = useStore((state) => state.userInputQuery);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['universities', queryValue],
    queryFn: () => searchData(queryValue),
  });

  useEffect(() => {
    console.log('queryValue', queryValue);
    const localStore = localStorage.getItem('lastSearch');
    if (localStore) changeQueryValue(localStore);
    if (!localStore) changeQueryValue('');
  }, []);
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  return (
    <input
      type="text"
      name="search"
      id="search"
      value={queryValue}
      onChange={(e) => changeQueryValue(e.target.value.trim())}
      placeholder="
Enter country: example Kuwait or Jordan"
      autoFocus
    />
  );
}
