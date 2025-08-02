import './style.css';
import type { ISetUniversities } from '../../types/cards';
import Button from '../Button/Button';
import Search from '../Search/Search';
import { handleSearchSubmit } from '../../utils/handleSearchSubmit';
import { useStore } from '../../store/store';

export default function Header({
  universities,
  setUniversities,
}: ISetUniversities) {
  const queryValue = useStore((state) => state.query);
  return (
    <header className="header">
      <form
        role={'form'}
        onSubmit={(evt) => {
          handleSearchSubmit(evt, queryValue, universities, setUniversities);
        }}
      >
        <Search />
        <Button typeButton={'submit'}>Search universiti</Button>
      </form>
    </header>
  );
}
