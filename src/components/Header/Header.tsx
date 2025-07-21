import { type ChangeEvent, type FormEvent } from 'react';
import Button from '../Button/Button';
import Search from '../Search/Search';

interface Iprops {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Header({ handleSubmit, handleChange, value }: Iprops) {
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <Search value={value} onChange={handleChange} />
        <Button typeButton={'submit'}>Search universiti</Button>
      </form>
    </header>
  );
}
