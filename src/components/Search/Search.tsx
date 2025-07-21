interface ISearch {
  onChange: (prev: string) => void;
  value: string;
}

export default function Search({ onChange, value }: ISearch) {
  return (
    <input
      type="text"
      name="search"
      id="search"
      value={value}
      onChange={() => onChange}
      placeholder="
Please enter the full name of the country"
    />
  );
}
