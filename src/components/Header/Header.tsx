import Button from '../Button/Button';
import Search from '../Search/Search';
import { handleSearchSubmit } from '../../utils/handleSearchSubmit';

// interface Iprops {
//   handleChangeValue: (prev: string) => void;
//   value: string;
//   universities: [];
// }

interface ICard {
  name: string;
  country: string;
  web_pages: string;
}

interface IHeaderProps {
  value: string;
  setValue: (prev: string) => void;
  universities: ICard[];
  setUniversities: (prev: ICard[]) => void;
}

export default function Header({
  value,
  setValue,
  universities,
  setUniversities,
}: IHeaderProps) {
  return (
    <header>
      <form
        action={() => {
          handleSearchSubmit(value, universities, setUniversities);
        }}
      >
        <Search value={value} onChange={setValue} />
        <Button typeButton={'submit'}>Search universiti</Button>
      </form>
    </header>
  );
}
