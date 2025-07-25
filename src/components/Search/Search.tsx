import { useContext } from 'react';
import { QueryTextContext } from '../../context/context';

interface ISearch {
  onChange: (value: string) => void;
}

export default function Search({ onChange }: ISearch) {
  const value = useContext(QueryTextContext);
  return (
    <input
      type="text"
      name="search"
      id="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="
Please enter the full name of the country"
    />
  );
}
