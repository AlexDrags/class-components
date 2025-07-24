interface ISearch {
  value: string;
  onChange: (value: string) => void;
}

export default function Search({ value, onChange }: ISearch) {
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
