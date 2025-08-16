import { getDataPage, getData } from '../../../api/getData';
import Pagination from '../../../components/Pagination/Pagination';
// import Card from '../../../components/Card/Card';
import type { IUniversityCard } from '../../../types/cards';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getData();
  const cardList = await getDataPage(`${slug - 1}`, '1');
  return (
    <>
      <section className="item-list">
        <ul className="card-item">
          {cardList.map(({ name, country, web_pages }: IUniversityCard) => (
            <div key={web_pages}>
              {JSON.stringify([name, country, web_pages])}
            </div>
          ))}
        </ul>
      </section>
      {data && <Pagination resultLength={data} />}
    </>
  );
}
