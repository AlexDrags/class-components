import { type ChangeEvent } from 'react';

interface ISearch {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Search({ onChange, value }: ISearch) {
  return (
    <input
      type="text"
      name="search"
      id="search"
      value={value}
      onChange={onChange}
      placeholder="
Please enter the full name of the country"
    />
  );
}
