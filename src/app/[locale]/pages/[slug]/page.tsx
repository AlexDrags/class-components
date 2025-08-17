import '../../../../index.css';
import QueryProvider from '../../providers';
import { notFound } from 'next/navigation';
import { getDataPage, getData } from '../../../../api/getData';
import Header from '../../../../components/Header/Header';
import Pagination from '../../../../components/Pagination/Pagination';
import CardList from '../../../../components/CardList/CardList';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getData();
  const cardList = await getDataPage(`${slug - 1}`, '1');

  if (!cardList || !cardList.length) {
    notFound();
  }
  return (
    <>
      <QueryProvider>
        <Header />
      </QueryProvider>
      <section className="item-list">
        {data && <CardList result={cardList} />}
      </section>
      {data && <Pagination resultLength={data} />}
    </>
  );
}
