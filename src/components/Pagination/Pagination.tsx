import { Link } from 'react-router';

// interface IPaginationProps {
//   handlePaginationPrev: (event: FormEvent<HTMLFormElement>) => void;
//   handlePaginationNext: (event: FormEvent<HTMLFormElement>) => void;
// }

export default function Pagination() {
  return (
    <>
      <form onSubmit={() => {}}>
        <Link to={'/page1'} type="submit">
          1
        </Link>
      </form>
      <form onSubmit={() => {}}>
        <Link to={'/page2'} type="submit">
          2
        </Link>
      </form>
    </>
  );
}
