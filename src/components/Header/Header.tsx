import './style.css';
import Button from '../Button/Button';
import Search from '../Search/Search';
import { handleSearchSubmit } from '../../utils/handleSearchSubmit';
import { useStore } from '../../store/store';

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

interface IHeaderProps {
  universities: ICard[];
  setUniversities: (prev: ICard[]) => void;
}

export default function Header({
  universities,
  setUniversities,
}: IHeaderProps) {
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
