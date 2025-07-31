import './style.css';
import { CSVLink } from 'react-csv';
import { useStoreStateCheckCards } from '../../store/store';
export default function FlyoutElement() {
  const clearCheckedCards = useStoreStateCheckCards(
    (state) => state.clearCheckedCards
  );
  const checkedCards = useStoreStateCheckCards((state) => state.checkedCards);
  const headers = [
    { label: 'Name of universities', key: 'name' },
    { label: 'Country', key: 'country' },
    { label: 'Web-page', key: 'web_pages' },
  ];
  return (
    <div className="modal">
      <p>{`${checkedCards.length}`} items are selected</p>
      <div>
        <button onClick={clearCheckedCards}>Unselect all</button>
        <CSVLink
          data={checkedCards}
          filename={`${checkedCards.length}_items.csv`}
          separater={';'}
          headers={headers}
        >
          Download cvs
        </CSVLink>
        ;
      </div>
    </div>
  );
}
