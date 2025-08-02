import './style.css';
import {
  handlePaginationNext,
  handlePaginationPrev,
} from '../../utils/handlePagination';
import type { ISetUniversities } from '../../types/cards';

export default function Pagination({
  universities,
  setUniversities,
}: ISetUniversities) {
  return (
    <div className="pagination">
      <form
        onSubmit={() => {
          handlePaginationPrev(universities, setUniversities);
        }}
      >
        <button type="submit">1</button>
      </form>
      <form
        onSubmit={() => {
          handlePaginationNext(universities, setUniversities);
        }}
      >
        <button type="submit">2</button>
      </form>
    </div>
  );
}
