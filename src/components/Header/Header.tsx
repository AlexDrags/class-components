import './style.css';
import Button from '../Button/Button';
import Search from '../Search/Search';
import { handleSearchSubmit } from '../../utils/handleSearchSubmit';
// import { useContext } from 'react';
// import { QueryTextContext } from '../../context/context';
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
  // const value = useContext(QueryTextContext);
  const queryValue = useStore((state) => state.query);
  return (
    <header className="header">
      <form
        action={() => {
          handleSearchSubmit(queryValue, universities, setUniversities);
        }}
      >
        <Search />
        <Button typeButton={'submit'}>Search universiti</Button>
      </form>
    </header>
  );
}
