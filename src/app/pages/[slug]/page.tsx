import '../../../index.css';
import { notFound } from 'next/navigation';
import { getDataPage, getData } from '../../../api/getData';
import Pagination from '../../../components/Pagination/Pagination';
import Card from '../../../components/Card/Card';
import type { IUniversityCard } from '../../../types/cards';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getData();
  const cardList = await getDataPage(`${slug - 1}`, '1');
  console.log('cardList', cardList);
  if (!cardList.length) {
    notFound();
  }
  return (
    <>
      <section className="item-list">
        <ul className="card-item">
          {cardList.map(({ name, country, web_pages }: IUniversityCard) => (
            <Card
              key={name}
              name={name}
              country={country}
              web_pages={web_pages}
            />
          ))}
        </ul>
      </section>
      {data && <Pagination resultLength={data} />}
    </>
  );
}
