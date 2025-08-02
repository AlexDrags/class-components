import './style.css';
import {
  handlePaginationNext,
  handlePaginationPrev,
} from '../../utils/handlePagination';
interface ICard {
  name: string;
  country: string;
  web_pages: string;
}
interface IPaginationProps {
  universities: ICard[];
  setUniversities: (prev: ICard[]) => void;
}

export default function Pagination({
  universities,
  setUniversities,
}: IPaginationProps) {
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
