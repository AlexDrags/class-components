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
    <>
      <form
        action={() => {
          handlePaginationPrev(universities, setUniversities);
        }}
      >
        <button type="submit">1</button>
      </form>
      <form
        action={() => {
          handlePaginationNext(universities, setUniversities);
        }}
      >
        <button type="submit">2</button>
      </form>
    </>
  );
}
