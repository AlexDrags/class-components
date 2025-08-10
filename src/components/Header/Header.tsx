import './style.css';
import Search from '../Search/Search';

export default function Header() {
  return (
    <header className="header">
      <div className="form">
        <Search />
      </div>
    </header>
  );
}
