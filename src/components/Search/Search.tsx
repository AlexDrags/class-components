import './style.css';
import { useStore } from '../../store/store';
import { useEffect } from 'react';

export default function Search() {
  const queryValue = useStore((state) => state.query);
  const changeQueryValue = useStore((state) => state.userInputQuery);
  useEffect(() => {
    const localStore = localStorage.getItem('lastSearch');
    if (localStore) changeQueryValue(localStore);
    if (!localStore) changeQueryValue('');
  }, [changeQueryValue]);
  return (
    <input
      type="text"
      name="search"
      id="search"
      value={queryValue}
      onChange={(e) => changeQueryValue(e.target.value.trim())}
      placeholder="
Enter country: example Kuwait or Jordan"
    />
  );
}
