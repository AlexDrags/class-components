import './style.css';
import { useStoreStateCheckCards } from '../../store/store';
export default function FlyoutElement() {
  const clearCheckedCards = useStoreStateCheckCards(
    (state) => state.clearCheckedCards
  );
  const checkedCards = useStoreStateCheckCards((state) => state.checkedCards);
  return (
    <div className="modal">
      <p>{`${checkedCards.length}`} items are selected</p>
      <div>
        <button onClick={clearCheckedCards}>Unselect all</button>
        <button onClick={() => {}}>Download in cvs</button>
      </div>
    </div>
  );
}
