import './style.css';
import { useStore } from '../../store/store';

export default function Search() {
  const queryValue = useStore((state) => state.query);
  const changeQueryValue = useStore((state) => state.userInputQuery);
  return (
    <input
      type="text"
      name="search"
      id="search"
      value={queryValue}
      onChange={(e) => changeQueryValue(e.target.value)}
      placeholder="
Enter country: example Kuwait or Jordan"
    />
  );
}
