import './style.css';
import Button from '../Button/Button';
import Search from '../Search/Search';
import { handleSearchSubmit } from '../../utils/handleSearchSubmit';
import { useContext } from 'react';
import { QueryTextContext } from '../../context/context';

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

interface IHeaderProps {
  setValue: (prev: string) => void;
  universities: ICard[];
  setUniversities: (prev: ICard[]) => void;
}

export default function Header({
  setValue,
  universities,
  setUniversities,
}: IHeaderProps) {
  const value = useContext(QueryTextContext);
  return (
    <header className="header">
      <form
        action={() => {
          handleSearchSubmit(value, universities, setUniversities);
        }}
      >
        <Search onChange={setValue} />
        <Button typeButton={'submit'}>Search universiti</Button>
      </form>
    </header>
  );
}
