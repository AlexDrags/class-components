import '../index.css';
import CardList from '../serverComponents/СardList';
import { getData } from '../api/getData';

// export function generateStaticParams() {
//   return [{ slug: [''] }];
// }

export default function Page() {
  const data = getData();
  return (
    <>
      <CardList cards={data} />
    </>
  ); // We'll update this
}
