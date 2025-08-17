import './style.css';
import { useStoreStateCheckCards } from '../../store/store';
import downloadCvs from '../../api/downloadCvs';
export default function FlyoutElement() {
  const clearCheckedCards = useStoreStateCheckCards(
    (state) => state.clearCheckedCards
  );
  const checkedCards = useStoreStateCheckCards((state) => state.checkedCards);
  console.log(checkedCards);
  return (
    <div className="modal">
      <p>{`${checkedCards.length}`} items are selected</p>
      <div>
        <button type={'button'} onClick={clearCheckedCards}>
          Unselect all
        </button>
        <button
          onClick={async () => {
            const payload = await downloadCvs(checkedCards);
            const blob = new Blob([payload], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${checkedCards.length}_items`;
            document.body.appendChild(a);
            a.click();
            a.remove();
          }}
        >
          Download cvs
        </button>
      </div>
    </div>
  );
}
